import React, { useState, useContext } from "react";
import { data } from "../useState/data";

const PhoneContext = React.createContext();
const ContextAPI = () => {
  const [list, setList] = useState(data);

  const removePhone = (id) => {
    setList(list.filter((phone) => phone.id != id));
  };

  return (
    <PhoneContext.Provider value={{ list, removePhone }}>
      <h1>Context API</h1>
      <div className="content flex">
        <PhonesList />
      </div>
    </PhoneContext.Provider>
  );
};

const PhonesList = () => {
  const data = useContext(PhoneContext);
  return (
    <div className="people__content">
      {data.list.map((phone) => {
        return <Phone key={phone.id} {...phone} />;
      })}
    </div>
  );
};

const Phone = ({ id, model }) => {
  const { removePhone } = useContext(PhoneContext);
  return (
    <div className="person">
      <span>{model}</span>
      <button className="btn" onClick={() => removePhone(id)}>
        remove
      </button>
    </div>
  );
};

export default ContextAPI;
