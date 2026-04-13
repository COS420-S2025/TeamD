import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { House, Camera } from "lucide-react";


const AddItem = () => {

  const [location, setLocation] = useState<number>(0);
  const [itemName, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("Produce");
  const [price, setPrice] = useState<number>(0);
  const [expiry, setExpiry] = useState<Date>(new Date());
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
          <input type="text" name="itemName" onChange={e => setName(e.target.value)} placeholder="Enter your item's name" required></input>
        </div><br/>
        <div>
              <label>Location</label><br />
              <label>
                <input type="radio" name="location" value="fridge" onClick={e => setLocation(0)} />Fridge
              </label><br />
              <label>
                <input type="radio" name="location" value="freezer" onClick={e => setLocation(1)} />Freezer
                </label><br />
              <label><input type="radio" name="location" value="pantry" onClick={e => setLocation(2)} />Pantry
              </label><br />
        </div><br/>
            <label>Category</label><br />
            <select onChange={e => setCategory(e.target.value)}>
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
            <input type="text" name="itemName" placeholder="$0.00"  onChange={e => setPrice(e.target.value.length>0 && !Number.isNaN(Number.parseFloat(e.target.value)) ? Number.parseFloat(e.target.value) : 0)}></input>
          </div>
          <div>
            <label>Expiration Date:</label>
            <input type="date" name="expirationDate" placeholder="MM/DD/YYYY" onChange={e => setExpiry(new Date(e.target.value))}></input>
          </div>

          <div>
            <label>Mark as Opened:</label>
            <input type="checkbox" onClick={() => setOpened(!opened)}/>
          </div>

          <div>
            <label>Quantity:</label>
            <input type="text" name="quantity" placeholder="Enter your item's quantity" onChange={e => setQuantity(e.target.value.length>0 && !Number.isNaN(Number.parseFloat(e.target.value)) ? Number.parseFloat(e.target.value) : 0)}></input>
          </div>
        
          <br />
          <button type="submit" onClick={() => {}}>Add</button>
          <Link to="/inventory"><button>Cancel</button></Link>
        </div>
      </>
  )
}

export default AddItem;