import { useState } from "react";
import { data } from "../hooks/useState/data";

const PropsDrilling = () => {
  const [list, setList] = useState(data);

  const removePhone = (id) => {
    setList(list.filter((phone) => phone.id != id));
  };

  return (
    <>
      <h1>Props Drilling</h1>
      <div className="content flex">
        <PhonesList list={list} removePhone={removePhone} />
      </div>
    </>
  );
};

const PhonesList = ({ list, removePhone }) => {
  return (
    <div className="people__content">
      {list.map(({ id, model }) => {
        return <Phone key={id} id={id} model={model} removePhone={removePhone} />;
      })}
    </div>
  );
};

const Phone = ({ id, model, removePhone }) => {
  return (
    <div className="person">
      <span>{model}</span>
      <button className="btn" onClick={() => removePhone(id)}>
        remove
      </button>
    </div>
  );
};

export default PropsDrilling;
