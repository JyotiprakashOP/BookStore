import React, { useState } from "react";
import axios from "axios";

function BooksSection({ data, fetch }) {
  const [editBook, setEditBook] = useState(null); // State for storing book to edit
  const [updatedData, setUpdatedData] = useState({
    bookname: "",
    author: "",
    description: "",
    image: "",
    price: "",
  });

  // Handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:2000/books/delete/${id}`);
      alert("Book deleted successfully");
      fetch(); // Refresh the list after deletion
    } catch (err) {
      console.error("Error deleting book:", err);
      
    }
  };

  // Handle update click (open the form with selected book data)
  const handleUpdateClick = (book) => {
    setEditBook(book); // Set the book to edit
    setUpdatedData(book); // Pre-fill the form with the selected book's data
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  // Handle update submission
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:2000/books/update/${editBook._id}`, updatedData);
      alert("Book updated successfully");
      setEditBook(null); // Close the update form
      fetch(); // Refresh the list after updating
    } catch (err) {
      console.error("Error updating book:", err);
      
    }
  };

  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap">
      {data &&
        data.map((book) => (
          <div
            className="card m-5"
            key={book._id}
            style={{
              width: "200px",
              height: "400px",
              backgroundColor: "transparent",
              border: "1px solid white",
              borderRadius: "20px",
            }}
          >
            <div>
              <img
                style={{
                  width: "200px",
                  height: "250px",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                }}
                className="img-fluid"
                src={book.image}
                alt={book.bookname}
              />
            </div>
            <h6 className="px-2 my-1 text-light mb-2">
              {book.bookname.slice(0, 20)}...
            </h6>
            <div className="">
              <h5 className="m-2 text-light">Rs.{book.price}</h5>
              <div className="mt-4 d-flex justify-content-around">
                <button
                  className="btn btn-primary"
                  onClick={() => handleUpdateClick(book)}
                >
                  UPDATE
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(book._id)}
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>
        ))}

      {editBook && (
        <div className="edit-form bg-dark text-light p-4 mt-4 container">
          <h4>Edit Book</h4>
          <form onSubmit={handleUpdateSubmit}>
            <div className="mb-3">
              <label>Book Name</label>
              <input
                type="text"
                className="form-control"
                name="bookname"
                value={updatedData.bookname}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label>Author</label>
              <input
                type="text"
                className="form-control"
                name="author"
                value={updatedData.author}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                name="description"
                value={updatedData.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label>Image URL</label>
              <input
                type="text"
                className="form-control"
                name="image"
                value={updatedData.image}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label>Price</label>
              <input
                type="number"
                className="form-control"
                name="price"
                value={updatedData.price}
                onChange={handleInputChange}
              />
            </div>
            <button className="btn btn-success mt-3" type="submit">
              Save Changes
            </button>
            <button
              className="btn btn-secondary mt-3 ms-3"
              onClick={() => setEditBook(null)} // Close the form
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default BooksSection;
