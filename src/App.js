import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Type from './Pages/Type';
import Home from './Pages/Home';
import Nav from './Pages/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/type/:name" element={<Type />}/>
      </Routes>
    </div>
  );
}

export default App;
