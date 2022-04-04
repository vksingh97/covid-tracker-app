import './App.css';
import {CovidTable, Cards} from './components';
import { fetchData } from './api'
import { useEffect, useState } from 'react';

function App() {
  const [covidData, setcovidData] = useState("");
  useEffect(()=>{
    fetchData().then(resp=>{
    setcovidData(resp.data);
  });
  },[])
  return (
    <div className="container">
    <Cards data={covidData}/>
    <CovidTable data={covidData}/>
    </div>
  );
}

export default App;
