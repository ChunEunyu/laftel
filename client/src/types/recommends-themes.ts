interface Image {
    option_name: string;
    img_url: string;
    crop_ratio: string;
}
  
interface Anime {
    id: number;
    name: string;
    images: Image[];
    is_adult: boolean;
    is_uncensored: boolean;
    is_dubbed: boolean;
    medium: string;
    is_laftel_only: boolean;
    is_laftel_original: boolean;
    content_rating: string;
    is_ending: boolean;
    genre: string[];
    content: string;
    avg_rating: number;
    is_avod: boolean;
    avod_status: string;
    logo_img: string | null;
    color_code: string | null;
    description: string | null;
    latest_episode_release_datetime: string | null;
    is_episode_existed: boolean | null;
    is_viewing: boolean;
}

type ThemeItem = {
    id: number;
    ment: string;
    item: Anime;
    first_episode_id: number;
    latest_episode_created: string | null;
  };

export type Themes = {
    _id: { $oid: string };
    id: number;
    title: string;
    content: string;
    theme_item_list: ThemeItem[];
}