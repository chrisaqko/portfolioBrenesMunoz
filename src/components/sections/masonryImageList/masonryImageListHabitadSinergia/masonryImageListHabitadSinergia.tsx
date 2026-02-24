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
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene1.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene9.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene2.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene3.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene4.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene5.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene6.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene7.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene8.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene10.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene11.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene12.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene13.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene14.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene15.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene16.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene17.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene18.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene19.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/architectural-visualizations/scene20.webp',
        title: '',
    },
     {
        img: '/images/project/project-torre-habitadsinergia/isometric-views/iso1.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/isometric-views/iso2.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/isometric-views/iso3.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/isometric-views/iso4.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/isometric-views/iso5.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/isometric-views/iso6.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/isometric-views/iso7.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/isometric-views/iso8.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/isometric-views/iso9.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/elevations-sections/sec1.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/elevations-sections/sec2.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/elevations-sections/sec3.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/elevations-sections/sec4.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/elevations-sections/sec5.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/floor-plans/fplan1.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/floor-plans/fplan2.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/floor-plans/fplan3.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/floor-plans/fplan4.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/floor-plans/fplan5.webp',
        title: '',
    },
    {
        img: '/images/project/project-torre-habitadsinergia/floor-plans/fplan6.webp',
        title: '',
    },
];
