import React from 'react';
import './style.css';
import Home from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/signup';
import SignIn from './components/signin';
import Album from './components/album';

import Layout from './components/layout';
import NoPage from './components/nopage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="album" element={<Album />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
