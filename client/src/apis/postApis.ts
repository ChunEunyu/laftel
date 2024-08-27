import { authApi } from ".";

// 로그아웃
export const logout = async () => {
    try {
        const res = await authApi.post('/user/logout');
        
        if (res.data.success) {
            alert('로그아웃 되었습니다.');
            sessionStorage.removeItem('auth');
            window.location.reload();
        }

    } catch (error) {
        console.error('Logout failed', error);
    } 
}

// 멤버십 가입
export const joinMembership = async () => {
    const item = sessionStorage.getItem('auth');
    if (item) {
        const data = JSON.parse(item);
        const email = data.email;
        
        try {
            const res = await authApi.post("/user/membership/join", { email: email });
            if (res.status === 200) {
                sessionStorage.setItem('auth', JSON.stringify(res.data.info));
                alert('멤버십에 가입하였습니다.');
            }
        } catch (error) {
            alert('멤버십 가입에 실패하였습니다.');
            console.error('멤버십 가입 실패', error);
        }
    }
}

// 멤버십 취소
export const cancelMembership = async () => {
    const item = sessionStorage.getItem('auth');
    if (item) {
        const data = JSON.parse(item);
        const email = data.email;
        
        try {
            const res = await authApi.post("/user/membership/cancel", { email: email });
            if (res.status === 200) {
                sessionStorage.setItem('auth', JSON.stringify(res.data.info));
                alert('멤버십 가입을 취소하였습니다.');
            }
        } catch (error) {
            alert('멤버십 취소에 실패하였습니다.');
            console.error('멤버십 취소 실패', error);
        }
    }
}

// 사용자의 위시리스트에 애니메이션이 포함되어 있는지
export const isInWishlist = async (id : number) => {
    const item = sessionStorage.getItem('auth');
    if (item) {
        const data = JSON.parse(item);
        const email = data.email;
        
        try {
            const res = await authApi.post(`/user/item/${id}/wishlist`, { email: email });
            if (res.status === 200) {
                return res.data.inWishlist;
            }
        } catch (error) {
            console.error(error);
        }
    }
}

// 사용자의 위시리스트 전체 불러오기
export const getWishlist = async () => {
    const item = sessionStorage.getItem('auth');
    if (item) {
        const data = JSON.parse(item);
        const email = data.email;
        
        try { 
            const res = await authApi.post(`/user/actions/wishlist/all`, { email: email });
            if (res.status === 200) {
                return res.data.wishlist;
            }
        } catch (error) {
            console.error(error);
        }
    }
}

// 사용자의 시청 리스트에 애니메이션이 포함되어 있는지
export const isInWatchlist = async (id : number) => {
    const item = sessionStorage.getItem('auth');
    if (item) {
        const data = JSON.parse(item);
        const email = data.email;
        
        try { 
            const res = await authApi.post(`/user/item/${id}/watchlist`, { email: email });
            if (res.status === 200) {
                return res.data.inWatchlist;
            }
        } catch (error) {
            console.error(error);
        }
    }
}

// 사용자의 시청 리스트 전체 불러오기
export const getWatchlist = async () => {
    const item = sessionStorage.getItem('auth');
    if (item) {
        const data = JSON.parse(item);
        const email = data.email;
        
        try { 
            const res = await authApi.post(`/user/actions/watchlist/all`, { email: email });
            if (res.status === 200) {
                return res.data.watchlist;
            }
        } catch (error) {
            console.error(error);
        }
    }
}

// 사용자가 매긴 별점 리스트에 애니메이션이 포함되어 있는지
export const isInRatinglist = async (id : number) => {
    const item = sessionStorage.getItem('auth');
    if (item) {
        const data = JSON.parse(item);
        const email = data.email;
        
        try { 
            const res = await authApi.post(`/user/item/${id}/rating`, { email: email });
            if (res.status === 200) {
                return res.data.value;
            }
        } catch (error) {
            console.error(error);
        }
    }
}

// 사용자가 매긴 별점 리스트 전체 불러오기
export const getRatingList = async () => {
    const item = sessionStorage.getItem('auth');
    if (item) {
        const data = JSON.parse(item);
        const email = data.email;
        
        try { 
            const res = await authApi.post(`/user/actions/rating/all`, { email: email });
            if (res.status === 200) {
                return res.data.ratingList;
            }
        } catch (error) {
            console.error(error);
        }
    }
}

// 사용자가 남긴 리뷰 리스트 전체 불러오기
export const getReviewList = async () => {
    const item = sessionStorage.getItem('auth');
    if (item) {
        const data = JSON.parse(item);
        const email = data.email;
        
        try { 
            const res = await authApi.post(`/user/actions/reviews/all`, { email: email });
            if (res.status === 200) {
                return res.data.reviews;
            }
        } catch (error) {
            console.error(error);
        }
    }
}

