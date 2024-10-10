import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"

function Home() {
    const image = require('../images/Front-img.jpg')
  return (
    <div className='Home-Page bg-dark text-light container-fluid d-flex justify-content-center align-items-center'>
        <div className="row container">
            <div className="col-lg-6 d-flex justify-content-center align-items-center align-items-lg-start flex-column" style={{height : "91.5vh"}}>
                <h1 style={{fontSize:'6rem'}}>BOOK STORE FOR YOU</h1>
                <span style={{color:'silver'}}>Check out the books for you</span>
                <Link className='viewBook my-3' to="/viewBooks">View Books</Link>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-end flex-column " style={{height: "91.5vh"}}>
                <img src={image} alt="" className='img-fluid homeImg'/>
            </div>
        </div>
    </div>
  )
}

export default Home