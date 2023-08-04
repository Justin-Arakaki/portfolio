import aniCriticPic from '../assets/images/anicritic.png';
import awsProjectPic from '../assets/images/aws-project.png';
// import jobMarketAnalyzerPic from '../assets/images/job-market-analyzer.png';
import quackchatPic from '../assets/images/quackchat.png';
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
      title: 'QuickChat',
      description:
        'Backend API that powers a chat application with Discord-like features',
      image: quackchatPic,
      ghUrl: 'https://github.com/Justin-Arakaki/quickchat',
      technologies: ['Express.js', 'MySQL', 'Redis', 'Sequelize ORM', 'Docker'],
    },
    {
      title: 'AWS Contact Form',
      description: 'A backend serverless API that processes contact forms',
      image: awsProjectPic,
      ghUrl: 'https://github.com/Justin-Arakaki/quickchat',
      technologies: ['AWS Lambda', 'AWS RDS', 'AWS API Gateway'],
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
    // {
    //   title: 'Indeed Scraper',
    //   description:
    //     'Indeed web scraper that searches tech skills in job listings',
    //   image: jobMarketAnalyzerPic,
    //   ghUrl: 'https://github.com/Justin-Arakaki/indeed-scraper',
    //   technologies: ['Puppeteer', 'TypeScript', 'TSnode', 'Node.js'],
    // },
  ],
};

export default projectData;
