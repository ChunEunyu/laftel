interface Image {
    crop_ratio: string;
    img_url: string;
    option_name: string;
}

export interface Daily {
    _id: {
        $oid: string;
    };
    id: number;
    name: string;
    img: string;
    cropped_img: string;
    images: Image[];
    content_rating: string;
    rating: number;
    is_adult: boolean;
    genres: string[];
    medium: string;
    distributed_air_time: string;
    is_laftel_only: boolean;
    is_uncensored: boolean;
    is_dubbed: boolean;
    is_avod: boolean;
    avod_status: string;
    is_viewing: boolean;
    latest_episode_created: string;
    latest_published_datetime: string;
    is_episode_existed: boolean;
    is_expired: boolean;
    highlight_video: string | null;
    distributed_air_times: string[];
    distributed_air_time_sequence: number;
}
