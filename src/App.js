import React from 'react';

import MainLayout from "./components/MainLayout";
import NavbarPage from "./components/NavbarPage";
import {BrowserRouter} from 'react-router-dom';


import "./styles/style.css";

export default function App() {
  return (
    <div> 
      <BrowserRouter>      
      <NavbarPage />
        <MainLayout />
      </BrowserRouter> 
    </div>
  )
}

