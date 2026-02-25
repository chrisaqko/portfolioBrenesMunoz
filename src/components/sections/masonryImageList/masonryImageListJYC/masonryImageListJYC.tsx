import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export default function MasonryImageList() {
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
        img: '/images/project/project-casa-taller/masonry/scene23.webp',
        title: '',
    },
    {
        img: '/images/project/project-casa-taller/masonry/scene22.webp',
        title: '',
    },
    {
        img: '/images/project/project-casa-taller/masonry/scene21.webp',
        title: '',
    },
    {
        img: '/images/project/project-casa-taller/masonry/scene1.webp',
        title: '',
    },
    {
        img: '/images/project/project-casa-taller/masonry/scene2.webp',
        title: '',
    },
    {
        img: '/images/project/project-casa-taller/masonry/scene3.webp',
        title: '',
    },
    {
        img: '/images/project/project-casa-taller/masonry/scene4.webp',
        title: '',
    },
    {
        img: '/images/project/project-casa-taller/masonry/scene5.webp',
        title: '',
    },
    {
        img: '/images/project/project-casa-taller/masonry/scene6.webp',
        title: '',
    },
    {
        img: '/images/project/project-casa-taller/masonry/scene7.webp',
        title: '',
    },
    {
        img: '/images/project/project-casa-taller/masonry/scene8.webp',
        title: '',
    },
    {
        img: '/images/project/project-casa-taller/masonry/scene9.webp',
        title: '',
    },
    {
        img: '/images/project/project-casa-taller/masonry/scene10.webp',
        title: '',
    },
    {
        img: '/images/project/project-casa-taller/masonry/scene11.webp',
        title: '',
    },
    {
        img: '/images/project/project-casa-taller/masonry/scene12.webp',
        title: '',
    },
    {
        img: '/images/project/project-casa-taller/masonry/scene13.webp',
        title: '',
    },
    {
        img: '/images/project/project-casa-taller/masonry/scene14.webp',
        title: '',
    },
    {
        img: '/images/project/project-casa-taller/masonry/scene15.webp',
        title: '',
    },
    {
        img: '/images/project/project-casa-taller/masonry/scene16.webp',
        title: '',
    },
    {
        img: '/images/project/project-casa-taller/masonry/scene17.webp',
        title: '',
    },
    {
        img: '/images/project/project-casa-taller/masonry/scene18.webp',
        title: '',
    },
    {
        img: '/images/project/project-casa-taller/masonry/scene19.webp',
        title: '',
    },
    {
        img: '/images/project/project-casa-taller/masonry/scene20.webp',
        title: '',
    },
];
