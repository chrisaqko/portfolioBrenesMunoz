import pimg57 from "/public/images/project/project-14/4.jpg";

import pimg2 from "/public/images/project/project-escuela-dr-saenz/pimg.jpeg";
import pimg3 from "/public/images/project/project-torre-habitadsinergia/pimg.jpeg";
import pimg4 from "/public/images/project/project-galeria-arteymoda/pimg.jpeg";

import phero4 from "/public/images/project/hero-project-2/img-4.jpg";

import Sing57 from "/public/images/project-single/57.jpg";
import Sing2 from "/public/images/project/project-escuela-dr-saenz/sing.jpeg";
import Sing3 from "/public/images/project/project-torre-habitadsinergia/sing.jpeg";
import Sing4 from "/public/images/project/project-galeria-arteymoda/sing.jpeg";

/**import elevations and sections */
import elevsec4 from "/public/images/project/project-escuela-dr-saenz/elevations-sections/FRONTAL M1.png";
import elevsec5 from "/public/images/project/project-escuela-dr-saenz/elevations-sections/POSTERIOR M1.png";
import elevsec6 from "/public/images/project/project-escuela-dr-saenz/elevations-sections/SECC 1.png";
import elevsec7 from "/public/images/project/project-torre-habitadsinergia/elevations-sections/NORTE@4x.png";
import elevsec8 from "/public/images/project/project-torre-habitadsinergia/elevations-sections/CORTE BIOCLIMATICO@4x.png";
import elevsec9 from "/public/images/project/project-torre-habitadsinergia/elevations-sections/OESTE@4x.png";
/**import floor plans */
import plan4 from "/public/images/project/project-escuela-dr-saenz/floor-plans/N1@4x.png";
import plan5 from "/public/images/project/project-escuela-dr-saenz/floor-plans/N2@4x.png";
import plan6 from "/public/images/project/project-escuela-dr-saenz/floor-plans/CONJUNTO@4x.png";
import plan7 from "/public/images/project/project-torre-habitadsinergia/floor-plans/PLANTACONJUNTO.jpg";
import plan8 from "/public/images/project/project-torre-habitadsinergia/floor-plans/PLAZA@4x.png";
import plan9 from "/public/images/project/project-torre-habitadsinergia/floor-plans/NIVEL8@4x.png";
/** import isometric views */
import iso4 from "/public/images/project/project-escuela-dr-saenz/isometric-views/RECR@4x.png";
import iso5 from "/public/images/project/project-escuela-dr-saenz/isometric-views/BIBL 1@4x.png";
import iso6 from "/public/images/project/project-escuela-dr-saenz/isometric-views/EMOC 2@4x.png";
import iso7 from "/public/images/project/project-torre-habitadsinergia/isometric-views/isoview1.png";
import iso8 from "/public/images/project/project-torre-habitadsinergia/isometric-views/isoview2.png";
import iso9 from "/public/images/project/project-torre-habitadsinergia/isometric-views/isoview3.png";

/**import architectural vizualisations */
import viz4 from "/public/images/project/project-escuela-dr-saenz/architectural-visualizations/frontalNocturno.png";
import viz5 from "/public/images/project/project-escuela-dr-saenz/architectural-visualizations/patio.png";
import viz6 from "/public/images/project/project-escuela-dr-saenz/architectural-visualizations/comedor.png";
import viz7 from "/public/images/project/project-torre-habitadsinergia/architectural-visualizations/int 1.jpg";
import viz8 from "/public/images/project/project-torre-habitadsinergia/architectural-visualizations/int 3.jpg";
import viz9 from "/public/images/project/project-torre-habitadsinergia/architectural-visualizations/int 6.jpg";


const Projects = [
  {
    id: "1",
    title: "Blue Bottle Coffee Shop",
    subtitle: "Commercial Design",
    slug: "project-cafeteria-bluebottle",
    pimg: pimg57,
    phero: phero4,
    sing: Sing57,
    num: "04",
    date: "March 2024",
    location: "Cartago, Costa Rica",
    dis: "",
    architect: "Jonnathan Brenes",
    client: "",
    elevationsSectionsDesc: "",
    floorPlansDesc: "",
    isometricViewsDesc: "",
    visualizationsDesc: "",
  },
  {
    id: "2",
    title: "Educational Center Dr. Carlos Saenz Herrera",
    subtitle: "School Design",
    slug: "project-escuela-Dr-Saenz",
    pimg: pimg2,
    phero: phero4,
    sing: Sing2,
    num: "04",
    date: "December 2025",
    location: "Cartago, Costa Rica",
    dis: "",
    architect: "Jonnathan Brenes & Mariam Moya",
    client: "School Board",
    elevationsSectionsDesc: "",
    floorPlansDesc: "",
    isometricViewsDesc: "",
    visualizationsDesc: "",
    elevationsSections: [elevsec4, elevsec5, elevsec6],
    floorPlans: [plan5, plan6, plan4],
    isometricViews: [iso4, iso5, iso6],
    visualizations: [viz4, viz5, viz6],


  },
  {
    id: "3",
    title: "Habitad Sinergia Tower",
    subtitle: "Residential and Commercial Design",
    slug: "project-torre-habitadsinergia",
    pimg: pimg3,
    phero: phero4,
    sing: Sing3,
    num: "04",
    date: "December 2024",
    location: "San José, Costa Rica",
    dis: "",
    architect: "Jonnathan Brenes",
    client: "",
    elevationsSectionsDesc: "",
    floorPlansDesc: "",
    isometricViewsDesc: "",
    visualizationsDesc: "",
    elevationsSections: [elevsec7, elevsec8, elevsec9],
    floorPlans: [plan7, plan8, plan9],
    isometricViews: [iso7, iso8, iso9],
    visualizations: [viz7, viz8, viz9],
  },
  {
    id: "4",
    title: "Arte y Moda Gallery",
    subtitle: "Cultural and Commercial Design",
    slug: "project-galeria-arteymoda",
    pimg: pimg4,
    phero: phero4,
    sing: Sing4,
    num: "04",
    date: "April 2024",
    location: "San José, Costa Rica",
    dis: "",
    architect: "Jonnathan Brenes",
    client: "",
    elevationsSectionsDesc: "",
    floorPlansDesc: "",
    isometricViewsDesc: "",
    visualizationsDesc: "",
  },
  {
    id: "5",
    title: "JC House",
    subtitle: "Residential Design",
    slug: "project-jc-house",
    pimg: pimg57,
    phero: phero4,
    sing: Sing57,
    num: "04",
    date: "September 2024",
    location: "San José, Costa Rica",
    dis: "",
    architect: "Jonnathan Brenes",
    client: "",
    elevationsSectionsDesc: "",
    floorPlansDesc: "",
    isometricViewsDesc: "",
    visualizationsDesc: "",
  },
];
export default Projects;
