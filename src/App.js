import { useState, useEffect } from 'react';
import { Container } from '@mantine/core';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import New from "./components/New"
import Destroy from './components/Destroy';
import Show from './components/Show';


function App() {
  const [data, setData] = useState([])

  //get all data
  function getAllData() {
    fetch(`${process.env.REACT_APP_API_URL}/toys`)
      .then(res => res.json())
      .then(data => setData(data))
  }

  // adding the new added item the state
  function addNewItem(newItem) {
    setData([...data, newItem])
  }

  // removing the deleted item from the state
  const removeItem = (itemId) => {
    setData((oldState) =>
      oldState.filter((o) => o.id !== itemId)
    );
  };

  // updating the edited item in the state 
  function updateItemState(item) {
    let itemIndex = data.findIndex(d => d.id === item.id) // find item index
    let updatedData = [...data] //put old state in a new variable 
    updatedData[itemIndex] = item //update the item using its index
    setData(updatedData) //setting the state with the new updated data
  }


  useEffect(() => {
    //fetching all data upon rendering
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
        <Route exact path="/" element={<Home data={data} setData={setData} />} />
        <Route exact path="/new" element={<New addNewItem={addNewItem} />} />
        <Route exact path="/show/:id" element={<Show updateItemState={updateItemState}/>} />
        <Route exact path="/destroy" element={<Destroy data={data} removeItem={removeItem} />} />
      </Routes>
    </Container>
  );
}

export default App;
