﻿# 라프텔

### 목차
- [소개](#소개)
- [기술 스택](#기술-스택)
- [주요 기능](#주요-기능)
- [주요 기술 과제](#주요-기술-과제)
    - [React Router v6의 Loader vs TanStack Query React Query](#react-router-v6의-loader-vs-tanstack-query-react-query)
        - [Loader와 React Query 특징](#loader와-react-query-특징)
        - [Loader 사용에 적합한 사례](#loader-사용에-적합한-사례)
        - [React Query 사용에 적합한 사례](#react-query-사용에-적합한-사례)
        - [결론](#결론)
    - [태그 검색에서 useMemo를 활용하여 렌더링 시간 30% 이상 감소](#태그-검색에서-usememo를-활용하여-렌더링-시간-30-이상-감소)
        - [태그 검색 동작방식](#태그-검색-동작방식)
        - [불필요한 데이터 재요청 발생](#불필요한-데이터-재요청-발생)
        - [문제 해결 방법](#문제-해결-방법)
        - [문제 해결](#문제-해결)

<br />

# 소개

<img src="https://play-lh.googleusercontent.com/w8xd-eZ2_G9YnS4q6ITfoCzWOnXTE2gNqje5j8j_GQVAB6l7Mnr20mfCwi92dLa7cQ" alt="라프텔 로고" width="300"/><br />

- **애니메이션 소개, 추천 및 평가 서비스**

- **개발 기간:** 2024.06 - 2024.08

- **개발 인원:** 1인

<br />

# 기술 스택
![아키텍처](https://i.postimg.cc/NjsZBgg7/a1.png)

- **프론트엔드**: React.js, TypeScript, TailwindCSS, React Query, Redux Toolkit, Material UI 

- **백엔드**: Express.js, Node.js

- **데이터베이스**: MongoDB

<br />

# 주요 기능
- `태그 검색`: 작품을 태그별, 장르별, 년도별, 방영 여부, 브랜드, 출시타입 등으로 분류하여 작품을 검색할 수 있다.

- `애니메이션 평가`: 애니메이션 리뷰 및 별점 남기기, 보고싶다 표시, 보는 중 표시를 남길 수 있다. 

- `테마 추천`: 특정 테마로 몇 개의 작품을 묶어 분류하여 랜덤으로 테마를 추천한다.  

- `애니메이션 추천`: 특정 애니메이션과 유사한 작품들을 볼 수 있다.

<br />

# 주요 기술 과제

## React Router v6의 Loader vs TanStack Query React Query

### Loader와 React Query 특징

**Loader**

- **미리 데이터 준비**: 페이지를 렌더링하기 전에 필요한 데이터를 미리 가져와 준비합니다.
- **빠른 초기 로딩**: 사용자가 페이지에 접속하자마자 로딩 없이 완전한 화면을 볼 수 있도록 하여 사용자 경험을 향상시킵니다.


**React Query**
- **캐싱**: 가져온 데이터를 저장하여 불필요한 요청을 줄입니다.
- **동기화**: 데이터가 변경되면 자동으로 업데이트합니다.



### Loader 사용에 적합한 사례 
![themes](<https://i.postimg.cc/BQkByC56/2024-08-29235850-ezgif-com-video-to-gif-converter.gif>)

**기능 소개**

- **테마 추천**은 다양한 작품을 특정 테마로 묶어 분류한 후, 랜덤으로 추천해주는 페이지입니다. 

- 여러 가지 테마가 정렬되며, 특정 테마를 선택하면 해당 테마에 속한 애니메이션 리스트와 정보를 확인할 수 있습니다.

- **`핵심 목표`: 로딩 시간 단축으로 인한 사용자 경험 향상이 중요한 페이지입니다.**

**요구 사항**
- 사용자가 카테고리에서 `테마 추천`을 클릭하여 페이지가 전환될 때 로딩 없이 바로 완전한 테마 추천 리스트를 볼 수 있습니다.
- 사용자가 특정 테마를 클릭하여 페이지가 전환될 때 로딩 없이 바로 완전한 애니메이션 리스트를 볼 수 있습니다. 

**Loader 사용이 적합한 이유**
- 빠른 초기 로딩
- 매끄러운 페이지 전환
- 데이터 준비 시간 단축

**적용**

DevTools를 통해 `로더` 및 `리액트 쿼리`를 적용하였을 때 `초기 로드 시간 비교`

<img src='https://i.postimg.cc/Z5Fc5bfN/React-Query.png' alt='loader' width='400'>

- 로더는 네트워크 요청 시작과 동시에 데이터를 불러오고, 리액트 쿼리는 로더보다 `300ms~ 400ms` 정도 뒤에 데이터를 불러온다는 사실을 확인하였습니다. 

- 데이터 페치 시간은 로더가 조금 더 빨랐지만 크게 유의미하진 않았습니다. 

- 테마 추천 페이지에 로더를 적용한 결과, 초기 로딩 시간이 현저하게 단축되어 사용자 경험이 향상되었습니다. 

<br />

### React Query 사용에 적합한 사례
![modal](<https://i.postimg.cc/hjDLxZnC/2024-08-30000438-ezgif-com-video-to-gif-converter.gif>)

**기능 소개**
- 애니메이션 카드 클릭 시: 자세한 애니메이션 정보를 보여주는 모달 창이 뜹니다.

- 모달 기능: `보고싶다` 표시, `보는중` 표시, `리뷰` 작성, `별점` 부여 등 다양한 기능을 제공합니다.

- 모달 호출: 대부분 페이지에서 애니메이션 카드를 클릭하면 모달이 열리도록 구현되어 있습니다. 모달이 열릴 때 URL에 애니메이션 고유 번호가 추가됩니다. (예: `?modal=123`)

- **`핵심 목표`: 사용자 이벤트로 인한 렌더링이 발생하더라도 불필요한 데이터 재요청이 일어나면 안됩니다.**

**요구 사항**

- **사용자 이벤트로 인한 렌더링 발생 시**: 사용자가 모달에서 버튼을 클릭하거나 입력하는 등의 작업을 할 때, `불필요한 데이터 재요청을 방지`해야 합니다. 

- **데이터 재요청 방지**: 이미 가져온 애니메이션 정보를 다시 서버에서 가져오지 않고, `클라이언트 측에서 관리`해야 합니다.


**React Query 사용이 적합한 이유**
- Loader 사용:
    - 빠른 초기 데이터 요청
    - 데이터 캐싱이 되지 않아 사용자 이벤트 발생시 불필요한 데이터 재요청 발생으로 사용자 경험 저하

- React Query 사용: 
    - 캐싱으로 인한 불필요한 데이터 재요청 방지 -> `네트워크 오버헤드 감소`


### 결론
- Loader는 초기 페이지 로딩 속도를 빠르게 하여 사용자 경험을 향상시키며 처음 페이지에 접속했을 때 완전한 화면을 보여줘야 하는 경우에 유용하지만, 캐싱이 되지 않아 불필요한 데이터 재요청이 발생한한다는 단점이 있었습니다. 

- React Query는 데이터 캐싱을 통해 불필요한 데이터 요청을 줄여 사용자 상호작용이 빈번하고, 데이터가 자주 변경되는 경우에 적합하였습니다. 하지만 대용량의 데이터를 캐싱할 경우 메모리 사용량이 증가하여 성능 저하를 유발할 수 있다는 단점이 있었습니다.

- Loader와 React Query는 데이터를 관리하는 핵심적인 도구입니다. 기능에 맞게 적재적소에 사용하면 더욱 효율적이고 안정적인 서비스를 개발할 수 있을 것입니다.


<br />

## 태그 검색에서 `useMemo`를 활용하여 `렌더링 시간 30% 이상 감소`

![finder](<https://i.postimg.cc/q7FRx3Bn/2024-08-29112544-ezgif-com-video-to-gif-converter.gif>)


**태그 검색**은 체크박스를 클릭할 때 마다 필터링을 적용하여 필터링된 애니메이션 리스트를 보여주는 기능입니다.   


### 태그 검색 동작방식

```
1. 체크박스 클릭
2. 체크박스의 카테고리 파악 
3. 선택된 체크박스를 쿼리스트링으로 만들기
4. 쿼리 스트링(query string)이 변화하면 필터링된 데이터 불러오기 
```

- 예를 들어, `가족` 체크박스를 누르면 `가족`은 `태그` 카테고리에 속하기 때문에 `?tag=가족`이라는 쿼리 스트링을 생성합니다. 
- 쿼리 스트링을 기반으로 `가족` 태그의 요소를 포함한 애니메이션 데이터를 불러옵니다. 

### 불필요한 데이터 재요청 발생
<img src="https://i.postimg.cc/gJ3hTDT8/1.png" alt="모바일 체크박스" width="250"/><br />

- 모바일 화면에서는 체크박스가 기본적으로 숨겨져 있으며, 사용자가 `더보기` 토글을 클릭해야만 해당 카테고리의 체크박스들이 나타납니다.
- 문제는 `더보기` 토글을 클릭할 때 쿼리 스트링이 변하지 않음에도 불구하고, 렌더링이 발생하고 그 결과로 데이터가 다시 **fetch**된다는 것입니다.
- 이로 인해 **불필요한 네트워크 요청이 발생**하고, **성능 저하 및 사용자 경험에 영향**을 줄 수 있습니다.

### 문제 해결 방법

### 해결 방법 1: React Query를 통해 캐싱(Caching)
- TanStack Query의 `React Query`를 사용하여 **애니메이션 데이터를 캐싱**하여 설정된 캐시 시간 동안 데이터를 유효하게 유지할 수 있습니다. 
- 리렌더링이 일어나더라도 **데이터 재요청을 하지 않기 때문에 네트워크 서버 부하를 줄일 수 있습니다.** 

**단점:** 
- 애니메이션 데이터가 총 1253개이며, 총 1.2MB 용량을 차지합니다. 필터링을 하다보면 데이터 개수가 줄어들긴 하지만, **실시간으로 변화하는 데이터를 모두 캐싱하기에는 부담스러운 용량**입니다.
- 체크박스 클릭을 통해 데이터가 자주 변경되는데, React Query를 사용하면 **캐시 업데이트가 빈번하게 발생하여 성능 저하가 우려**되었습니다.

### 해결 방법 2: useMemo를 통해 쿼리스트링을 메모이제이션(Memoization)

- `useMemo`를 통해 **쿼리 스트링을 메모이제이션**하여 쿼리 스트링 값이 변하지 않으면 **불필요한 재계산을 방지**합니다.

- 쿼리스트링은 다음과 같이 다중 카테고리, 다중 요소를 포함하며 쿼리스트링 생성 함수는 간단한 계산으로 이루어지지 않습니다. `?genres=개그&tag=가족,성장&year=2024년 3분기,2024년 2분기` 메모이제이션을 통해 쿼리 스트링이 실제로 변경될 때만 새롭게 계산된 값을 반환하므로 불필요한 렌더링을 줄이고, 불필요한 네트워크 요청을 방지할 수 있습니다. 


### 문제 해결

- `useMemo`를 사용하여 Query String 값만 메모이제이션하는 방법을 채택하였습니다. 

- **React Query는 데이터 자체를 캐싱하지만, useMemo는 query string 값만 메모이제이션합니다.**

- **React Query는 데이터 캐싱을 위한 강력한 도구이지만, 모든 데이터를 캐싱하면 메모리 낭비가 발생할 수 있습니다. useMemo는 필요한 값만 메모이제이션하여 메모리 효율성을 높여야 합니다.**

- `React Profiler`를 사용하여 useMemo 사용 전 후 렌더링 시간을 비교한 후, 선 그래프로 시각화해보았습니다. 

![alt text](<https://i.postimg.cc/vHymhMyP/image.png>)

- useMemo 적용 전:
    - 렌더링 지연 시간이 **불규칙적**으로 크게 발생하며, 시간이 지남에 따라 지연 시간이 점점 증가하는 경향을 보입니다. 

    - 이는 불필요한 재렌더링이 반복되면서 **성능 저하**가 발생했음을 유추할 수 있습니다. 
- useMemo 적용 후: 
    - 렌더링 지연 시간이 현저하게 **감소**하고, 이전과 비교하여 **안정**적인 모습을 보입니다. 

    - useMemo를 통해 불필요한 재계산을 방지하여 성능을 크게 향상시켰음을 의미합니다.
