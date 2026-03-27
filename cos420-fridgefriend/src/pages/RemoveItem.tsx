import React from 'react'
import { Link } from 'react-router-dom';
import { House } from "lucide-react";


const RemoveItem = () => {
  return (
    <>
    <div>
        <h1>FridgeFriend</h1>
        <Link to="/home" className="homescreen-link">
            <House size={32} color="#333" strokeWidth={1.5} />
        </Link>
        <hr />
    </div>
    <div>
      <h2 className="header-bar">Remove Item</h2>

       <div>
        <label>Item Name:</label>
        <input type="text" name="itemName" placeholder="Enter your item's name" required></input>
      </div><br />

       <div>
        <label>Quantity:</label>
        <input type="number" name="quantity" placeholder="Enter your item's quantity" required></input>
      </div><br />
      
      
      <button>Remove</button>
      <Link to="/inventory"><button>Cancel</button></Link>
    </div>
    </>
  )
}

export default RemoveItem;