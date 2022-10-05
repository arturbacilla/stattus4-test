import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import TagsModal from '../components/TagsModal';
import TagsContext from '../context/TagsContext';

export default function Home() {
  const { currentTags } = useContext(TagsContext);
  return (
    <>
      <Navbar />
      <TagsModal tags={currentTags} />
    </>
  );
}
