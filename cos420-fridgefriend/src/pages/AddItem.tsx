import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { House, Camera } from "lucide-react";
//import {useState} from "react"
import {db} from "../firebase"
import {collection, getDocs, addDoc} from "firebase/firestore"



const AddItem = () => {
  const itemCollRef = collection(db, 'foodItem');
  const [location, setLocation] = useState<string>("");
  const [itemName, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("Produce");
  const [price, setPrice] = useState<number>(0);
  const [expiry, setExpiry] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <>
    <div className="header">
      <h1>FridgeFriend</h1>
        <Link to="/home" className="homescreen-link">
          <House className="header-item" size={32} color="#333" strokeWidth={1.5} />
        </Link>
        <hr />
    </div>
    <div>
        <h2 className="header-bar">Add Item</h2>  
        <nav>
          <Link to="/inventory/barcodeScanner">
            <Camera size={32} color="#333" strokeWidth={1.5} />
          </Link>
        </nav>
    <div>
          <label>Item Name:</label>
          <input type="text" data-testid="itemName" name="itemName" onChange={e => setName(e.target.value)} placeholder="Enter your item's name" required></input>
        </div><br/>
        <div>
              <label>Location</label><br />
              <label>
                <input type="radio" data-testid="fridge" name="location" value="fridge" onClick={e => setLocation("Fridge")} />Fridge
              </label><br />
              <label>
                <input type="radio" data-testid="freezer" name="location" value="freezer" onClick={e => setLocation("Freezer")} />Freezer
                </label><br />
              <label><input type="radio" data-testid="pantry" name="location" value="pantry" onClick={e => setLocation("Pantry")} />Pantry
              </label><br />
        </div><br/>
            <label>Category</label><br />
            <select data-testid="category" onChange={e => setCategory(e.target.value)}>
                <option>Produce</option>
                <option>Dairy</option>
                <option>Protein</option>
                <option>Condiments</option>
                <option>Leftovers</option>
                <option>Beverages</option>
                <option>Frozen</option>
              </select><br /><br />

          <div>
            <label>Price:</label>
            <input type="text" data-testid="price" name="price" placeholder="$0.00"  onChange={e => setPrice(e.target.value.length>0 && !Number.isNaN(Number.parseFloat(e.target.value)) ? Number.parseFloat(e.target.value) : 0)}></input>
          </div>
          <div>
                      <label>Expiration Date XX/XX/XXXX:</label>
          <input type="text" data-testid="itemName" name="itemName" onChange={e => setExpiry(e.target.value)} placeholder="Enter your items expiration" required></input>
          </div>

          <div>
            <label>Mark as Opened:</label>
            <input type="checkbox" data-testid="opened" onClick={() => setOpened(!opened)}/>
          </div>

          <div>
            <label>Quantity:</label>
            <input type="text" data-testid="quantity" name="quantity" placeholder="Enter your item's quantity" onChange={e => setQuantity(e.target.value.length>0 && !Number.isNaN(Number.parseFloat(e.target.value)) ? Number.parseFloat(e.target.value) : 0)}></input>
          </div>
        
          <br />
          {/* <button name="add" id="submit" type="submit" onClick={e => 
            {
              (document.getElementById("submit") as HTMLInputElement).disabled = true;
              //addItem({location: location, itemName: itemName, ...}); etc.
              //Basically just making an object to hold things, then passing it back.
              (document.getElementById("submit") as HTMLInputElement).disabled = false;
            }}>Add</button> */}
            <button onClick={async (ev) =>{
                        ev.preventDefault()
                        await addDoc(itemCollRef, {
                          itemName: itemName,
                          category: category,
                          location: location,
                          opened: opened,
                          price: price,
                          quantity: quantity,
                          expiry: expiry
            
                        })}}>Submit</button>
          <Link to="/inventory"><button name="cancel">Cancel</button></Link>
        </div>
      </>
  )
}

export default AddItem;