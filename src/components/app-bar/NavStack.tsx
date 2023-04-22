import { ResponsiveStyleValue } from '@mui/system/styleFunctionSx';
import { SxProps, Theme, Stack } from '@mui/material';
import useHash from '../../hooks/useHash';
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
  const hash = useHash();

  const pageInfo = [pages.aboutme, pages.skills, pages.projects, pages.contact];
  const buttons = pageInfo.map((page, index) => (
    <NavButton
      label={page.label}
      link={page.link}
      handleClose={handleClose}
      isToggledOn={hash === `#${page.link}`}
      key={index}
      listNo={index + 1}
      delay={index + 1}
    />
  ));

  return (
    <Stack direction={direction} spacing={spacing} sx={sx}>
      {buttons}
    </Stack>
  );
}
