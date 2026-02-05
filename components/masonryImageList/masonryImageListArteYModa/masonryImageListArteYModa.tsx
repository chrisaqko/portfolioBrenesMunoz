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
        img: '/images/project/project-galeria-arteymoda/architectural-visualizations/scene1.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/architectural-visualizations/scene2.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/architectural-visualizations/scene3.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/architectural-visualizations/scene4.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/architectural-visualizations/scene5.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/architectural-visualizations/scene6.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/architectural-visualizations/scene7.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/architectural-visualizations/scene8.png',
        title: '',
    }, {
        img: '/images/project/project-galeria-arteymoda/architectural-visualizations/scene9.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/architectural-visualizations/scene10.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/isometric-views/iso1.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/isometric-views/iso2.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/isometric-views/iso3.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/isometric-views/iso4.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/isometric-views/iso5.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/isometric-views/iso6.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/isometric-views/iso7.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/isometric-views/iso8.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/isometric-views/iso9.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/elevations-sections/sec1.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/elevations-sections/sec2.png',
        title: '',
    }, 
    {
        img: '/images/project/project-galeria-arteymoda/elevations-sections/sec3.png',
        title: '',
    }, 
    {
        img: '/images/project/project-galeria-arteymoda/elevations-sections/sec4.png',
        title: '',
    }, 
    {
        img: '/images/project/project-galeria-arteymoda/elevations-sections/sec5.png',
        title: '',
    }, 
    {
        img: '/images/project/project-galeria-arteymoda/elevations-sections/sec6.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/floor-plans/fplan1.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/floor-plans/fplan2.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/floor-plans/fplan3.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/floor-plans/fplan4.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/floor-plans/fplan5.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/floor-plans/fplan6.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/floor-plans/fplan7.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/floor-plans/fplan8.png',
        title: '',
    },
    {
        img: '/images/project/project-galeria-arteymoda/floor-plans/fplan9.png',
        title: '',
    },
];
