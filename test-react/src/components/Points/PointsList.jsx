import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import PointsContext from '../../context/PointsContext';
import TagsContext from '../../context/TagsContext';
import PointCard from './PointCard';

export default function PointsList() {
  const { selectedTag } = useContext(TagsContext);
  const { currentPoints } = useContext(PointsContext);

  const filteredPoints = selectedTag ? currentPoints
    .filter((point) => point.tags.includes(selectedTag)) : currentPoints;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {filteredPoints.map((point) => <PointCard key={point.name} point={point} />)}
    </Box>
  );
}
