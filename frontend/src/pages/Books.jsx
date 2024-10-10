import React, { useEffect, useState } from 'react'
import axios from "axios"
import BooksSection from '../components/BooksSection'

function Books() {
  const [data,setData] = useState()
  useEffect(()=>{
    const fetch = async ()=>{
      await axios.get("http://localhost:2000/books/fetch").then((res)=>setData(res.data.books));
      
    }
    fetch()
  })
  return (
    <div className='bg-dark ' style={{minHeight:'92vh'}}>
      <div className='d-flex justify-content-center align-items-center py-3'>
      <h4 className='text-light'>Books Section</h4>
    </div>
    {data ? <BooksSection data={data}/> : <div className='text-light d-flex justify-content-center align-items-center'>Loading...</div>}
    </div>
  )
}

export default Books;