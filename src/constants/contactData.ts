import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const contactData = {
  link: 'contact',
  pageNum: 4,
  label: 'Contact',
  content: {
    blurb: "Let's get in touch!",
    message:
      "Thanks for visiting my portfolio. If you are looking for a enthusiastic and self-motivated web developer, please don't hesitate to reach out. Let's build something neat!",
  },
  socials: [
    {
      title: 'Resume',
      link: 'https://drive.google.com/file/d/1D2hs2_3eGaVPWtjdauNlogrl9sWsNskr/view?usp=sharing',
      icon: DescriptionIcon,
    },
    {
      title: 'Email',
      link: 'mailto: Justin.r.arakaki7@gmail.com',
      icon: EmailIcon,
    },
    {
      title: 'GitHub',
      link: 'https://github.com/Justin-Arakaki',
      icon: GitHubIcon,
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/jrarakaki/',
      icon: LinkedInIcon,
    },
  ],
};
export default contactData;
