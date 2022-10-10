import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import PointsContext from '../context/PointsContext';
import PointCard from './PointCard';

export default function PointsList() {
  const {
    currentPoints,
  } = useContext(PointsContext);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {currentPoints.map((point) => <PointCard key={point.name} point={point} />)}
    </Box>
  );
}
