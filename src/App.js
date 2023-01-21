import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { Navber } from './components/Navber/Navber';
import Header from './components/header/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SideNav from './components/sideNav/SideNav';
import Registration from './components/registration/Registration';
import Login from './login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
          <Header/>
          <Navber/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/c" element={<SideNav />}></Route>
          <Route path="/reg" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
