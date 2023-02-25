import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signin from './components/Signin';
import SignUp from './components/Signup';
import Home from './components/Home';
import AddRecipe from './components/AddRecipe';
import { useState } from 'react';
import Details from './components/Details';

function App() {
  const [detail, setDetail]=useState({})
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/home' element={<Home detail={detail} setDetail={setDetail}/>}/>
          <Route path='/add' element={<AddRecipe/>}/>
          <Route path='/details' element={<Details detail={detail} setDetail={setDetail}/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
