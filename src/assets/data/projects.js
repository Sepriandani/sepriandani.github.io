import { v4 as uuidv4 } from 'uuid';
import HipostarineImg from '../images/mockup.png';
import BatikTeknikImg from '../images/batik-teknik.PNG';
import PortfolioImg from '../images/portfolio.png';
import Elearning from '../images/e-learning.png';
import kbsb from '../images/kbsb.png';
import petanicanggih from '../images/petanicanggih.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Petanicanggih',
    desc:
      'I build Web App for Petanicanggih, Petanicanggih is a startup that provides products and services to optimize agriculture with Internet of Things (IoT) technology.',
    img: petanicanggih,
    tags: ['Mysql', 'Codeigniter', 'Tailwindcss', 'Arduino'],
  },
  {
    id: uuidv4(),
    name: 'KBSB Website',
    desc:
      'KBSB (Keluarga Besar Sumatera Barat) is the highest organization formed as a gathering place for Lampung residents from West Sumatra',
    img: kbsb,
    tags: ['Mysql', 'Codeigniter', 'Tailwindcss', 'Arduino'],
  },
  {
    id: uuidv4(),
    name: 'Hipostarine',
    desc:
      'This project is my final college assignment. Hipostarine is an IoT project that allows users to control and monitor the condition of hydroponic plants using a website.',
    img: HipostarineImg,
    tags: ['Mysql', 'Codeigniter', 'Tailwindcss', 'Arduino'],
  },
  {
    id: uuidv4(),
    name: 'Batik Teknik',
    desc:
      'This project is to build an e-commerce website for a business called Batik Teknik. Batik Teknik is a business that I founded with my friends where at that time we participated in KBMI 2020 (Indonesian Student Business Competition)',
    img: BatikTeknikImg,
    tags: ['Wordpress'],
  },
  {
    id: uuidv4(),
    name: 'E-Learning',
    desc:
      'This project i build for SMAN 16 Bandar Lampung, which is one of the high schools in the city of Bandar Lampung.',
    img: Elearning,
    tags: ['Mysql', 'Codeigniter', 'Bootstrap'],
  },
];

export default projects;
