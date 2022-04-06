import React, { useEffect, useState } from "react";
import "./CovidTable.css";

const CovidTable = (props) => {
  const [data, setdata] = useState("");
  const [order, setOrder] = useState("");
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setdata(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setdata(sorted);
      setOrder("ASC");
    }
  };
  useEffect(() => {
    setdata(props.data.slice(0, -1));
    setOrder("ASC");
  }, [props.data]);
  return (
    <div className="container-fluid mt-5">
      <div className="main-heading">
        {/* {console.log(data)} */}
        <h1 className="mb-5 text-center">
          <span className="font-weight-bold">INDIA</span> COVID-19 CASES
        </h1>
      </div>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col" onClick={() => sorting("state_name")}>
                Name of State/UT
              </th>
              <th scope="col" onClick={() => sorting("positive")}>
                Total
              </th>
              <th scope="col" onClick={() => sorting("new_active")}>
                Active
              </th>
              <th scope="col">Change Today</th>
              <th scope="col" onClick={() => sorting("new_cured")}>
                Cured
              </th>
              <th scope="col">Cured Today</th>
              <th scope="col" onClick={() => sorting("new_death")}>
                Total Death
              </th>
              <th scope="col">New Deaths</th>
            </tr>
          </thead>
          <tbody>
            {data
              ? data.map((data) => (
                  <tr key={data.sno}>
                    {data.state_name === "" ? (
                      <th scope="row">Total</th>
                    ) : (
                      <th scope="row">{data.state_name}</th>
                    )}
                    <td>{data.positive}</td>
                    <td>{data.new_active}</td>
                    <td>{data.new_active - data.active}</td>
                    <td>{data.cured}</td>
                    <td>{data.new_cured - data.cured}</td>
                    <td>{data.death}</td>
                    <td>{data.new_death - data.death}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CovidTable;
