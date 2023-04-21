import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Type from './Pages/Type';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/type/:type" element={<Type />}/>
      </Routes>
    </div>
  );
}

export default App;
