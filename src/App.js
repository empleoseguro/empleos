import './App.css';
import { Routes, Route } from "react-router-dom";
import { NavBar } from './components/organisms/NavBar/NavBar';
import { Inicio } from './components/organisms/Inicio/Inicio';
import SinglePost from './components/molecules/SinglePost';
import Footer from './components/organisms/Footer';
import React from 'react';
import Formulario from './components/molecules/Formulario';
import About from './components/Pages/About';
import { useGetPosts } from './hooks/useGetPosts';
import AlertPolitics from './components/molecules/AlertPolitics';


function App() {

  const data = useGetPosts()



  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio data={data} />}>
        </Route>
        <Route path='/post/:postId' element={<SinglePost data={data} />} />
        <Route path="/formulario" element={<Formulario data={data} />} />
        <Route path="/about/:section" element={<About data={data} />} />
      </Routes>
      <Footer />

    {
      localStorage.getItem('mymodal') ?  <AlertPolitics/> :  null
    }
   
   {
    console.log(localStorage.getItem('mymodal'))
   }

    </div>
  );
}

export default App;