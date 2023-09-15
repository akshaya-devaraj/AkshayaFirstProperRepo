
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';

function App() {
  return (
         <div className="app">
         <BrowserRouter>
         <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
         </Routes>
         </BrowserRouter>
         </div>
  );
}

export default App;
