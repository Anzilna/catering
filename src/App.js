import './App.css';
import React, { useEffect, useState } from 'react'
import Topbar from './components/adminpanel/Topbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Registration from "./components/view/Registration";
import Places from "./components/view/Places";
import Home from "./components/adminpanel/Home";
import Fooditems from './components/adminpanel/Fooditems';
import Foodview from './components/adminpanel/Foodview';
import Package from './components/adminpanel/Package';
import Packageview from './components/adminpanel/Packageview';


function App() {
  const [isloggedin,setIsloggedin] =useState(false);

  useEffect(()=>{
  const storevalue =localStorage.getItem("isloggedin");
  if(storevalue==="1")
   {
    setIsloggedin(true); 
  }
  },[])
  
  const Logincheck =() =>{
  localStorage.setItem("isloggedin",'1')
  setIsloggedin(true);
  }
  const Logoutcheck =() =>{
  localStorage.removeItem("isloggedin")
  setIsloggedin(false);
  }

  
  return (
    <div >
     
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Login/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Fooditems' element={<Fooditems/>}></Route>
      <Route path='/Foodview' element={<Foodview/>}></Route>
      <Route path='/Package' element={<Package/>}></Route>
      <Route path='/Packageview' element={<Packageview/>}></Route>
     <Route path='/registration' element={<Registration method='POST'/>}></Route>
     <Route path='/Places' element={<Places method='POST'/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;