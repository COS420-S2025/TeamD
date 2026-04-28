import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { House } from "lucide-react";
import { JsxElement } from 'typescript';
import {useState} from "react"
import {db} from "../firebase"
import {collection, getDocs} from "firebase/firestore"

// interface data {
//   itemName: string;
//   catigory: string;
//   Location:string;
//   opened: boolean;
//   price: number;
//   quantity: number;
// }


function ItemList(){
  //const[foodItem, setFoodItem]= useState(null);
  const [foodItem, setFoodItem] = useState<any>(null);
  const itemCollRef = collection(db, 'foodItem');
  
  
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
          
          <button onClick = {async () =>{
            const collData = await getDocs(itemCollRef);
            const itemArray = collData.docs.map(doc => ({ 
              itemName: doc.data().itemName
            }));
            console.log(itemArray)
            setFoodItem(itemArray)
            console.log(foodItem)
          }}>Load Items</button>
          {foodItem == null ? <p>Loading</p>: foodItem.map((item:any, index:number) => <div key={index}>{item.itemName} </div>)}
          <Link to="/inventory/addItem"><button>Add</button></Link>
          <Link to="/inventory/removeItem"><button>Remove</button></Link>
        </div>
        <ul>{listItems}</ul>;
    </>
  )
  //console.log(collData.docs);
}
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

export default ItemList;