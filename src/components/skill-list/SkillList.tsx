import { ReactSVG } from 'react-svg';
import { Box, Divider, Typography } from '@mui/material';
import defaultIcon from '../../assets/icons/default-icon.svg';
import {
  dividerStyle,
  iconCorrection,
  skillContainerStyle,
  skillItem,
  skillListWrapperStyle,
} from './skillListStyles';

interface Skill {
  name: string;
  icon: string | null;
  strength: number;
}

interface SkillsListProps {
  skills: Skill[];
  header: string;
}

export default function SkillsList({ skills, header }: SkillsListProps) {
  const tooling = skills.map((skillInfo, index) => {
    const svgIcon = skillInfo.icon ? skillInfo.icon : defaultIcon;

    return (
      <Box key={index} sx={skillItem}>
        <Box sx={iconCorrection}>
          <ReactSVG
            src={svgIcon}
            beforeInjection={(svg) => {
              svg.setAttribute('style', 'width: 22; height: 22;');
            }}
          />
        </Box>
        <Typography variant="body1" color="text.secondary">
          {skillInfo.name}
        </Typography>
      </Box>
    );
  });

  return (
    <Box sx={skillListWrapperStyle}>
      <Divider light={true} sx={dividerStyle}>
        <Typography variant="h5" color="text.secondary">
          {header}
        </Typography>
      </Divider>
      <Box sx={skillContainerStyle}>{tooling}</Box>
    </Box>
  );
}
