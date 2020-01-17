import React, { useEffect, useState } from "react";

import "./styles.css";

//////////////// IMPORTANT API NOTE
// When ever there is an array '[]' that gets returned from an API
// you have to use iterate through the array in order to get the exact data point from
// that object
////////////////

function ItemDetails({ match }) {
  useEffect(() => {
    fetchItem();
    // console.log(match);
  }, []);

  const [item, setItem] = useState([]);
  // const [item, setItem] = useState(null);

  const fetchItem = async () => {
    const data = await fetch(
      `https://www.breakingbadapi.com/api/characters/${match.params.id}`
    );

    const item = await data.json();
    console.log(item);
    setItem(item);
  };

  return (
    <div>
      {item.map(user => (
        <>
          <img src={user.img} alt="" />
          <h1>{user.name}</h1>
          <p>{user.nickname}</p>
          <ul>
            <li>Status {user.status}</li>
            <li>Occupation {user.occupation.join(", ")}</li>
            <li>Seasons {user.appearance.join(", ")}</li>
          </ul>
        </>
      ))}
    </div>
  );
}

export default ItemDetails;
