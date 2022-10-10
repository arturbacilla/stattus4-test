import React, { useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import FilterTab from '../components/Filter/FilterTab';
import Navbar from '../components/Navbar';
import TagsModal from '../components/Modals/TagsModal';
import TagsContext from '../context/TagsContext';

export default function Home() {
  const { currentTags } = useContext(TagsContext);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar />
      <FilterTab />
      <TagsModal tags={currentTags} />
    </Box>
  );
}
