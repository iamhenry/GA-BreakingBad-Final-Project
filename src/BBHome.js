import React, { useEffect, useState } from "react";

import "./styles.css";
import { Link } from "react-router-dom";

function reducer(prevState, { action, payload }) {
  console.log(prevState);
  console.log(payload);
  switch (action) {
    case "setItems":
      const newState = { ...prevState };
      newState.items = payload;
      return newState;
    default:
      return prevState;
  }
}

function BBHome() {
  const [state, dispatch] = React.useReducer(reducer, {
    items: []
  });

  React.useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://www.breakingbadapi.com/api/characters?limit=9`
      );
      const incomingData = await response.json();
      console.log(incomingData);
      dispatch({ action: "setItems", payload: incomingData });
    })();
  });

  return (
    <>
      <ul>
        {state.items.map(item => (
          <Link to={`/BBHome/${item.char_id}`}>
            <li key={item.char_id} className="bbchar">
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default BBHome;
