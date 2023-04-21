import aniCriticPic from '../assets/images/anicritic.png';
import jobMarketAnalyzerPic from '../assets/images/job-market-analyzer.png';
import truestreamPic from '../assets/images/truestream.png';
import yoshinagaPortfolioPic from '../assets/images/yoshinaga-portfolio.png';

const projectData = {
  link: 'projects',
  pageNum: 3,
  label: 'Projects',
  content: {
    blurb: 'Personal and professional projects.',
  },
  list: [
    {
      title: 'Job Market Analyzer',
      description:
        'Indeed web scraper that searches popular skills in job listings',
      image: jobMarketAnalyzerPic,
      ghUrl: 'https://github.com/Justin-Arakaki/job-market-analyzer',
      technologies: ['Puppeteer', 'TypeScript', 'TSnode', 'Node.js'],
    },
    {
      title: 'TrueStream',
      description:
        'Fullstack web app that tracks user media streaming subscriptions',
      image: truestreamPic,
      demoUrl: 'https://truestream.justarakaki.dev/',
      ghUrl: 'https://github.com/Justin-Arakaki/truestream',
      technologies: [
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'React.js',
        'Material-ui',
      ],
    },
    {
      title: 'Yoshinaga Portfolio',
      description:
        "Freelance project for an animator's portfolio based on a given design",
      image: yoshinagaPortfolioPic,
      demoUrl:
        'https://justin-arakaki.github.io/nicole-yoshinaga-website/#/animation',
      ghUrl: 'https://github.com/Justin-Arakaki/nicole-yoshinaga-website',
      technologies: ['TypeScript', 'React.js', 'Material-ui', 'Jest.js'],
    },
    {
      title: 'AniCritic',
      description:
        'Frontend web app that allows users to track, search, and review anime',
      image: aniCriticPic,
      demoUrl: 'https://justin-arakaki.github.io/anicritic/',
      ghUrl: 'https://github.com/Justin-Arakaki/anicritic',
      technologies: ['JavaScript', 'AJAX', 'JikanAPI'],
    },
  ],
};

export default projectData;
