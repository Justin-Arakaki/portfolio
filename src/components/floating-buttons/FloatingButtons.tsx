import { Box, SxProps, Theme, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function FloatingButtons() {
  const floatingBoxStyle: SxProps<Theme> = {
    position: 'fixed',
    bottom: '3rem',
    right: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  const iconStyle: SxProps<Theme> = {
    color: 'text.primary',
    transition: '0.5s',
    ['&:hover']: { color: 'text.secondary' },
  };
  const buttonInfo = [
    {
      title: 'github',
      link: 'https://github.com/Justin-Arakaki',
      icon: <GitHubIcon sx={iconStyle} />,
    },
    {
      title: 'linkedin',
      link: 'https://www.linkedin.com/in/jrarakaki/',
      icon: <LinkedInIcon sx={iconStyle} />,
    },
    {
      title: 'email',
      link: 'mailto: Justin.r.arakaki7@gmail.com',
      icon: <EmailIcon sx={iconStyle} />,
    },
  ];
  const buttons = buttonInfo.map((info, index) => {
    return (
      <IconButton
        disableRipple
        aria-label={info.title}
        href={info.link}
        key={index}
      >
        {info.icon}
      </IconButton>
    );
  });

  return <Box sx={floatingBoxStyle}>{buttons}</Box>;
}
