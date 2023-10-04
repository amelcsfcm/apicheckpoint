import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Listuser = () => {
  const [liste, setlist]=useState([])
    useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((resp)=>{setlist(resp.data)})
    .catch((err)=>{console.log(err)})
  },[])
    return (
    <div>
      {liste.map((el,index)=>(
        <div key={index}>
         <h3>{el.id}</h3>
         <h3>{el.name}</h3>
         <h3>{el.username}</h3>
         <h3>{el.email}</h3>

        </div>)
        

      )}
    </div>
  )
}

export default Listuser
