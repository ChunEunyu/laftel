import express from "express";
const router = express.Router();

import { login, register, logout} from "../controller/userController.js";
import { joinMembership, cancelMembership } from "../controller/userMembershipController.js";
import { 
    updateWishlist,
    getAllWishlist,
    isInWishlistById,
    updateWatchlist,
    getAllWatchlist,
    isInWatchlistById,
    updateRating,
    getAllRatings,
    isRatingForAnime,
    addReview,
    removeReview,
    getAllReviews,
} from "../controller/userActionsController.js";

import { authenticationMiddleware } from "../middleware/auth.js";

// 회원가입, 로그인, 로그아웃
router.route("/login").post(login);
router.route("/register").post(register);
router.route("/logout").post(logout, authenticationMiddleware);

// 멤버십 가입/취소
router.route("/membership/join").post(joinMembership, authenticationMiddleware);
router.route("/membership/cancel").post(cancelMembership, authenticationMiddleware);

// 애니메이션에 '보고싶다' 업데이트/모두 불러오기
router.route("/actions/wish/:id/update").post(updateWishlist, authenticationMiddleware);
router.route("/actions/wishlist/all").post(getAllWishlist, authenticationMiddleware);
router.route("/item/:id/wishlist").post(isInWishlistById, authenticationMiddleware);

// 애니메이션에 '보는중' 추가/제거/모두 불러오기
router.route("/actions/watch/:id/update").post(updateWatchlist, authenticationMiddleware);
router.route("/actions/watchlist/all").post(getAllWatchlist, authenticationMiddleware);
router.route("/item/:id/watchlist").post(isInWatchlistById, authenticationMiddleware);

// 애니메이션에 별점 추가/제거/모두 불러오기
router.route("/actions/rating/:id/update").post(updateRating, authenticationMiddleware);
router.route("/actions/rating/all").post(getAllRatings, authenticationMiddleware);
router.route("/item/:id/rating").post(isRatingForAnime, authenticationMiddleware);

// 애니메이션에 리뷰 추가/제거/모두 불러오기
router.route("/actions/review/:id/add").post(addReview, authenticationMiddleware);
router.route("/actions/review/:id/remove").post(removeReview, authenticationMiddleware);
router.route("/actions/reviews/all").post(getAllReviews, authenticationMiddleware);

export default router;