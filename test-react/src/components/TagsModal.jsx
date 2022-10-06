import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TagsContext from '../context/TagsContext';
import { modalStyle } from '../helpers/muiStyles';
import TagList from './TagList';
import AddTag from './AddTag';

function TagsModal({ tags = [] }) {
  const {
    modalOpen, setModalOpen,
  } = useContext(TagsContext);
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
          <TagList tags={tags} />
          <AddTag />
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
