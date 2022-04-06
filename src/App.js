import "./App.css";
import { CovidTable, Cards } from "./components";
import { fetchData } from "./api";
import { useEffect, useState } from "react";
import Charts from "./components/Charts/Charts";

function App() {
  const [covidData, setcovidData] = useState("");
  useEffect(() => {
    fetchData().then((resp) => {
      setcovidData(resp.data);
    });
  }, []);
  return (
    <div className="container">
      <Cards data={covidData} />
      <CovidTable data={covidData} />
      <Charts data={covidData} />
    </div>
  );
}

export default App;
