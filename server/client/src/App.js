import {React, createContext, useReducer} from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Offcanvas from "./Components/Offcanvas";
import Edit from "./Components/Edit";
import Register from "./Components/Register";
import {Routes,Route} from 'react-router-dom';


const  App = () => {


  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path='/' element = {<Home/>}/>
      <Route exact path='/register' element = {<Register/>}/>
      <Route exact path='/edit/:id' element = {<Edit/>}/>
      <Route exact path='/view/:id' element = {<Offcanvas/>}/>
    </Routes>
    </>
  )
}

export default App;
