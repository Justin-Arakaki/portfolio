import Container, { ContainerProps } from '@mui/material/Container';
import { styled } from '@mui/material/styles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BodyContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 800,
  paddingInline: '2.5rem !important',
}));

export default BodyContainer;
