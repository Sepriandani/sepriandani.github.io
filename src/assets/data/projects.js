import { v4 as uuidv4 } from 'uuid';
import HipostarineImg from '../images/hipostarine.png';
import BatikTeknikImg from '../images/batik-teknik.PNG';
import PortfolioImg from '../images/portfolio.png';

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
];

export default projects;
