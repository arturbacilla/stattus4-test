import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TagsContext from '../context/TagsContext';

const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '5px',
};

function TagsModal({ tags }) {
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
        <Box sx={style}>
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
                <Box sx={{ backgroundColor: tag.color }}>{tag.name}</Box>))}
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
      color: PropTypes.string,
    }),
  ).isRequired,
};

export default TagsModal;
