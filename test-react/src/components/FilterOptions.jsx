import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TagList from './TagList';
import TagsContext from '../context/TagsContext';

export default function FilterOptions() {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const date = new Date().toLocaleDateString('pt-BR', options);
  const [selectedFilter, setSelectedFilter] = useState('tag');
  const { currentTags } = useContext(TagsContext);

  const handleChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      alignItems: 'center',
      margin: '10px 0px',
      textAlign: 'center',
      width: '100%',
    }}
    >
      <Typography variant="button">Pontos de Instalação</Typography>
      <TextField
        id="date-filter"
        label="Data"
        defaultValue={date}
        variant="filled"
      />
      <Button variant="contained" color="primary" sx={{ width: '80%' }}>Filtrar</Button>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleChange}
        defaultValue="tag"
      >
        <FormControlLabel
          value="pt"
          control={<Radio size="small" sx={{ fontSize: '10px' }} />}
          label="P.Instalação"

        />
        <FormControlLabel value="tag" control={<Radio size="small" />} label="TAG" />
      </RadioGroup>
      { selectedFilter === 'tag' ? <TagList tags={currentTags} manage={false} /> : null}
    </Box>
  );
}
