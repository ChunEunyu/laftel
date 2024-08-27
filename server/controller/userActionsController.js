import User from '../model/User.js';
import db from "../db/connection.js";

/* '보고싶다' */

// 특정 애니메이션에 대한 '보고싶다' 추가 및 삭제
export const updateWishlist = async (req, res) => {
    let foundUser = await User.findOne({ email: req.body.email });
    const animeId = req.body.animeId;

    try {
        if (foundUser) {
            const existingItemIndex = foundUser.wishlist.findIndex(item => item.id === animeId);

            if (existingItemIndex !== -1) {
                // animeId가 이미 존재하면 제거
                foundUser.wishlist = foundUser.wishlist.filter(item => item.id !== animeId);
                await foundUser.save();
                res.status(200).json({ message: '보고싶다 삭제', state: false });
            } else {
                // animeId가 없으면 추가
                foundUser.wishlist.push({ id: animeId });
                await foundUser.save();
                res.status(200).json({ message: '보고싶다 추가', state: true });
            }
        } else {
            return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '보고싶다 처리 실패' });
    }
}

// 사용자의 '보고싶다' 리스트 불러오기
export const getAllWishlist = async (req, res) => {
    try {
        const collection = await db.collection("items");
        let foundUser = await User.findOne({ email: req.body.email });

        if (!foundUser) {
            return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
        }

        const wishlist = foundUser.wishlist.map(item => item.id);

        try {
            const result = await Promise.all(
                wishlist.map(id => collection.findOne({ id: id }))
            );
            return res.status(200).json({ wishlist: result });
        } catch (error) {
            console.error('Error fetching wishlist items:', error);
            return res.status(500).json({ message: '위시리스트 항목을 가져오는 데 실패했습니다.' });
        }

    } catch (error) {
        console.error('Error retrieving user or collection:', error);
        return res.status(500).json({ message: '위시리스트 가져오기 실패' });
    }
}

// 사용자의 보고싶어요 리스트에 특정 애니메이션이 포함되어있는지
export const isInWishlistById = async (req, res) => {
    let foundUser = await User.findOne({ email: req.body.email });
    const animeId = Number(req.params.id);

    try {
        if (foundUser) {
            const existingItemIndex = foundUser.wishlist.findIndex(item => item.id === animeId) === -1 ? false : true;
            res.status(200).json({ 'inWishlist': existingItemIndex });

        } else {
            return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '조회 실패' });
    }
};


/* '보는중' */

// 특정 애니메이션에 대한 '보는중' 추가 및 삭제
export const updateWatchlist = async (req, res) => {
    let foundUser = await User.findOne({ email: req.body.email });
    const animeId = req.body.animeId;

    try {
        if (foundUser) {
            const existingItemIndex = foundUser.watchlist.findIndex(item => item.id === animeId);

            if (existingItemIndex !== -1) {
                // animeId가 이미 존재하면 제거
                foundUser.watchlist = foundUser.watchlist.filter(item => item.id !== animeId);
                await foundUser.save();
                res.status(200).json({ message: '보는중 삭제', state: false });
            } else {
                // animeId가 없으면 추가
                foundUser.watchlist.push({ id: animeId });
                await foundUser.save();
                res.status(200).json({ message: '보는중 추가', state: true });
            }
        } else {
            return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '보는중 처리 실패' });
    }
}

// 사용자의 '보는중' 리스트 전체 불러오기
export const getAllWatchlist = async (req, res) => {
    try {
        const collection = await db.collection("items");
        let foundUser = await User.findOne({ email: req.body.email });

        if (!foundUser) {
            return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
        }

        const watchlist = foundUser.watchlist.map(item => item.id);

        try {
            const result = await Promise.all(
                watchlist.map(id => collection.findOne({ id: id }))
            );
            return res.status(200).json({ watchlist: result });
        } catch (error) {
            console.error('Error fetching watchlist items:', error);
            return res.status(500).json({ message: '시청 리스트 항목을 가져오는 데 실패했습니다.' });
        }

    } catch (error) {
        console.error('Error retrieving user or collection:', error);
        return res.status(500).json({ message: '시청리스트 가져오기 실패' });
    }
}

// 사용자의 보고싶어요 리스트에 특정 애니메이션이 포함되어있는지
export const isInWatchlistById = async (req, res) => {
    let foundUser = await User.findOne({ email: req.body.email });
    const animeId = Number(req.params.id);

    try {
        if (foundUser) {
            const existingItemIndex = foundUser.watchlist.findIndex(item => item.id === animeId) === -1 ? false : true;
            res.status(200).json({ 'inWatchlist': existingItemIndex });

        } else {
            return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '조회 실패' });
    }
}


/* '별점' */

// 특정 애니메이션에 대한 별점 추가 및 삭제
export const updateRating = async (req, res) => {
    let foundUser = await User.findOne({ email: req.body.email });
    const animeId = req.body.animeId;
    const newRating = req.body.rating;

    try {
        if (foundUser) {
            const existingItemIndex = foundUser.ratings.findIndex(item => item.id === animeId);

            if (existingItemIndex !== -1) {
                // animeId가 이미 존재하면 rating 값 수정
                foundUser.ratings[existingItemIndex].rating = newRating;
                await foundUser.save();
                res.status(200).json({ message: 'rating 값 반영' });
            } else {
                // animeId가 없으면 추가
                foundUser.ratings.push({ id: animeId, rating: newRating });
                await foundUser.save();
                res.status(200).json({ message: 'rating 값 반영' });
            }
        } else {
            return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '별점 반영 처리 실패' });
    }
}

// 사용자가 매긴 '별점' 리스트 불러오기
export const getAllRatings = async (req, res) => {
    try {
        const collection = await db.collection("items");
        let foundUser = await User.findOne({ email: req.body.email });

        if (!foundUser) {
            return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
        }

        const ratingList = foundUser.ratings.map(item => item.id);

        try {
            const result = await Promise.all(
                ratingList.map(id => collection.findOne({ id: id }))
            );
            return res.status(200).json({ ratingList: result });
        } catch (error) {
            console.error('Error fetching rating list items:', error);
            return res.status(500).json({ message: '별점 리스트 항목을 가져오는 데 실패했습니다.' });
        }

    } catch (error) {
        console.error('Error retrieving user or collection:', error);
        return res.status(500).json({ message: '별점 리스트 가져오기 실패' });
    }
}

// 사용자가 별점을 매긴 애니메이션인지 아닌지 여부
export const isRatingForAnime = async (req, res) => {
    let foundUser = await User.findOne({ email: req.body.email });
    const animeId = Number(req.params.id);

    try {
        if (foundUser) {
            const value = foundUser.ratings.find(item => item.id === animeId)?.rating ?? 0;
            res.status(200).json({ 'value': value });

        } else {
            return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '조회 실패' });
    }
}



/* '리뷰' */

// 특정 애니메이션에 대한 리뷰 추가
export const addReview = async (req, res) => {
    try {
        const email = req.body.email;
        const name = req.body.name;
        const img = req.body.img;
        const rating = req.body.rating;
        const animeId = req.body.animeId;
        const date = req.body.date;
        const content = req.body.content;
        let reviewId;

        // 사용자 찾기
        let foundUser = await User.findOne({ email: email });

        if (!foundUser) {
            return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
        }

        // 아이템 찾기
        const collection = await db.collection("items");
        const item = await collection.findOne({ id: animeId });
        
        if (!item) {
            return res.status(404).json({ message: '아이템을 찾을 수 없습니다.' });
        }

        // 현재 리뷰의 길이로 리뷰 ID 결정
        reviewId = item.review.length;
        
        // 새 리뷰 데이터
        const itemData = {
            email: email,
            name: name,
            img: img,
            rating: rating,
            id: animeId,
            date: date,
            content: content,
            reviewId: reviewId
        };

        // 사용자 리뷰 배열에 새 리뷰 추가
        const userData = {
            id: animeId,
            date: date,
            content: content,
            reviewId: reviewId,
            name: item.name,
        };
        
        foundUser.reviews.push(userData);
        await foundUser.save();

        // 아이템의 review 배열에 새 리뷰 추가
        await collection.updateOne(
            { id: animeId },
            { $push: { review: itemData } }
        );

        res.status(200).json({ message: '리뷰가 성공적으로 추가되었습니다.' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '리뷰 남기기 실패' });
    }
}


// 특정 애니메이션에 대한 리뷰 삭제
export const removeReview = async (req, res) => {
    try {
        const email = req.body.email;
        const animeId = req.body.animeId;
        const reviewId = req.body.reviewId;

        // 사용자 찾기
        let foundUser = await User.findOne({ email: email });

        if (!foundUser) {
            return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
        }

        // 아이템 찾기
        const collection = await db.collection("items");
        const item = await collection.findOne({ id: animeId });
        
        if (!item) {
            return res.status(404).json({ message: '아이템을 찾을 수 없습니다.' });
        }
        
        // 사용자의 리뷰 목록에서 id와 reviewId가 일치하는 항목을 찾아 제거하기 
        foundUser.reviews = foundUser.reviews.filter(
            review => review.id !== animeId && review.reviewId !== reviewId
        );
        await foundUser.save();

        // 애니메이션의 리뷰 목록에서 reviewId가 일치하는 항목을 찾아 제거하기 
        await collection.updateOne(
            { id: animeId },
            { $pull: { review: { reviewId: reviewId, email: email } } }
        );

        res.status(200).json({ message: '리뷰가 성공적으로 삭제되었습니다.' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '리뷰 삭제 실패' });
    }
}

// 사용자가 작성한 리뷰 리스트 불러오기
export const getAllReviews = async (req, res) => {
    try {
        let foundUser = await User.findOne({ email: req.body.email });

        if (!foundUser) {
            return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
        }

        const reviews = foundUser.reviews;
        return res.status(200).json({ reviews: reviews });

    } catch (error) {
        console.error('Error retrieving user or collection:', error);
        return res.status(500).json({ message: '별점 리스트 가져오기 실패' });
    }
}
