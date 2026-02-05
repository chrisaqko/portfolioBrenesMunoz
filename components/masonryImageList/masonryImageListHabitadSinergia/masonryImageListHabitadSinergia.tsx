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
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene1.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene9.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene2.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene3.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene4.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene5.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene6.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene7.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene8.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene10.jpg',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene11.jpg',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene12.jpg',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene13.jpg',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene14.jpg',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene15.jpg',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene16.jpg',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene17.jpg',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene18.jpg',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene19.jpg',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene20.jpg',
        title: '',
    },
     {
        img: '/images/project/project-torre-habitadsinergia/isometric-views/iso1.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/isometric-views/iso2.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/isometric-views/iso3.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/isometric-views/iso4.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/isometric-views/iso5.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/isometric-views/iso6.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/isometric-views/iso7.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/isometric-views/iso8.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/isometric-views/iso9.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/elevations-sections/sec1.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/elevations-sections/sec2.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/elevations-sections/sec3.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/elevations-sections/sec4.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/elevations-sections/sec5.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/floor-plans/fplan1.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/floor-plans/fplan2.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/floor-plans/fplan3.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/floor-plans/fplan4.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/floor-plans/fplan5.png',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/floor-plans/fplan6.png',
        title: '',
    },
];
