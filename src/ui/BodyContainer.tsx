import { styled } from '@mui/material/styles';
import Container, { ContainerProps } from '@mui/material/Container';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BodyContainer = styled(Container)<ContainerProps>(({ theme }) => ({
	maxWidth: 900,
	[theme.breakpoints.down('sm')]: {
		maxWidth: 600,
	},
	[theme.breakpoints.up('lg')]: {
		maxWidth: 900,
	},
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
}));

export default BodyContainer;
