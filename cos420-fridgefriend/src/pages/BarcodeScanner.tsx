import React from 'react'
import { Link } from 'react-router-dom';
import { House } from "lucide-react";
import placeholder from '../barcode-scanner-placeholder.jpg';
const BarcodeScanner = () => {
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
        <h2 className="header-bar">Barcode Scanner</h2>
        <img src={placeholder} alt="Placeholder barcode scanner"/>;
    </div>
    </>
  )
}

export default BarcodeScanner;