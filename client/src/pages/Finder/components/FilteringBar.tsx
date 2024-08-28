import React, { useEffect, useMemo, useState } from 'react';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useAppDispatch } from '@/app/hooks';
import { query } from '@/features/finder/finderSlice';
import { getDiscoverInfo } from '@/apis/getAPIs';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { FaArrowRotateRight } from 'react-icons/fa6';
import { DiscoverInfo } from '@/types/info-discover';
import { MdExpandLess, MdExpandMore, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';

type FilteringBarProps = {
  handleClickClose?: () => void;
}

type CategoriesProps = {
  isMobile: boolean;
  result: Result[];
  checkbox: ClickedCheckbox;
  handleClickCheckbox: (index: number, i: number) => void;
}

type InfoKeyEng = 'viewable' | 'genres' | 'tags' | 'years' | 'ending' | 'medium' | 'brands';
type InfoKey = '' | '장르' | '태그' | '년도' | '방영' | '출시타입' | '브랜드';
type Result = [InfoKey, InfoKeyEng, []];

type ClickedCheckbox = number[][] | [];

const infoKey: InfoKey[] = ['', '장르', '태그', '년도', '방영', '출시타입', '브랜드'];

// 현재 클릭한 체크박스가 클릭된 체크박스 그룹에 포함되어 있는지
function isIncludedInArray(group: number[][], current: number[]): boolean {
  return group.some(arr => arr.every((value, index) => value === current[index]));
}

// 체크박스 그룹에서 특정 체크박스 제거하기
function removeArray(group: number[][], current: number[]) {
  return group.filter(arr => !arr.every((value, index) => value === current[index]));
}

const FilteringBar = ({ handleClickClose }: FilteringBarProps ) => {
  const isMobile = useScreenWidth();
  const dispatch = useAppDispatch();

  const { data }: UseQueryResult<DiscoverInfo[]> = useQuery({
    queryKey: ['discover-info'],
    queryFn: () => getDiscoverInfo(),
    staleTime: 60000 * 60,
  })

  // 체크박스 관리를 위한 데이터 가공 과정
  const infoData = data?.[0] ?? {}; 
  const infoEntries = Object.entries(infoData).slice(1,8); // _id 제외하기
  const result = infoEntries.map((entry, index) => { // 최종 결과
    return [infoKey[index], entry[0], entry[1]] as Result
  });

  // 체크박스 체크 여부 상태 관리
  const initialCheckState: ClickedCheckbox = [];
  const [checkbox, setCheckbox] = useState<ClickedCheckbox>(initialCheckState);

  // 클릭한 체크박스 초기화
  const handleReset = () => {
    setCheckbox(initialCheckState);
  }

  // 체크박스 클릭 시
  const handleClickCheckbox = (index: number, i: number) => {
    const current = [index, i] // 현재 배열 좌표

    // 현재 좌표가 클릭된 checkbox 그룹에 포함되어 있는지 여부
    const isInclude = isIncludedInArray(checkbox, current); 

    // 현재 좌표가 checkbox 그룹에 포함되어 있으면 삭제하고, 아니면 추가하기
    if (isInclude) {
      setCheckbox(removeArray(checkbox, current));

    } else {
      setCheckbox(prev => [...prev, current]);
    }
  }
  
  // 선택된 체크박스를 쿼리스트링으로 만들기
  const createQueryString = (clickedCheckboxes: number[][]): string  => {
    const res: string[] = []; 

    // 각 카테고리 배열에 어떤 요소가 추가되었는지 보기 위함
    const arr: string[][] = [
      ['viewable'],['svod'],['genres'],['tags'],['years'],['ending'],['medium'],['brands']
    ];

    // 선택된 체크박스 요소를 각 카테고리 배열에 분류하기
    clickedCheckboxes.sort()
    checkbox.forEach((item) => {
        const category = result[item[0]][1];
        const element = result[item[0]][2][item[1]];
        
        if (category === 'viewable') {
          if ( element === "감상 가능한 작품만 보기") {
            arr[0].push('true');
          } else {
            arr[1].push('true');
          }

        } else if (category === 'ending') {
          if ( element === "완결" ) {
            arr[5].push('true');
          } else {
            arr[5].push('false');
          }

        } else {
          arr[item[0]+1].push(element);

        }

        return arr;
    })
    
    // 쿼리스트링으로 만들기
    arr.forEach((item) => {
      const category = item[0];
      const exist = item.length >= 2;

      if ((category === 'viewable' || category === 'svod') && exist) {
        res.push(`${category}=${item[1]}`);

      } else if (category === 'ending' && item.length !== 3 && exist) {
        res.push(`${category}=${item[1]}`);

      } else if (exist) {
        res.push(`${category}=${item.slice(1,).join(',')}`);

      }
    })

    const q = res.length ? '?'+res.join('&') : '';

    return q;
  }

  const queryString = useMemo(() => {
    return createQueryString(checkbox);
  }, [checkbox]);

  useEffect(() => {
    dispatch(query(queryString));
  }, [queryString]);

  return (
    <>
      { !isMobile ? ( // 스크린 화면
        <div className='w-[280px] ml-10 mr-7 overflow-y-auto' style={{ 'maxHeight': 'calc(-196px + 100vh)' }}>
            <div className='w-inherit h-inherit max-w-inherit max-h-inherit'>
                <div className='flex justify-between'>
                    <p className='text-lg font-extrabold'>필터</p>
                    <div className='flex pt-1 pr-4 gap-1 hover:text-purple cursor-pointer'>
                        <FaArrowRotateRight className='text-sm mt-1' />
                        <p onClick={handleReset} className='text-sm font-extrabold'>
                          전체 초기화
                        </p>
                    </div>
                </div>
                <Categories 
                  isMobile={isMobile} 
                  result={result}
                  checkbox={checkbox}
                  handleClickCheckbox={handleClickCheckbox}
                />
            </div>
        </div>
      ) : ( // 태블릿, 모바일 화면
        <>
            <div 
                onClick={handleClickClose} 
                className='fixed top-0 left-0 w-full h-full bg-background-dim-1 z-20' 
            /> 
            <div onClick={(e) => e.stopPropagation()} className='fixed bg-white top-0 right-0 h-full max-w-xs w-full overflow-y-auto z-30'>
                <div className='p-5 flex justify-between'>
                    <p className='text-sm font-extrabold'>필터</p>
                    <div className='flex gap-1 hover:text-purple cursor-pointer'>
                        <FaArrowRotateRight className='text-sm mt-1' />
                        <p onClick={handleReset} className='text-sm font-extrabold'>
                          전체 초기화
                        </p>
                    </div>
                </div>
                <Categories 
                  isMobile={isMobile} 
                  result={result}
                  checkbox={checkbox}
                  handleClickCheckbox={handleClickCheckbox}
                />
            </div>
        </>
      )}
    </>
  );
}

const Categories = ({ isMobile, result, checkbox, handleClickCheckbox }: CategoriesProps) => {

  // 모바일 필터에서 더보기 토클 클릭 여부 상태 관리
  const initialIsExpanded = Array.from({ length: result.length }, (_, index) => index === 0);
  const [isExpanded, setIsExpanded] = useState<boolean[]>(initialIsExpanded);

  // 모바일 필터 바에서 더보기 토글 클릭 시
  const handleShowToggle = ( index: number ) => {
    setIsExpanded(prev => prev.map((item, idx) => idx === index ? !item : item ));
  }
  
  return (
    <>
      {result.map((item, index) => {
        const name = item[0];
        const elements = item[2];

        return (
          <div key={index}>
            {!isMobile? (
              <>
                <div className='w-full h-[1px] bg-border-1 mt-2' />
                <p className='text-lg font-extrabold mt-5 mb-5'>{name}</p>
                { elements.map((element, i) => (
                  <div key={i} className='px-5 py-2 flex justify-between'>
                    <p className='text-sm hover:text-purple cursor-pointer'>
                      {element}
                    </p>
                    <div onClick={() => handleClickCheckbox(index, i)}>
                      { isIncludedInArray(checkbox, [index, i]) ? (
                        <MdOutlineCheckBox className='text-purple text-xl' />
                      ) : (
                        <MdOutlineCheckBoxOutlineBlank className='text-purple text-xl' /> 
                      )}
                    </div>  
                  </div>
                ))}
              </>
            ):(
              <div key={index}>
                <div className='w-full h-[1px] bg-border-1 mt-2' />
                { (name === '') ? (
                    <div className='pt-3' />
                  ) : (
                    <div className='p-5 flex justify-between'>
                      <p className='text-sm font-extrabold'>
                        {name}
                      </p>
                      <div onClick={() => handleShowToggle(index)}>
                        { isExpanded[index] === true ? 
                          <MdExpandLess className='text-2xl' /> : <MdExpandMore className='text-2xl' /> 
                        }
                      </div>
                    </div>
                  )}
                  { isExpanded[index] && (
                    <>
                      { elements.map((element, i) => (
                        <div key={i} className='px-5 py-2 flex justify-between'>
                          <p className='text-sm hover:text-purple cursor-pointer'>{element}</p>
                          <div onClick={() => handleClickCheckbox(index, i)} >
                            { isIncludedInArray(checkbox, [index, i]) ? (
                              <MdOutlineCheckBox className='text-purple text-xl' />
                            ) : (
                              <MdOutlineCheckBoxOutlineBlank className='text-purple text-xl' /> 
                            )}
                          </div>
                        </div>
                      ))}
                    </>
                  )}
              </div>
            )}
          </div>
        )
      })}
    </>
  )
}

export default FilteringBar;
