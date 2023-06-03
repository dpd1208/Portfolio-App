import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
export default function App() {
  return (
    <Routes>
      <Route exact path='/' component={HomePage} />
      <Route path='/:id' component={UserPage} />
    </Routes>
  )
}
