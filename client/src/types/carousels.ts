export interface Carousel {
    _id: {
        $oid: string;
    };
    id: number;
    web_img: string;
    mobile_img: string;
    logo_img: string;
    content: string;
    label: string;
    button_text: string;
    is_adult: boolean;
    item_destination: number;
    event_destination: number | null;
    theme_destination: number | null;
    external_destination: string | null;
}