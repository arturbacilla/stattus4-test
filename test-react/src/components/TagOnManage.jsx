import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { tagStyle } from '../helpers/muiStyles';
import TagsContext from '../context/TagsContext';

function TagOnManage({ tag }) {
  const {
    setConfirmationModalOpen,
    setSelectedTag,
  } = useContext(TagsContext);

  const openDeleteModal = (tagname) => {
    setSelectedTag(tagname);
    setConfirmationModalOpen(true);
  };
  return (
    <Box
      key={tag.name}
      sx={{
        backgroundColor: tag.bgcolor,
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
          padding: '0px 10px',
          fontSize: '0.7rem',
          fontWeight: 'bolder',
          textAlign: 'center',
        }}
      >
        {tag.name}
      </Typography>
      <IconButton
        size="small"
        aria-label="delete tag"
        onClick={() => openDeleteModal(tag.name)}
      >
        <CloseOutlinedIcon sx={{ fontSize: 'inherit', fontWeight: 'bolder', color: '#8f8f8f' }} />
      </IconButton>
    </Box>
  );
}

TagOnManage.propTypes = {
  tag: PropTypes.shape({
    name: PropTypes.string,
    bgcolor: PropTypes.string,
    textcolor: PropTypes.string,
  }).isRequired,
};

export default TagOnManage;
