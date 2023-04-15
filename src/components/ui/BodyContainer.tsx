import Container, { ContainerProps } from '@mui/material/Container';
import { styled } from '@mui/material/styles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BodyContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 900,
  paddingInline: '2.5rem !important',
  [theme.breakpoints.down('sm')]: { maxWidth: 500 },
  [theme.breakpoints.up('lg')]: { maxWidth: 900 },
}));

export default BodyContainer;
