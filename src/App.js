import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import { NavBar } from './components/organisms/NavBar/NavBar';
import { Inicio } from './components/organisms/Inicio/Inicio';
import SinglePost from './components/molecules/SinglePost';
import BaseTemplate from './components/templates/BaseTemplate';
import Footer from './components/organisms/Footer';
import { useState } from 'react';
import Formulario from './components/molecules/Formulario';
import About from './components/Pages/About';
import { useGetPosts, useUser } from './hooks/useGetPosts';


function App() {

  const data = useGetPosts()



  return (
    <div className="App">

      <NavBar />
      <Routes>
        <Route path="/empleos" element={<Inicio data={data} />}>

        </Route>
        <Route path='empleos/post/:postId' element={<SinglePost data={data} />} />
        <Route path="empleos/formulario" element={<Formulario data={data} />} />
        <Route path="empleos/about/:section" element={<About data={data} />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;