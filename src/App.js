import './App.css';
import { Switch, Route } from "react-router-dom";
import { NavBar } from './components/organisms/NavBar/NavBar';
import { Inicio } from './components/organisms/Inicio/Inicio';
import SinglePost from './components/molecules/SinglePost';
import Footer from './components/organisms/Footer';
import React, { useEffect, useState } from 'react';
import Formulario from './components/molecules/Formulario';
import About from './components/Pages/About';
import { useGetPosts } from './hooks/useGetPosts';
import AlertPolitics from './components/molecules/AlertPolitics';


function App() {

  const [local, setlocal] = useState(false)

  const data = useGetPosts()


  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <Inicio data={data} />} />
        <Route path='/post/:postId' render={() => <SinglePost data={data} />} />
        <Route path="/formulario" render={() => <Formulario data={data} />} />
        <Route path="/about/:section" render={() => <About data={data} />} />
      </Switch>
      <Footer />

      {
        true ? <AlertPolitics /> : null
      }

    </div>
  );
}

export default App;