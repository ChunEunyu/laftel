interface Image {
    option_name: string;
    img_url: string;
    crop_ratio: string;
}

export interface RankingItem {
    _id: {
        $oid: string;
    };
    id: number;
    name: string;
    img: string;
    cropped_img: string;
    is_adult: boolean;
    images: Image[];
    genres: string[];
    highlight_video: string | null;
    is_laftel_only: boolean;
    is_laftel_original: boolean;
    is_uncensored: boolean;
    is_dubbed: boolean;
    is_avod: boolean;
    avod_status: string;
    is_viewing: boolean;
    content_rating: string;
}