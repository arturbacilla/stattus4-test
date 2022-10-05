import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from './TagsContext';

export default function TagsProvider({ children }) {
  const [currentTags, setCurrentTags] = useState([
    { name: 'GRANDE CONSUMIDOR', color: '#14008A' },
    { name: 'BAIXA PRESSÃO', color: '#FDDF38' },
    { name: 'PONTO SUSPEITO', color: '#FE0014' },
  ]);
  const [modalOpen, setModalOpen] = useState(true);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const values = {
    currentTags,
    setCurrentTags,
    modalOpen,
    setModalOpen,
  };
  return (
    <main>
      <UserContext.Provider value={values}>
        { children }
      </UserContext.Provider>
    </main>
  );
}

TagsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
