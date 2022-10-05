import React from 'react';
import './App.css';
import {
  Routes, Route, Navigate, BrowserRouter,
} from 'react-router-dom';
import TagsProvider from './context/TagsProvider';
import Home from './pages/Home';

function App() {
  return (
    <TagsProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </TagsProvider>
  );
}

export default App;
