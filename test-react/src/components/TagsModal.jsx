import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TagsContext from '../context/TagsContext';
import { modalStyle } from '../helpers/muiStyles';
import TagList from './TagList';
import AddTag from './AddTag';
import ConfirmationModal from './ConfirmationModal';

function TagsModal({ tags = [] }) {
  const {
    modalOpen, setModalOpen,
  } = useContext(TagsContext);
  const handleClose = () => setModalOpen(false);

  return (
    <>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography id="modal-modal-title" variant="h6" component="h5">
              TAGs Criadas
            </Typography>
            <TagList tags={tags} manage />
          </Box>
          <AddTag />
        </Box>
      </Modal>
      <ConfirmationModal />
    </>
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
