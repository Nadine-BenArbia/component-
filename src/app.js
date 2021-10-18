import "./App.css";
import Navbar from "./assets/Navbar";
import React from "react";
import Footer from "./Footer";
import Dogs from "./assets/Dogs";

function App() {
  let pets = [
    { name: "Leo", category: "cat", age: "2 months", img:<img srcc=  'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262__480.jpg'  /> },
    { name: "Lucy", category: "cat", age: "8 months", img:<img srcc=  ' https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d'/>},
    { name: "Abby", category: "dog", age: "15 months", img:<img srcc=  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgLorwzPiAb8uRuhcj_pJ9tOz3QDFzPzlfJA&usqp=CAU'  /> },
    {
      name: "Pepper",
      category: "dog",
      age: "18 months",
      img: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ64iVaaqvCAtO--zTfJIzfKb_N145B_WyQlQ&usqp=CAU'> </img>,
    },
    { name: "Zoe", category: "dog", age: "3 months", img: "/pets/dog4.jfif" },
    {
      name: "Bully",
      category: "rabbit",
      age: "10 months",
      img: <img src='https://www.scottishspca.org/sites/default/files/styles/full_content/public/2019-09/Rabbit%20860x500.jpeg?itok=OvX2YuHA'> </img>,
    },
    {
      name: "Bella",
      category: "rabbit",
      age: "24 months",
      img: <img src='https://www.thesprucepets.com/thmb/BKNJkoyr-qyvfaYVRVCuEHNmOXU=/1155x1155/smart/filters:no_upscale()/Stocksy_txp14acff329Kw100_Medium_1360769-5aec7baefa6bcc00373c6cb7.jpg'> </img>,
    },
  ];
  return (
    <>
      <Navbar></Navbar>
      <h1 class="section-title">
        All <span>Pets</span>
      </h1>
      <Pets item={pets}></Pets>
      <h1 class="section-title">
        Dog<span>s</span>
      </h1>
      <Dogs item={pets}></Dogs>
      <h1 class="section-title">
        Cat<span>s</span>
      </h1>
      <Cats item={pets}></Cats>
      <h1 class="section-title">
        Rabbi<span>ts</span>
      </h1>
      <Rabbit item={pets}></Rabbit>
      <Footer></Footer>
    </>
  );
}

export  default App ;