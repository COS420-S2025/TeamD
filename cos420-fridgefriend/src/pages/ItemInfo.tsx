import React from 'react'
import { Link } from 'react-router-dom';
import { House } from "lucide-react";


const ItemInfo = () => {
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
      <h2 className="header-bar">Item Info</h2>
      <button>Back</button>
      <button>Remove</button>
    </div>
    </>
  )
}

export default ItemInfo;