import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Navbar'
import Users from './Users'
import UserCreate from './UserCreate'
import UserUpdate from './UserUpdate'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route exact path='/' element={<Users />}/>
          <Route exact path='/create' element={<UserCreate/>} />
          <Route exact path='/update/:id' element={<UserUpdate/>} />
        </Routes>
    </BrowserRouter>
  );
}
