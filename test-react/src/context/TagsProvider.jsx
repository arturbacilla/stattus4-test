import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TagsContext from './TagsContext';
import initialTags from '../helpers/initialTags';

export default function TagsProvider({ children }) {
  const [currentTags, setCurrentTags] = useState([...initialTags]);
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState('');
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const values = {
    currentTags,
    setCurrentTags,
    modalOpen,
    setModalOpen,
    confirmationModalOpen,
    setConfirmationModalOpen,
    selectedTag,
    setSelectedTag,
  };
  return (
    <main>
      <TagsContext.Provider value={values}>
        { children }
      </TagsContext.Provider>
    </main>
  );
}

TagsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
