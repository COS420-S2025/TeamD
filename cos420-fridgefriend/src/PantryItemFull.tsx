import React, { useState } from "react";
import './PantryItemFull.css';

//Framework for the in depth view for pantry items
//Need a way so, when opened, is populated correctly.
//Like a function that takes a PANTRY_ITEM objecct as a variable?
export function PantryItemFull(): React.JSX.Element {

    //High chance all of these aree made to be a part of one singular object, which has a UseState itself
    //Then helper functions to change specific parts and tell the program to update?

    //Quantity. Allows decimals, but the buttons would need to change
    //Also likely need a variable "quantity_name". So you can have quarts, pints, whatever. Some things are measured weird.
    //If quantity_name is set, don't have quick change buttons? Force typing? It may be too much to try accounting for that
    const [quantity, setQuantity] = useState<number>(0); 
    //Opened or not. To track freshness
    const [opened, setOpened] = useState<boolean>(false);
    //Opened date. To track freshness
    const [openedOn, setOpenedOn] = useState<Date>(new Date());
    //Expiry date. Important to have
    const [expires, setExpires] = useState<Date>(new Date());
    //actually static stuff (probably)
    var image = "logo.svg";
    var name = "Item Name";
    return (
        <div className="PantryItemFull">
            
            <h1>{name}</h1>
            <img src={image} ></img>
            <br></br>

            {/* We may need to get rid of the buttons and add a quantity_name thing here*/}
            Qty: {quantity} <button className="qtyButton" onClick={()=> {setQuantity(quantity+1)}}>+</button><button className="qtyButton" onClick={()=> {setQuantity(quantity-1)}}>-</button>
            <br></br>

            {/* Figure out formatting for this? */}
            {opened?"Opened On: " + openedOn.toDateString() : <button className="openButton" onClick={()=> {setOpened(true); setOpenedOn(new Date(Date.now()))}}>Open</button>}
            <br></br>

            {/* Button below should open a calendar to set expiry date */}
            Expires: {expires.toDateString()} 
            <button className="expiryButton" onClick={()=> {}}>Set Expiry Date</button>

            {/* idk if we'd need this, but its here. maybe you could click and hold on other things to do this? */}
            <button> Advanced Options? </button>
        </div>
    );
}