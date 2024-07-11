import db from "../db/connection.js";

export const getItems = async (filter) => {
    try {
        const collection = await db.collection("items");
        return await collection.find(filter).toArray();
    } catch (error) {
        throw new Error("Error fetching items from database: " + error.message);
    }
};

export const itemsFilter = (query) => {
    const filter = {};

    // 감상 가능 여부 필터 추가
    if (query.viewable === "true") {
        filter.is_viewing = true;
    }

    // 멤버쉽 작품만 시청 여부 필터 추가
    if (query.svod === "true") {
        filter.is_svod = true;
    }

    // 장르 필터 추가
    if (query.genres) {
        const genresArray = query.genres.split(',');
        filter.genres = { $all: genresArray };
    }

    // 태그 필터 추가
    if (query.tags) {
        const tagsArray = query.tags.split(',');
        filter.tags = { $all: tagsArray };
    }

    // 연도 필터 추가
    if (query.years) {
        const yearsArray = query.years.split(',');
        const yearsFilter = yearsArray.map(year => {
            if (year === "2000년대 이전") {
                return { air_year_quarter: { $regex: '.*(19[0-9][0-9]년).*' } };
            } else if (year === "2000년대") {
                return { air_year_quarter: { $regex: '.*(200[0-9]년).*' } };
            } else { // 2010년 ~ 2024년
                const yearNumber = parseInt(year.slice(0, 4));
                const quarterNumber = year.length === 9 ? parseInt(year.slice(5, 8)) : null;

                if (2010 <= yearNumber && yearNumber <= 2022) {
                    return { air_year_quarter: { $regex: `${yearNumber}년` } };
                } else {
                    return { air_year_quarter: { $regex: `${yearNumber}년 ${quarterNumber}분기` } };
                }
            }
        });
        filter.$or = yearsFilter;
    }

    // 방영 여부 필터 추가
    if (query.ending) {
        filter.is_ending = query.ending === "true";
    }

    // 출시 타입 필터 추가
    if (query.medium) {
        filter.medium = query.medium;
    }

    // 브랜드 필터 추가
    if (query.brands) {
        filter.brand = query.brands;
    }

    return filter;
};