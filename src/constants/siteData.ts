import truestreamPic from '../assets/truestream.png';

const siteData = {
  pages: {
    aboutme: {
      link: 'aboutme',
      pageNum: 1,
      label: 'About Me',
      content: {
        name: 'Justin Arakaki',
        greeting: 'Hi there, my name is_',
        title: 'a web developer.',
        about:
          'I am a former mechanical engineer turned software developer driven by a passion for creating functional and beautiful digital experiences. I like exploring new technologies and solving problems through code.',
      },
    },
    projects: {
      link: 'projects',
      pageNum: 2,
      label: 'Projects',
      content: {
        blurb: 'Not talented. Just a hard worker.',
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
          title: 'Yoshinaga Portfolio',
          description: "Paid freelance project for an animator's portfolio",
          image: truestreamPic,
          demoUrl:
            'https://justin-arakaki.github.io/nicole-yoshinaga-website/#/animation',
          ghUrl: 'https://github.com/Justin-Arakaki/nicole-yoshinaga-website',
          technologies: ['TypeScript', 'React.js', 'Material-ui', 'Jest.js'],
        },
        {
          title: 'AniCritic',
          description:
            'Frontend web app that allows users to track and review series using an api',
          image: truestreamPic,
          demoUrl: 'https://justin-arakaki.github.io/anicritic/',
          ghUrl: 'https://github.com/Justin-Arakaki/anicritic',
          technologies: ['JavaScript', 'AJAX', 'JikanAPI'],
        },
      ],
    },
    resume: {
      link: 'resume',
      pageNum: 3,
      label: 'Resume',
      content: {
        name: 'Justin Arakaki',
        greeting: 'Hi there, my name is_',
        title: 'a web developer.',
        about:
          'I am a former mechanical engineer turned software developer driven by a passion for creating functional and beautiful digital experiences. I like exploring new technologies and solving problems through code.',
      },
    },
    contact: {
      link: 'contact',
      pageNum: 4,
      label: 'Contact',
      content: {
        name: 'Justin Arakaki',
        greeting: 'Hi there, my name is_',
        title: 'a web developer.',
        about:
          'I am a former mechanical engineer turned software developer driven by a passion for creating functional and beautiful digital experiences. I like exploring new technologies and solving problems through code.',
      },
    },
  },
};

export default siteData;
