import React from 'react'
import './CovidTable.css'

const CovidTable = (props) => {
  return (
    <div className="container-fluid mt-5">
    <div className='main-heading'>
      <h1 className='mb-5 text-center'><span className='font-weight-bold'>INDIA</span> COVID-19 CASES</h1>
    </div>
    <div className='table-responsive'>
    <table className="table table-hover">
    <thead className='thead-dark'>
    <tr>
      <th scope="col">Name of State/UT</th>
      <th scope="col">Total</th>
      <th scope='col'>Active</th>
      <th scope="col">Change Today</th>
      <th scope="col">Cured</th>
      <th scope="col">Cured Today</th>
      <th scope="col">Total Death</th>
      <th scope="col">New Deaths</th>
    </tr>
  </thead>
  <tbody>
    {props.data?(props.data.map((data) => (
        <tr key={data.sno}>
      {data.state_name===""?<th scope="row">Total</th>:<th scope="row">{data.state_name}</th>}
      <td>{data.positive}</td>
      <td>{data.new_active}</td>
      <td>{(data.new_active-data.active)/*>0?(data.new_active-data.active):0*/}</td>
      <td>{data.cured}</td>
      <td>{data.new_cured-data.cured}</td>
      <td>{data.death}</td>      
      <td>{data.new_death-data.death}</td>
    </tr>
    ))):null}
  </tbody>

</table>
    </div>
    </div>
  )
}

export default CovidTable