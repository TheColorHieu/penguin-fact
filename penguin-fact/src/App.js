import React, {useState} from 'react';
import './App.css';


function App() {
  //here we are going to add a useState hook
  const [facts, setFacts] = useState("");
  const penguinFacts = [
    "Penguins are birds.",
    "Penguins are excellent swimmers.",
    "Penguins are carnivores.",
    "Penguins have black and white feathers that look like a tuxedo.",
    "Penguins live in the Southern Hemisphere.",
    "Penguins waddle from side to side when they walk.",
    "Penguins live in large colonies called rookeries.",
    "Penguins are social birds.",
    "Penguins have waterproof feathers.",
    "Penguins eat a range of fish and other sealife that they catch underwater.",
    "Penguins can drink sea water.",
    "Penguins can't fly.",
  ];

  const generateRandomFact = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomFact = penguinFacts[Math.floor(Math.random() * penguinFacts.length)];
        resolve(randomFact);
      }, 2);
    });
  };

  //adding a handleClick function
  const handleClick = async () => {
    const fact = await generateRandomFact();
    setFacts(fact);
  };

  return (
    <div className="PenguinTitle">
      <p>WELCOME TO THE WORLD OF PENGUINS!!</p>
      <img src="photo.jpg" alt="baby-penguin" width="500" height="300"></img>
      <div className="ButtonContainer">
      <button onClick={handleClick}>Generate Random Fact !</button>
    </div>
    <p>{facts}</p>
    </div>
  );
}

export default App;
