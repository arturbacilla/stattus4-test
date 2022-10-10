import React from 'react';
import './App.css';
import {
  Routes, Route, Navigate, BrowserRouter,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import TagsProvider from './context/TagsProvider';
import Home from './pages/Home';
import themeOptions from './theme/themeOptions';
import PointsProvider from './context/PointsProvider';

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <TagsProvider>
        <PointsProvider>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </BrowserRouter>
        </PointsProvider>
      </TagsProvider>
    </ThemeProvider>
  );
}

export default App;
