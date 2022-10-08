import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { tagStyle } from '../helpers/muiStyles';
import TagsContext from '../context/TagsContext';

function TagList({ tags }) {
  const {
    setConfirmationModalOpen,
    setSelectedTag,
  } = useContext(TagsContext);

  const openDeleteModal = (tagname) => {
    setSelectedTag(tagname);
    setConfirmationModalOpen(true);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <Typography id="modal-modal-title" variant="h6" component="h5">
        TAGs Criadas
      </Typography>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
      >
        { tags && tags.map((tag) => (
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
              <CloseOutlinedIcon sx={{ fontSize: 'inherit', fontWeight: 'bolder' }} />
            </IconButton>
          </Box>
        ))}
      </Box>
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
};

export default TagList;
