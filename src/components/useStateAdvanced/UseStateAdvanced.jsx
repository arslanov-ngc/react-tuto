import React, { useState } from "react";
import { data } from "./data";

import "./UseStateAdvanced.css";
import UseStateObj from "./UseStateObj";

const UseStateAdvanced = () => {
  // console.log(useState);
  // console.log(useState());
  // console.log(useState("Hii"));
  // console.log(useState("Hii1")[0]);
  // console.log(useState("Hii2")[1]);

  const [apple, setApple] = useState(data);

  const removeItem = (id) => {
    const newApple = apple.filter((model) => model.id != id);
    setApple(newApple);
  };

  return (
    <React.Fragment>
      <div className="items__group">
        <h3 className="items__title">Items</h3>
        <div className="items">
          {apple.map(({ id, model }) => {
            return (
              <div className="item" key={id}>
                <h3>{model}</h3>
                <button className="item__btn" onClick={() => removeItem(id)}>
                  Remove
                </button>
              </div>
            );
          })}
        </div>
        <button className="clr__btn" onClick={() => setApple([])}>
          Clear Items
        </button>
        <UseStateObj />
      </div>
    </React.Fragment>
  );
};

export default UseStateAdvanced;
