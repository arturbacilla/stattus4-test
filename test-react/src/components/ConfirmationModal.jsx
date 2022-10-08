import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TagsContext from '../context/TagsContext';
import { confirmationStyle } from '../helpers/muiStyles';

export default function ConfirmationModal() {
  const {
    currentTags,
    setCurrentTags,
    confirmationModalOpen, setConfirmationModalOpen, selectedTag,
  } = useContext(TagsContext);
  const handleClose = () => setConfirmationModalOpen(false);

  const deleteTag = (tagname) => {
    const newArray = currentTags.filter((tag) => tag.name !== tagname);
    setCurrentTags(newArray);
    handleClose();
  };

  return (
    <Modal
      open={confirmationModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title2"
      aria-describedby="modal-modal-description2"
    >
      <Box sx={confirmationStyle}>
        <Typography sx={{ color: 'red', fontWeight: 'bolder' }}>
          ATENÇÃO!
        </Typography>
        <Typography>
          {`Deseja excluir a TAG "${selectedTag}"?`}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <Button variant="contained" color="error" onClick={handleClose}>Cancelar</Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => deleteTag(selectedTag)}
          >
            Excluir
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
