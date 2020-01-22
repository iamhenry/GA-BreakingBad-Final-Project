import React, { useEffect, useState } from "react";

import "./styles.css";
import { Link } from "react-router-dom";

function BBHome() {

  // const [state, dispatch] = useReducer(reducer, initialState);
  // TODO: Reducer
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://www.breakingbadapi.com/api/characters?limit=9"
    );

    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
    <>
      <ul>
        {items.map(item => (
          <Link to={`/BBHome/${item.char_id}`}>
            <li key={item.char_id} className="bbchar">
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
              {/* <p className="metadata">{item.nickname}</p> */}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default BBHome;
