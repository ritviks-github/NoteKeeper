import './App.css';
import MainComp from './MainComp';
import Form from './Form';
import Nav from './Nav';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import {Routes,Route} from 'react-router-dom'
function App() {
  const [login,setLogin] = useState("Save");
  const play = ()=>{
    document.querySelector('#formSub').style.opacity = "1";
  }
  const done = ()=>{
    document.querySelector('#formSub').style.opacity = "0";
    setLogin("Save"); 
  }
  return (
    <>
      <button id="log"><Link to="/log" id="link"  onClick={play}>{login}</Link></button>
      <Nav />
      <Routes>
        <Route path = "/" element = {<MainComp />} />
        <Route path = "/log" element = {<Form />} />
        <Route path="/submit" element={<MainComp />} />
      </Routes>
      <button id="formSub"><Link to="/submit" onClick={done} id="toDo">Submit</Link></button>
    </>
  );
}
export default App;
