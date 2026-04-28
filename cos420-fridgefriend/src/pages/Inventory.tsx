import React, {ReactElement, useState} from 'react'
import { Link, Outlet } from 'react-router-dom';
import { House } from "lucide-react";
import { JsxElement } from 'typescript';

interface pantryItem{
  quantity: number;
  itemName: string;
  location: string;
  category: string;
  price: number;
  expiry: Date;
  opened: Boolean;
}

const dummyList: pantryItem[] = [{
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

const [listItems, setListItems] = useState<ReactElement[]>([]);

setListItems(dummyList.map(item =>
  MakeListItem(item)
));

/*const listItems = dummyList.map(item =>
  MakeListItem(item)
);*/

function MakeListItem(item: pantryItem)
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

function SortByExpiry(a: pantryItem, b:pantryItem): number{
  if(a.expiry.getTime() > b.expiry.getTime()) return 1;
  if(a.expiry.getTime() > b.expiry.getTime()) return -1;
  return 0;
}

function SortByLocation(a: pantryItem, b:pantryItem): number{
  return a.location.localeCompare(b.location);
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