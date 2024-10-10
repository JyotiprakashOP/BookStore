import React, { useState } from "react";
import axios from "axios"


function AddBooks() {
  const [data,setData] = useState({bookname:"",author:"",description:"",image:"",price:""})
  const change=(e)=>{
    const {name,value} =e.target
    setData({...data,[name]:value});

  }
  const submit= async (e)=>{
    e.preventDefault()
    await axios.post("http://localhost:2000/books/add",data).then((res)=>alert(res.data.message));
    setData({bookname:"",author:"",description:"",image:"",price:""});

  }
  // console.log(data)
  return (
    <div className="bg-dark text-light d-flex justify-content-center align-items-center" style={{ minHeight: "92vh" }}>
      <div className="container p-5">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Book name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter the book name"
          name="bookname"
          onChange={change}
          value={data.bookname}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Author
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter the name of author"
          name="author"
          onChange={change}
          value={data.author}

        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter Description of the book"
          name="description"
          onChange={change}
          value={data.description}

        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Image
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter the URL of the image"
          name="image"
          onChange={change}
          value={data.image}

        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter the book price"
          name="price"
          onChange={change}
          value={data.price}

        />
      </div>
      <button className="btn btn-success mt-3" onClick={submit}>Submit</button>
      
      </div>
    </div>
  );
}

export default AddBooks;
