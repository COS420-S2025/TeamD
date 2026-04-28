import React, {ReactElement, useState} from 'react'
import { Link, Outlet } from 'react-router-dom';
import { House } from "lucide-react";
import { JsxElement } from 'typescript';
import {db} from "../firebase"
import {collection, getDocs} from "firebase/firestore"

interface data {
  itemName: string;
  category: string;
  location:string;
  opened: boolean;
  price: number;
  quantity: number;
  expiry: string
}

// function properties(){
//   return [item.itemName, item.category, item.location, item.opened, item.price, item.quantity]
// }
function ItemList(){
  //const[foodItem, setFoodItem]= useState(null);
  const [foodItem, setFoodItem] = useState<any>(null);
  const [Inventory, setInventory] = useState<any>(null);
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
              <option id="fridge" value="Fridge">Fridge</option>
              <option id="fridge" value="Freezer">Freezer</option>
              <option id="fridge" value="Pantry">Pantry</option>
          </select>
          
          <button onClick = {async () =>{
            const collData = await getDocs(itemCollRef);
            const itemArray = collData.docs.map(doc => ({ 
              itemName: doc.data().itemName,
              category: doc.data().category,
              location: doc.data().location,
              opened: doc.data().opened,
              price: doc.data().price,
              quantity: doc.data().quantity,
              expiry: doc.data().expiry

            }));
            console.log(itemArray)
            setFoodItem(itemArray)
            console.log(foodItem)
            const listItems = itemArray.map(item =>
            MakeListItem(item)
            );
            
          setInventory(listItems)
          }}>Load Items</button>
          
          {foodItem == null ? <p>Loading</p>: <ul>{Inventory}</ul>}
          <Link to="/inventory/addItem"><button>Add</button></Link>
          <Link to="/inventory/removeItem"><button>Remove</button></Link>
        </div>
        {/* <ul>{Inventory}</ul>; */}
    </>
  )
  //console.log(collData.docs);
}


function MakeListItem(item: data)
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

// Put sort modes can be changed by chaning mode. Need to make more functions for it
// 0 = expiry
// 1 = location
function SortList(mode: number){
  if(mode == 0)
    setListItems(dummyList.sort((a, b) => SortByExpiry(a,b))
      .map(item =>
      MakeListItem(item)
    ));

    if(mode == 1)
    setListItems(dummyList.sort((a, b) => SortByLocation(a,b))
      .map(item =>
      MakeListItem(item)
    ));
}

function SortByExpiry(a: data, b:data): number{
  if(!a.expiry || !b.expiry) return 0;
  if(a.expiry.getTime() > b.expiry.getTime()) return 1;
  if(a.expiry.getTime() > b.expiry.getTime()) return -1;
  return 0;
}

function SortByLocation(a: data, b:data): number{
  return a.location.localeCompare(b.location);
}

// const Inventory = () => {
//   return (
//     <>
//         <div>
//             <h1>FridgeFriend</h1>
//             <Link to="/home" className="homescreen-link">
//                 <House size={32} color="#333" strokeWidth={1.5} />
//             </Link>
//             <hr />
//         </div>
//         <div>
//           <nav>
//             <Link to="/inventory/itemInfo">Item Info</Link>
//           </nav>
//           <Outlet />
//           <h2 className="header-bar">Inventory</h2>
//           <select>
//               <option id="fridge">Fridge</option>
//               <option id="fridge">Freezer</option>
//               <option id="fridge">Pantry</option>
//           </select>
//           <Link to="/inventory/addItem"><button>Add</button></Link>
//           <Link to="/inventory/removeItem"><button>Remove</button></Link>
//         </div>
//         <ul>{listItems}</ul>;
//     </>
//   )
// }

export default ItemList;