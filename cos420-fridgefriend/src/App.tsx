import React from 'react';
import logo from './logo.svg';
import './App.css';
let myColor = "pink";
function App() {
  return (
    
    <div className="App">
      <div style={{ width: 1430, height: 50, backgroundColor: "pink" }}>
      <button onClick={()=>{myColor = "blue"}} style={{ width:100,height:40, color: "black", backgroundColor:"pink" }}>Sign In</button>  
      <button onClick={() => {
                   myColor="yellow" 
                }}
                style={{ width: 100, height: 40, color: "black",backgroundColor: "pink" }}>Sign Out</button>
    </div>
      <header className="App-header">
        <p style={{ color: myColor}}>
          FRIDGE FRIEND!!!
        </p>
        <h1>Contributors</h1>
        <ul>
          <li>
            Isabel Layland
          </li>
          <li>
            Jennifer Morin
          </li>
          <li> Paige Doucette
            </li>
            <li>
              Drew Hafford
            </li>
            <li>
              Willa Galipeau-Eldridge
            </li>
        </ul>
      </header>
    {/* <div style={{ width: 200, height: 50, backgroundColor: "pink" }}>
      <button>Sign Out</button>
    </div> */}
    </div>
    
  );
}

export default App;
