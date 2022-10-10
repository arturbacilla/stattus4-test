import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import TagOnPoint from '../Tags/TagOnPoint';
import TagsContext from '../../context/TagsContext';

export default function PointCard({ point }) {
  const { currentTags } = useContext(TagsContext);
  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', padding: '5px', gap: '5px',
    }}
    >
      <Typography variant="button">{point.name}</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', minwidth: '100%' }}>
        {point.imgs.map((img) => (
          <Box
            component="img"
            alt="logo"
            src={`/${img}.png`}
            key={`${point.name}-img${img}`}
            height="50px"
          />
        ))}
      </Box>
      <Typography variant="caption">Tags:</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
        {point.tags.map((tag) => {
          const foundTag = currentTags.find((thisTag) => thisTag.name === tag);
          if (foundTag) {
            return (
              <TagOnPoint
                key={`${point.name}-${tag}`}
                tag={foundTag}
              />
            );
          }
          return false;
        })}
      </Box>
      <Divider />
    </Box>
  );
}

PointCard.propTypes = {
  point: PropTypes.shape({
    name: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    imgs: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
};
