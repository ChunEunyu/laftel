import React from "react";
import Box from '@mui/material/Box';
import CardMedia from "@mui/material/CardMedia";
import Typography from '@mui/material/Typography';

interface Image {
  option_name: string;
  img_url: string;
  crop_ratio: string;
}

interface Props {
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

const AnimeCard = ({...props}: Props) => {
  return (
    <Box className="lg:h-48 md:h-40 sm:h-36 xs:h-32 max-sm:h-24">
        <CardMedia 
            className="object-cover rounded-sm w-full h-4/5"
            component="img" 
            image={props.img}
        />
        <p className="overflow-hidden overflow-ellipsis whitespace-normal" style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical'}}>
          {props.name}
        </p>
    </Box>
  );
}

export default AnimeCard;
