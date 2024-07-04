import React from 'react';
import { 
    FaTiktok,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

type snsType = {
        icon: JSX.Element;
        src: string;
    }[]


const footerSnsList: snsType = [
    { icon: <FaTwitter />, src: "https://twitter.com/laftel_net"},
    { icon: <FaYoutube />, src: "https://www.youtube.com/channel/UCI7lPoS1I3zOOePX9ph4iAA"},
    { icon: <RiInstagramFill />, src: "https://www.instagram.com/laftel_net/"},
    { icon: <FaTiktok />, src: "https://www.tiktok.com/@laftel_official"},
];

const mappedSnsList = footerSnsList.map((item, index) => (
    <li key={index}>
        <a 
            href={item.src} 
            target="_blank" 
            rel="noopener noreferrer" 
            className='text-white pb-0 pt-0 mb-0 mt-0'>
            {item.icon}
        </a>
    </li>
));

export default function FooterSNS() {
    
    return (
        <div className='max-lg:justify-center max-lg:mt-6 max-lg:mb-6 list-none text-2xl flex gap-4 pt-3'>
            {mappedSnsList}
        </div>
    );
}
