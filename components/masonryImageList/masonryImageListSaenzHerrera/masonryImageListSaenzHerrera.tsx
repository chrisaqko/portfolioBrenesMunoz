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
    img: '/images/project/project-escuela-dr-saenz/architectural-visualizations/scene1.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/architectural-visualizations/scene2.jpg',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/architectural-visualizations/scene3.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/architectural-visualizations/scene4.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/architectural-visualizations/scene5.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/architectural-visualizations/scene6.jpg',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/architectural-visualizations/scene7.jpg',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/architectural-visualizations/scene8.jpg',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/architectural-visualizations/scene9.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/architectural-visualizations/scene10.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/architectural-visualizations/scene11.jpg',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/architectural-visualizations/scene12.jpg',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/architectural-visualizations/scene13.jpg',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/architectural-visualizations/scene14.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/architectural-visualizations/scene15.jpg',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/architectural-visualizations/scene16.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/architectural-visualizations/scene17.jpg',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/architectural-visualizations/scene18.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/architectural-visualizations/scene19.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/architectural-visualizations/scene20.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/elevations-sections/sec1.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/elevations-sections/sec2.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/elevations-sections/sec3.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/elevations-sections/sec4.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/elevations-sections/sec5.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/elevations-sections/sec6.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/elevations-sections/sec7.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/elevations-sections/sec8.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/elevations-sections/sec9.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/floor-plans/fplan1.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/floor-plans/fplan2.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/floor-plans/fplan3.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/floor-plans/fplan4.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/floor-plans/fplan5.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/isometric-views/iso1.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/isometric-views/iso2.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/isometric-views/iso3.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/isometric-views/iso4.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/isometric-views/iso5.png',
    title: '',
  },
  {
    img: '/images/project/project-escuela-dr-saenz/isometric-views/iso6.png',
    title: '',
  },
];
