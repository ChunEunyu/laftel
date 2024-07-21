import { FaStar } from "react-icons/fa";

const DetailCard = () => {
  return (
    <div className='flex items-start p-6 cursor-pointer gap-6'>
        <img 
            className='flex-shrink-0 p-0 lg:w-[22.5rem] lg:h-48 max-lg:w-[13rem] max-lg:h-32 object-cover rounded-sm'
            src='https://image.laftel.net/items/thumbs/big/dc55e1de-0ade-482d-bceb-aba6bc776673.jpg' 
            alt='' 
        />
        <div className='flex flex-col shrink'>
            <p className='text-[1.4rem] font-bold'>귀멸의 칼날</p>
            <div className='flex pt-1 gap-2 text-smoked-black'>
                <div className="flex flex-row gap-1">
                    <FaStar className="text-purple text-xl" />
                    <p className="text-purple font-bold">4.5</p>
                </div>
                <div className="flex flex-row gap-1">
                    <p>판타지</p>
                    <p>|</p>
                    <p>TVA·성인·완결</p>
                </div>
            </div>
            <p className="pt-7">
                여러분들, 성진우씨 기운 좀 팍팍 받아가시죠. 렙업 ㄱㄱ
                <br />
                <br />
                다른 차원과 이쪽 세계를 이어주는 통로인 '게이트'가 갑자기 발생한 뒤 10년. 세계에는 '헌터'라고 불리는 초인적인 힘에 각성한 사람들이 출현했다. 헌터는 게이트 안의 던전을 공략하고 대가를 받는 것을 생업으로 하고 있는데 그런 강자들만 가득한 헌터들 중 '성진우'는 인류 최약병기라고 불리는 저랭크 헌터로서 생활하고 있었다. 어느 날, 저랭크 던전에 숨겨진 고랭크 이중 던전을 발견했지만 빈사의 중상을 입은 성진우의 눈앞에 의문의 퀘스트창이 나타났는데. 죽음의 순간, 퀘스트를 수락하기로 결심한 성진우는 자신만 '레벨업'할 수 있게 되었는데..!
            </p>
        </div>
    </div>
  );
}

export default DetailCard;
