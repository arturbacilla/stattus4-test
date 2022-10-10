import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import TagsContext from '../../context/TagsContext';

function TagsOnFilter({ tag }) {
  const {
    selectedTag,
    setSelectedTag,
  } = useContext(TagsContext);

  const toggleClick = (tagName) => {
    if (selectedTag === tagName) return setSelectedTag('');
    return setSelectedTag(tagName);
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: selectedTag === tag.name ? tag.textcolor : tag.bgcolor,
    backgroundColor: selectedTag === tag.name ? tag.bgcolor : 'white',
    borderColor: selectedTag === tag.name ? 'black' : tag.bgcolor,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  }));

  return (
    <ColorButton
      variant="outlined"
      onClick={() => toggleClick(tag.name)}
      sx={{ fontSize: '0.5rem', padding: '2px 10px' }}
    >
      {tag.name}
    </ColorButton>
  );
}

TagsOnFilter.propTypes = {
  tag: PropTypes.shape({
    name: PropTypes.string,
    bgcolor: PropTypes.string,
    textcolor: PropTypes.string,
  }).isRequired,
};

export default TagsOnFilter;
