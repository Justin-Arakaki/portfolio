import { Button, ButtonProps, styled } from '@mui/material';

const DemoButton = styled((props: ButtonProps) => (
  <Button {...props} variant="outlined" disableFocusRipple disableTouchRipple />
))({
  paddingBlock: '0.1rem',
  paddingInline: '0.5rem',
  borderRadius: 5,
});

export default DemoButton;
