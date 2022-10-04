import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/organisms/NavBar/NavBar';
import { Home } from './components/organisms/Home/Home';
import { Inicio } from './components/organisms/Inicio/Inicio';

function App() {
  return (
    <div className="App">
      <NavBar />   
      <div className='mt-2'></div>
       <Inicio/>
    </div>
  );
}

export default App;