import { v4 as uuidv4 } from 'uuid';
import HipostarineImg from '../images/hipostarine.png';
import BatikTeknikImg from '../images/batik-teknik.PNG';
import PortfolioImg from '../images/portfolio.png';
import Elearning from '../images/e-learning.png';

const projects = [
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
    name: 'Portfolio',
    desc: 'This is my portfolio website',
    img: PortfolioImg,
    tags: ['React'],
  },
  {
    id: uuidv4(),
    name: 'E-Learning',
    desc:
      'This project i build for SMAN 16 Bandar Lampung, which is one of the high schools in the city of Bandar Lampung, when I was in college.',
    img: Elearning,
    tags: ['Mysql', 'Codeigniter', 'Bootstrap'],
  },
];

export default projects;
