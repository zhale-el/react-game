import React, { useState } from "react";
import "./App.css";
import cardImages from "./Data";
import SingleCard from "./components/SingleCard";

const App = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => {
        return Math.random() - 0.5;
      })
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffleCards);
    setTurns(0);
  };

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default App;
