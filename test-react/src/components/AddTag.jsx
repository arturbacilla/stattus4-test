import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TagsContext from '../context/TagsContext';
import newTagOptions from '../helpers/newTagOptions';

function AddTag() {
  const { currentTags, setCurrentTags } = useContext(TagsContext);
  const [value, setValue] = useState('');
  const [selectedColor, setSelectedColor] = useState(0);
  const CHAR_LIMIT = 15;

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
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
      <Typography id="modal-modal-title" variant="body2" component="body2">
        Selecione a cor:
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '80%' }}>
        {newTagOptions.map((option, i) => (
          <Button
            key={option.name}
            variant="contained"
            sx={{
              backgroundColor: option.bgcolor,
              color: option.textcolor,
              fontWeight: 'bolder',
              textAlign: 'center',
              margin: '5px',
              height: '30px',
              width: '60px',
              border: selectedColor === i && '2px solid black',
            }}
            onClick={() => setSelectedColor(i)}
          >
            A
          </Button>
        ))}
      </Box>
      <Button
        variant="contained"
        sx={{
          alignSelf: 'flex-end',
          backgroundColor: newTagOptions[selectedColor].bgcolor,
          color: newTagOptions[selectedColor].textcolor,
        }}
      >
        Criar
      </Button>
    </Box>
  );
}

export default AddTag;
