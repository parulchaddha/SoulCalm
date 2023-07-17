import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Mygoals from './components/mygoals';


function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Mygoals" element={<Mygoals/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        </Routes>
    </BrowserRouter> 
   </> 
  );
}

export default App;
