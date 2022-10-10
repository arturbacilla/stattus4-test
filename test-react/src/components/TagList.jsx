import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TagOnManage from './TagOnManage';
import TagOnFilter from './TagOnFilter';

function TagList({ tags, manage }) {
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      width: '95%',
      gap: manage ? '10px' : '5px',
      justifyContent: 'center',
    }}
    >
      { tags && tags.map((tag) => (
        manage ? <TagOnManage tag={tag} /> : <TagOnFilter tag={tag} />
      ))}
    </Box>
  );
}

TagList.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      bgcolor: PropTypes.string,
      textcolor: PropTypes.string,
    }),
  ).isRequired,
  manage: PropTypes.bool.isRequired,
};

export default TagList;
