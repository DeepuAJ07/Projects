import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const[ismobile,setIsmobile]=useState(false)
  return (

    <nav className="Navbar">
      <img src="#" alt="Vemalls" />

      <ul className={ismobile ? 'nav-mob-link':'nav-links'} onClick={()=>setIsmobile(false)}>
        <Link to={"/home"} className="home">
          <li>HOME</li>
        </Link>
        <Link to={"/shop"} className="shop">
          <li>SHOP</li>
        </Link>
        <Link to={"/services"} className="services">
          <li>SERVICES</li>
        </Link>
        <Link to={"/products"} className="products">
          <li>PRODUCTS</li>
        </Link>
        <Link to={"/offer"} className="offer">
          <li>OFFER</li>
        </Link>
        <Link to={"/homemade"} className="homemade">
          <li><i>Homemade and Organic</i></li>
        </Link>

        <Link to={"/login"} className="login">
          <li>LOGIN</li>
        </Link>
      </ul>
      <button className="mob-menu-icon" onClick={()=>{setIsmobile(!ismobile)}}>{ismobile?<h1>X</h1>:<h1>=</h1>}</button>
    </nav>
  );
}
