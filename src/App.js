import { useEffect, useState } from 'react';
import Destination from './Pages/Destination';
import Header from './Pages/Header';
import Home from './Pages/Home'
import './styles/home.css'
import Crew from './Pages/Crew';
import Technologie from './Pages/Technologie';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  //state's
  const [palnete,setPlanete]=useState([])
  const [crew,setCrew]=useState([])
  const [technologie,setTechnologie]=useState([])
  const [index,setIndex]=useState(0)
  const [ind,setInd]=useState(0)
  const [fil,setFil]=useState("Moon")
  // API'S FETCHING
  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/ismailsayen/API-S/main/destinations.json")
    .then(res=>res.json())
    .then(data=>setPlanete(data))
  },[])
  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/ismailsayen/API-S/main/crew.json")
    .then(res=>res.json())
    .then(data=>setCrew(data))
  },[])
  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/ismailsayen/API-S/main/technology.json")
    .then(res=>res.json())
    .then(data=>setTechnologie(data))
  },[])
  // FUNCTION'S
  const handleClick=(destination)=>{
    setFil(destination)
    
  }
  const handlChange=(a)=>{
    setIndex(a)
  }
  const handlechangetTech=(a)=>{
    setInd(a)
  }
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
            <Route index element={<Home />} />
            <Route path='destination' element={<Destination palnete={palnete} fil={fil} handleClick={handleClick} />} />
            <Route path='crew' element={<Crew crew={crew} index={index} handlChange={handlChange}/>}/>
            <Route path='technologie' element={<Technologie technologie={technologie} ind={ind} handlechangetTech={handlechangetTech}/>}/>
          </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
