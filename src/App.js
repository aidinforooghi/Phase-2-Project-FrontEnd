import './App.css';
import { Container } from '@mantine/core';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
function App() {
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
        <Route exact path="/" element={<Home/> } />
        <Route exact path="/new" element={<div>/new component</div>} />
        <Route exact path="/show" element={<div>/show component</div>} />
        <Route exact path="/edit" element={<div>/edit component</div>} />
        <Route exact path="/destroy" element={<div>/destroy component</div>} />
      </Routes>
    </Container>
  );
}

export default App;
