import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { House } from "lucide-react";
import { JsxElement } from 'typescript';


const dummyList = [{
  quantity: 12,
  itemName: 'Apple',
  location: 'Fridge',
  category: 'Produce',
  price: 1,
  expiry: new Date(Date.now()),
  opened: false
}, {
  quantity: 1,
  itemName: 'Cake',
  location: 'Fridge',
  category: 'Produce',
  price: 1,
  expiry: new Date(Date.now()),
  opened: false
}, {
  quantity: 2,
  itemName: 'Pretzels',
  location: 'Pantry',
  category: 'Produce2',
  price: 1,
  expiry: new Date(Date.now()),
  opened: false
}, {
  quantity: 33,
  itemName: 'Burritos',
  location: 'Freezer',
  category: 'Produce',
  price: 1,
  expiry: new Date(Date.now()),
  opened: false
}];

const listItems = dummyList.map(item =>
  MakeListItem(item)
);

function MakeListItem(item: {
    quantity: number,
    itemName: string,
    location: string,
    category: string,
    price: number,
    expiry: Date,
    opened: boolean
 })
  {
    return (
      <li>
        <p>
          <b>{item.itemName}:</b>
          <div>{' Location: '+ item.location}</div>
          
          <div> Amount: {item.quantity}</div>
        </p>
      </li>
    )
}



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