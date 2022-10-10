import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import FilterOptions from './FilterOptions';
import PointsList from '../Points/PointsList';

const drawerWidth = { lg: '14vw' };

export default function FilterTab() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar sx={{ height: { lg: '12vh', xl: '8vh' } }} />
      <Box sx={{ overflow: 'auto', width: '100%' }}>
        <FilterOptions />
        <Divider />
        <PointsList />
      </Box>
    </Drawer>
  );
}
