import { useState } from "react";

const UseStateObj = () => {
  const [user, setUser] = useState({
    firstName: "John",
    secondName: "Doe",
    age: 18,
  });

  const changeUserAge = () => {
    setUser({ ...user, age: 19 });
  };

  return (
    <div className="user">
      <h3>
        {user.firstName} {user.secondName}
      </h3>
      <h4>Age: {user.age}</h4>
      <button className="user__btn" onClick={changeUserAge}>
        Change Age
      </button>
    </div>
  );
};

export default UseStateObj;
