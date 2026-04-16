import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { House } from "lucide-react";


const dummyList = [{
  amount: 12,
  name: 'Apple',
  location: 'Fridge',
}, {
  amount: 1,
  name: 'Cake',
  location: 'Fridge',
}, {
  amount: 2,
  name: 'Pretzels',
  location: 'Pantry',
}, {
  amount: 3,
  name: 'Burritos',
  location: 'Freezer',
}];
const listItems = dummyList.map(person =>
  <li>
     <p>
       <b>{person.name}:</b>
       <div>{' Location: '+person.location}</div>
       
       <div> Amount: {person.amount}</div>
     </p>
  </li>
);

const Inventory = () => {
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
          <nav>
            <Link to="/inventory/itemInfo">Item Info</Link>
          </nav>
          <Outlet />
          <h2 className="header-bar">Inventory</h2>
          <select>
              <option id="fridge">Fridge</option>
              <option id="fridge">Freezer</option>
              <option id="fridge">Pantry</option>
          </select>
          <Link to="/inventory/addItem"><button>Add</button></Link>
          <Link to="/inventory/removeItem"><button>Remove</button></Link>
        </div>
        <ul>{listItems}</ul>;
    </>
  )
}

export default Inventory;