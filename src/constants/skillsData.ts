import bootstrapIcon from '../assets/icons/bootstrap-icon.svg';
import cssIcon from '../assets/icons/css-icon.svg';
import ec2Icon from '../assets/icons/ec2-icon.svg';
import expressJsIcon from '../assets/icons/expressjs-icon.svg';
import htmlIcon from '../assets/icons/html-icon.svg';
import javascriptIcon from '../assets/icons/javascript-icon.svg';
import jestIcon from '../assets/icons/jest-icon.svg';
import materialUiIcon from '../assets/icons/material-ui-icon.svg';
import nodeJsIcon from '../assets/icons/nodejs-icon.svg';
import postgreSqlIcon from '../assets/icons/postgresql-icon.svg';
import puppeteerIcon from '../assets/icons/puppeteer-icon.svg';
import reactJsIcon from '../assets/icons/reactjs-icon.svg';
import sqlIcon from '../assets/icons/sql-icon.svg';
import typescriptIcon from '../assets/icons/typescript-icon.svg';
import viteIcon from '../assets/icons/vite-icon.svg';
import webpackIcon from '../assets/icons/webpack-icon.svg';

const skillsData = {
  link: 'stack',
  pageNum: 2,
  label: 'Stack',
  content: {
    blurb: '',
    frontend: [
      { name: 'JavaScript ES6', icon: javascriptIcon, strength: 2 },
      { name: 'HTML5', icon: htmlIcon, strength: 2 },
      { name: 'CSS3', icon: cssIcon, strength: 2 },
      { name: 'TypeScript', icon: typescriptIcon, strength: 1 },
      { name: 'React', icon: reactJsIcon, strength: 1 },
      { name: 'Material-UI', icon: materialUiIcon, strength: 1 },
      { name: 'Bootstrap', icon: bootstrapIcon, strength: 1 },
      { name: 'Jest', icon: jestIcon, strength: 1 },
      { name: 'Webpack', icon: webpackIcon, strength: 1 },
      { name: 'Vite', icon: viteIcon, strength: 1 },
    ],
    backend: [
      { name: 'Node.js', icon: nodeJsIcon, strength: 1 },
      { name: 'SQL', icon: sqlIcon, strength: 1 },
      { name: 'Express.js', icon: expressJsIcon, strength: 1 },
      { name: 'PostgreSQL', icon: postgreSqlIcon, strength: 1 },
      { name: 'Puppeteer', icon: puppeteerIcon, strength: 1 },
      { name: 'AWS EC2', icon: ec2Icon, strength: 1 },
    ],
  },
};

export default skillsData;
