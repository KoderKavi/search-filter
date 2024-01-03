import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [data, setData] = useState([]);
  const [filterRecords, setFilterRecords] = useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
      setData(res.data)
      setFilterRecords(res.data)
    })
    .catch(err=>console.log(err));
  },[])

  const filterFunction = (event) => {
    setFilterRecords(data.filter(d=>d.name.toLowerCase().includes(event.target.value)));
  }
  return (
    <div style={{margin: '0 auto', width: '75%', height: '500px', marginTop: '20px'}}>
      <input type="text" placeholder='Search' onChange={filterFunction} style={{width: '50%', height: '35px'}}/>
      
      
      <table style={{width: '100%'}}>
        <thead>
          <tr style={{background:'blue', color: '#fff'}}>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filterRecords.map((item, ind)=>(
            <tr key={ind}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App