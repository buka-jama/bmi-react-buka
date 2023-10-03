import "./App.css";
import React,{useState} from "react";

function App() {
const[name,setName] = useState("");
const[height,setHeight] = useState("");
const[mass,setMass] = useState("");
const[bmi,setBmi] = useState(null);

function calculateBMI() {
  if (height && mass) {
    const heightinmeters = height/100;
    const bmivalue = Math.round((mass/(heightinmeters*heightinmeters)))
    setBmi(bmivalue)
  }
  
}
return(
  <div className="App">
    <h1>BMI calculator</h1>
    <div>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
    <div>
      <label>Height (cm):</label>
      <input type="number" value={height} onChange = {(e) => setHeight(e.target.value)}/>
    </div>
    <div>
      <label>mass(kg):</label>
      <input type="number" value= {mass} onChange={(e) => setMass(e.target.value)}/>
    </div>
    <button onClick = {calculateBMI}>calculateBMI</button>
    {bmi && (
      <div>
        <h2>Results</h2>
        <p>Name: {name}</p>
        <p>Height: {height}</p>
        <p>Mass: {mass}</p>
        <p>BMI: {bmi}</p>

      </div>
    )}

  </div>

 
)

















}

export default App;
