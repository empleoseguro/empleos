import './App.css';
import { Routes, Route } from "react-router-dom";
import { NavBar } from './components/organisms/NavBar/NavBar';
import { Inicio } from './components/organisms/Inicio/Inicio';
import SinglePost from './components/molecules/SinglePost';
import Footer from './components/organisms/Footer';
import React, { useEffect } from 'react';
import Formulario from './components/molecules/Formulario';
import About from './components/Pages/About';
import { useGetPosts } from './hooks/useGetPosts';
import AlertPolitics from './components/molecules/AlertPolitics';


function App() {

  const data = useGetPosts()

  const MyInicio = <Inicio data={data} />
  const MySinglePost = <SinglePost data={data} />
  const MyAbout = <About data={data} />
  const MyFormulario = <Formulario data={data} />

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={MyInicio} />
        <Route path='/post/:postId' element={MySinglePost}
          meta={{
            'og:title': 'Título de la publicación',
            'og:description': 'Descripción de la publicación',
            'og:url': 'https://empleoseguro.tech/post/1',
          }}
        />
        <Route path="/formulario" element={MyFormulario} />
        <Route path="/about/:section" element={MyAbout} />
      </Routes>
      <Footer />

      {
        true ? <AlertPolitics /> : null
      }

    </div>
  );
}

export default App;