import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

interface Props {
  size: string;
}

export default function Spacer({ size }: Props) {
  const theme = useTheme();
  let margin;
  switch (size) {
    case 'small':
      margin = 2;
      break;
    case 'medium':
      margin = 4;
      break;
    case 'large':
      margin = 8;
      break;
    default:
      margin = 0;
  }

  return (
    <Box
      sx={{
        mt: margin,
        [theme.breakpoints.down('sm')]: {
          mt: margin / 2,
        },
      }}
    ></Box>
  );
}
