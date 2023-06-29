import './App.css';
import { useState, useEffect } from 'react';
import { Container } from '@mantine/core';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import New from "./components/New"
function App() {
  const [data, setData] = useState([])

  //get all data
  async function getAllData() {
    await fetch("http://localhost:3001/toys")
      .then(res => res.json())
      .then(data => setData(data))
  }

  useEffect(() => {
    getAllData()
  
  }, [])

  return (
    <Container
      bg="gray"
      fluid
      mih="100vh"
      p={0}
    >
      <Navbar />
      {/*  routes */}
      <Routes>
        <Route exact path="/" element={<Home data={data} setData={setData}/>} />
        <Route exact path="/new" element={<New/> } />
        <Route exact path="/show" element={<div>/show component</div>} />
        <Route exact path="/edit" element={<div>/edit component</div>} />
        <Route exact path="/destroy" element={<div>/destroy component</div>} />
      </Routes>
    </Container>
  );
}

export default App;
