import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components';
import SingleCard from './components/SingleEventCard';
import { HomePage } from './pages';

function App() {

    return (
        <div>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path={'/event/:id'} element={ <div className='cards-container'>
                        <SingleCard /> 
                    </div>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
