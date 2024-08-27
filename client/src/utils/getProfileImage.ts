const src: string[] = [
    "https://i.postimg.cc/L8M2j32L/image.png",
    "https://i.postimg.cc/vTVwVcK0/image.png",
    "https://i.postimg.cc/w3Y8c98g/image.png",
    "https://i.postimg.cc/G3WHSYbh/image.png",
    "https://i.postimg.cc/tCFY0Tgd/image.png",
    "https://i.postimg.cc/x1Yq92kw/image.png",
    "https://i.postimg.cc/SxrRsvCJ/image.png",
    "https://i.postimg.cc/Gpm2sxxz/image.png",
    "https://i.postimg.cc/DzpzQ4Ch/image.png",
    "https://i.postimg.cc/85FzZk36/image.png",
    "https://i.postimg.cc/50ZNTddk/image.png",
    "https://i.postimg.cc/WzgbPWsp/image.png",
    "https://i.postimg.cc/BZKvD62W/image.png",
];

export const getProfileImage = (): string => {
    const randomImg = src[Math.floor(Math.random() * src.length)];
    return randomImg;
}