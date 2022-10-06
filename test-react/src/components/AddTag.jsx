import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import TagsContext from '../context/TagsContext';

function AddTag() {
  const {
    currentTags, setCurrentTags,
  } = useContext(TagsContext);
  const [value, setValue] = useState('');
  const CHAR_LIMIT = 15;

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      margin: '20px 0px',
    }}
    >
      <Typography id="modal-modal-title" variant="h6" component="h5">
        Criar Nova TAG
      </Typography>
      <TextField
        id="demo-helper-text-misaligned"
        label="Tag Name"
        size="small"
        margin="dense"
        inputProps={{ maxLength: CHAR_LIMIT }}
        helperText={`${value.length}/${CHAR_LIMIT} caracteres.`}
        onChange={(event) => handleChange(event)}
      />
    </Box>
  );
}

export default AddTag;
