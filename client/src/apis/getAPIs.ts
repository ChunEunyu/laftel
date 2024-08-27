import { api } from "./index";

import { Ranking, DayNumber } from "@/types/time";
import { Item } from "@/types/item";
import { Related } from "@/types/related";
import { Carousel } from "@/types/carousels";
import { Daily } from "@/types/daily";
import { Themes } from "@/types/recommends-themes";
import { DiscoverInfo } from "@/types/info-discover";
import { RankingItem } from "@/types/ranking";
import { Review } from "@/types/review";

// 애니메이션 id로 애니메이션 정보 가져오기
export const getItemById = async (id : number): Promise<Item> => {
    const res = await api.get(`/item/${id}`);
    return res.data;
}

// 애니메이션 id로 비슷한 애니메이션 가져오기
export const getRelatedById = async (id : number): Promise<Related> => {
    const res = await api.get(`/item/${id}/related`);
    return res.data;
}

// 캐러셀 데이터 가져오기
export const getCarousels = async (): Promise<Carousel[]> => {
    const res = await api.get("/carousels");
    return res.data;
}

// 주간 신작 데이터 가져오기
const daysOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

export const getDaily = async (day: DayNumber): Promise<Daily[]> => {
    const dayString = daysOfWeek[day];
    const res = await api.get(`/daily/${dayString}`);
    return res.data;
}

// (태그 검색 페이지) 애니메이션 데이터 가져오기
export const getDiscover = async (query : string | undefined): Promise<Item[]> => {
    let url = "/discover"; // 기본 url
    if (query) url += `${query}`; // query가 존재하면 URL에 query를 추가 
    const res = await api.get(url);
    return res.data;
}

// (태그 검색 페이지) 필터링 카테고리 데이터 가져오기
export const getDiscoverInfo = async (): Promise<DiscoverInfo> => {
    const res = await api.get("/info/discover");
    return res.data;
}

// 인기 애니 순위 보여주기 ( 실시간, 이번 주, 분기, 역대 )
export const getRanking = async ( time : Ranking ): Promise<RankingItem> => {
    const res = await api.get(`/ranking/?type=${time}`);
    return res.data;
}

// 테마 추천 리스트 모두 보여주기
export const getRecommendsAllThemes = async (): Promise<Themes[]> => {
    const res = await api.get(`/themes`);
    return res.data;
}

// n개의 테마 추천 리스트 보여주기
export const getRecommendsThemesBySize = async ( size : number ): Promise<Themes[]> => {
    const res = await api.get(`/themes/size/${size}`);
    return res.data;
}

// id를 통해 특정 테마 추천 보여주기
export const getRecommendsThemesById = async ( id : number ): Promise<Themes> => {
    const res = await api.get(`/themes/${id}`);
    return res.data;
}

// 키워드를 통해 검색하기
export const getSearch = async ( keyword : string ): Promise<Item[]> => {
    const res = await api.get(`/search/?keyword=${keyword}`);
    return res.data;
}

// 애니메이션 리뷰 리스트 불러오기
export const getAnimeReviews = async ( id : number ): Promise<Review[]> => {
    const res = await api.get(`item/${id}/reviews`);
    return res.data.reviews;
}

