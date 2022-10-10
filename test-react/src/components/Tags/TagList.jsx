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
      justifyContent: 'flex-start',
    }}
    >
      { tags && tags.map((tag) => (
        manage ? <TagOnManage key={tag.name} tag={tag} /> : <TagOnFilter key={tag.name} tag={tag} />
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
