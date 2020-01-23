import React from "react";

function reducer(prevState, { action, payload }) {
  console.log(prevState);
  switch (action) {
    case "setItems":
      const newState = { ...prevState };
      newState.items = payload;
      return newState;
    default:
      return prevState;
  }
}

const [state, dispatch] = React.useReducer(reducer, {
  items: []  
});

React.useEffect(() => {
  (async () => {
    const response = await fetch(
      `https://www.breakingbadapi.com/api/characters?limit=9`
    );
    const incomingData = await response.json();
    dispatch({ action: "setItems", payload: incomingData.file });
  })();
});
