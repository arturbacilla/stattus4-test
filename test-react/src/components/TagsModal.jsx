import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import TagsContext from '../context/TagsContext';
import { modalStyle, tagStyle } from '../helpers/muiStyles';

function TagsModal({ tags = [] }) {
  const { modalOpen, setModalOpen } = useContext(TagsContext);
  const handleClose = () => setModalOpen(false);

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
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
                  <CloseOutlinedIcon sx={{ height: '60%', fontWeight: 'bolder' }} />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

TagsModal.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      bgcolor: PropTypes.string,
      textcolor: PropTypes.string,
    }),
  ).isRequired,
};

export default TagsModal;
