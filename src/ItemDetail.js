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
    <div className="char-card">
      {item.map(user => (
        <>
          <div className="card-img">
            <img src={user.img} alt="" />
          </div>
          <div className="card-content">
            <h1>{user.name}</h1>
            <p>Nickname: {user.nickname}</p>
            <ul>
              <li>
                <strong>Status</strong> {user.status}
              </li>
              <li>
                <strong>Occupation</strong> {user.occupation.join(", ")}
              </li>
              <li>
                <strong>Seasons</strong> {user.appearance.join(", ")}
              </li>
            </ul>
          </div>
        </>
      ))}
    </div>
  );
}

export default ItemDetails;
