import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from "./navbar.js";
import Home from './strony/home';
import Hell from "./strony/hell";
// import Discord from "./discord"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Navigation />
    <Routes>
        <Route path='/' element={<Home />} index />
        <Route path='/hell' element={<Hell />} />
    </Routes>
</BrowserRouter>
);