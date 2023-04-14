import { ResponsiveStyleValue } from '@mui/system/styleFunctionSx';
import { SxProps, Theme, Stack } from '@mui/material';
import { useSiteData } from '../../contexts/SiteDataContext';
import NavButton from './NavButton';

interface Props {
  direction?: ResponsiveStyleValue<
    'row' | 'row-reverse' | 'column' | 'column-reverse'
  >;
  spacing: ResponsiveStyleValue<string | number>;
  handleClose?: () => void;
  sx?: SxProps<Theme>;
}

export default function NavStack({
  direction,
  spacing,
  sx,
  handleClose,
}: Props) {
  const { pages } = useSiteData();
  const buttons = pages.map((page, index) => (
    <NavButton
      label={page.label}
      link={page.path}
      handleClose={handleClose}
      key={index}
      listNo={index + 1}
    />
  ));

  return (
    <Stack direction={direction} spacing={spacing} sx={sx}>
      {buttons}
    </Stack>
  );
}
