import React, { useState, useEffect } from "react";
import Mycard from "../cards/Mycard.js";
import books from "../components/books.png";
import plustwo from "../components/+2.jpg";
import entrance from "../components/Entrance.jpg";
import school from "../components/School.jpg";
import "./Imagecarousel.css";
import book1 from "../components/book1.jpg";
import book2 from "../components/book2.jpg";
import book3 from "../components/book3.jpg";
import book4 from "../components/book4.jpg";
import book5 from "../components/book5.jpg";
import axios from "axios";
import "./Imagecarousel.css";
const Imagecarousel = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const _id = localStorage.getItem("_id");
    const result = await axios.get("http://localhost:5000/products/" + _id);
    console.log(result);
    setApiData(result.data).then((getData) => {
      setApiData(getData.data);
    });
  };

  return (
    <div className="product-container">
      {apiData.map((book, index) => (
        <Mycard
        userId={book.userId}
          id={book._id}
          name={book.bookname}
          img={book.image}
          seller={book.author}
          price={book.price}
          s={book.author}
        />
      ))}
    </div>
  );
};

export default Imagecarousel;
