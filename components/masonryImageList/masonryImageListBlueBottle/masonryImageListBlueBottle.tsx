import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export default function masonryImageListBlueBottle() {
    return (
        <Box sx={{ width: '100%', height: 600, overflowY: 'auto' }}>
            <ImageList variant="masonry" cols={3} gap={5}>
                {itemData.map((item, index) => (
                    <ImageListItem key={item.img} rows={index % 2 === 0 ? 2 : 1}>
                        <img
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

const itemData = [
    {
        img: '/images/project/project-cafeteria-bluebottle/masonry/scene1.webp',
        title: 'Scene 1',
    },
    {
        img: '/images/project/project-cafeteria-bluebottle/masonry/scene2.webp',
        title: 'Scene 2',
    },
    {
        img: '/images/project/project-cafeteria-bluebottle/masonry/scene3.webp',
        title: 'Scene 3',
    },
    {
        img: '/images/project/project-cafeteria-bluebottle/masonry/scene4.webp',
        title: 'Scene 4',
    },
    {
        img: '/images/project/project-cafeteria-bluebottle/masonry/scene5.webp',
        title: 'Scene 5',
    },
    {
        img: '/images/project/project-cafeteria-bluebottle/masonry/scene6.webp',
        title: 'Scene 6',
    },
    {
        img: '/images/project/project-cafeteria-bluebottle/masonry/scene7.webp',
        title: 'Scene 7',
    },
    {
        img: '/images/project/project-cafeteria-bluebottle/masonry/scene8.webp',
        title: 'Scene 8',
    },
    {
        img: '/images/project/project-cafeteria-bluebottle/masonry/scene9.webp',
        title: 'Scene 9',
    },  
    {
        img: '/images/project/project-cafeteria-bluebottle/masonry/scene10.webp',
        title: 'Scene 10',
    },
    {
        img: '/images/project/project-cafeteria-bluebottle/masonry/scene11.webp',
        title: 'Scene 11',
    },
    {
        img: '/images/project/project-cafeteria-bluebottle/masonry/scene12.webp',
        title: 'Scene 12',
    },
    {
        img: '/images/project/project-cafeteria-bluebottle/masonry/scene13.webp',
        title: 'Scene 13',
    },
    {
        img: '/images/project/project-cafeteria-bluebottle/masonry/scene14.webp',
        title: 'Scene 14',
    },
    {
        img: '/images/project/project-cafeteria-bluebottle/masonry/scene15.webp',
        title: 'Scene 15',
    },
    {
        img: '/images/project/project-cafeteria-bluebottle/masonry/scene16.webp',
        title: 'Scene 16',
    },
    {
        img: '/images/project/project-cafeteria-bluebottle/masonry/scene17.webp',
        title: 'Scene 17',
    },
    {
        img: '/images/project/project-cafeteria-bluebottle/masonry/scene18.webp',
        title: 'Scene 18',
    },
    {
        img: '/images/project/project-cafeteria-bluebottle/masonry/scene19.webp',
        title: 'Scene 19',
    },
];
