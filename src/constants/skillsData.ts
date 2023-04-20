import expressJsIcon from '../assets/icons/expressjs-icon.svg';
import jestIcon from '../assets/icons/jest-icon.svg';
import materialUiIcon from '../assets/icons/material-ui-icon.svg';
import nodeJsIcon from '../assets/icons/nodejs-icon.svg';
import postgreSqlIcon from '../assets/icons/postgresql-icon.svg';
import puppeteerIcon from '../assets/icons/puppeteer-icon.svg';
import reactJsIcon from '../assets/icons/reactjs-icon.svg';
import sqlIcon from '../assets/icons/sql-icon.svg';
import typescriptIcon from '../assets/icons/typescript-icon.svg';

const skillsData = {
  link: 'stack',
  pageNum: 2,
  label: 'Stack',
  content: {
    blurb: '',
    languages: [
      ['TypeScript', typescriptIcon],
      ['SQL', sqlIcon],
      ['Node.js', nodeJsIcon],
      ['JavaScript'],
      ['HTML'],
      ['CSS'],
    ],
    frameworks: [
      ['React.js', reactJsIcon],
      ['Express.js', expressJsIcon],
      ['PostgreSQL', postgreSqlIcon],
    ],
    tools: [
      ['Jest', jestIcon],
      ['Material-ui', materialUiIcon],
      ['Bootstrap'],
      ['Puppeteer', puppeteerIcon],
    ],
  },
};

export default skillsData;
