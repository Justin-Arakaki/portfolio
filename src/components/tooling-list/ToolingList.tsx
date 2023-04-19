import { ReactSVG } from 'react-svg';
import { Box, Divider, Typography } from '@mui/material';
import { useSiteData } from '../../contexts/SiteDataContext';
import defaultIcon from '../../assets/icons/default-icon.svg';
import {
  dividerStyle,
  iconCorrection,
  toolingContainerStyle,
  toolingItem,
  toolingWrapperStyle,
} from './toolingListStyles';

export default function ToolingList() {
  const { content } = useSiteData().pages.projects;

  const tooling = content.tooling.map((toolInfo, index) => {
    const svgIcon = toolInfo[1] ? toolInfo[1] : defaultIcon;

    return (
      <Box key={index} sx={toolingItem}>
        <Box sx={iconCorrection}>
          <ReactSVG
            src={svgIcon}
            beforeInjection={(svg) => {
              svg.setAttribute('style', 'width: 22; height: 22;');
            }}
          />
        </Box>
        <Typography variant="body1" color="text.secondary">
          {toolInfo[0]}
        </Typography>
      </Box>
    );
  });

  return (
    <>
      <Box sx={toolingWrapperStyle}>
        <Divider light={true} sx={dividerStyle}>
          <Typography variant="h5" color="text.secondary">
            Built using
          </Typography>
        </Divider>
        <Box sx={toolingContainerStyle}>{tooling}</Box>
      </Box>
    </>
  );
}
