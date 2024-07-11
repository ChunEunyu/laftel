export interface Item {
    _id: {
        $oid: string;
    };
    id: number;
    name: string;
    notice: string;
    img: string;
    images: Array<{
        option_name: string;
        img_url: string;
        crop_ratio: string;
    }>;
    highlight_video: string | null;
    content: string;
    awards: Array<any>;
    medium: string;
    content_rating: string;
    is_ending: boolean;
    production: string;
    air_year_quarter: string;
    is_dubbed: boolean;
    is_laftel_only: boolean;
    is_laftel_original: boolean;
    is_uncensored: boolean;
    distributed_air_time: string;
    is_adult: boolean;
    avod_status: string;
    is_avod: boolean;
    is_svod: boolean;
    is_viewing: boolean;
    genres: string[];
    cnt_short_review: number;
    avg_rating: number;
    tags: string[];
    expire_datetime: string | null;
    is_episode_existed: boolean;
    series_id: number;
    author: string[];
    illustrator: string[];
    copyright: string;
    rating: {
        rating: string | null;
        classification_number: string;
        broadcast_channel_name: string;
        broadcast_date: string | null;
        rating_components: Array<any>;
    };
    is_wish: boolean;
    is_hate: boolean;
    brand: string;
}