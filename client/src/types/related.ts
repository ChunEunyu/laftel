interface Image {
    crop_ratio: string;
    img_url: string;
    option_name: string;
}

export interface RelatedResult {
    id: number;
    name: string;
    img: string;
    cropped_img: string;
    images: Image[];
    is_adult: boolean;
    is_uncensored: boolean;
    is_dubbed: boolean;
    is_viewing: boolean;
    is_laftel_only: boolean;
    is_laftel_original: boolean;
    is_avod: boolean;
    avod_status: string;
    medium: string;
    is_episode_existed: boolean;
    latest_episode_created: string;
    average_score: string;
    content_rating: string;
}

export interface Related {
    _id: {
        $oid: string;
    };
    id: number;
    relatedData: {
        count: number;
        next: null;
        previous: null;
        results: RelatedResult[];
    }
}