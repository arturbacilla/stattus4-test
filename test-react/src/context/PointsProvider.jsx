import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PointsContext from './PointsContext';
import initialPoints from '../helpers/initialPoints';

export default function PointsProvider({ children }) {
  const [currentPoints, setCurrentPoints] = useState([...initialPoints]);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const values = {
    currentPoints,
    setCurrentPoints,
  };
  return (
    <main>
      <PointsContext.Provider value={values}>
        { children }
      </PointsContext.Provider>
    </main>
  );
}

PointsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
