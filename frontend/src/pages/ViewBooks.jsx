import React, { useEffect, useState } from 'react';
import './ViewBooks.css'

function ViewBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://freetestapi.com/api/v1/books')
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  return (
    <>
      {books.map((book, index) => (
       <div className='bg-dark cardContainer'>
         <div key={index} className="card bg-dark text-light"style={{height:'350px',width:'217px'}} >
          <div className="card-body">
            <img src={book.cover_image} alt={book.title} style={{width:'100px'}}/>
            <h5 className="card-title">{book.title}</h5>
            <p className="card-text">Author: {book.author}</p>
            <p className="card-text">Genre: {book.genre}</p>
            {/* Add more details as needed */}
          </div>
        </div>
       </div>
      ))}
    </>
  );
}

export default ViewBooks;
