import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { tagStyle } from '../../helpers/muiStyles';

function TagOnPoint({ tag }) {
  return (
    <Box
      key={tag.name}
      sx={{
        backgroundColor: tag.bgcolor,
        fontSize: '0.5rem',
        padding: '2px 5px',
        ...tagStyle,
      }}
    >
      <Typography
        id="tag"
        variant="button"
        align="center"
        sx={{
          color: tag.textcolor,
          display: 'inline-block',
          padding: '0px 0px',
          fontSize: '0.4rem',
          fontWeight: 'bolder',
          textAlign: 'center',
        }}
      >
        {tag.name}
      </Typography>
    </Box>
  );
}

TagOnPoint.propTypes = {
  tag: PropTypes.shape({
    name: PropTypes.string,
    bgcolor: PropTypes.string,
    textcolor: PropTypes.string,
  }).isRequired,
};

export default TagOnPoint;
