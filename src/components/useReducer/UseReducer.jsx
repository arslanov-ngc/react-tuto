import { useState, useReducer } from "react";
import Modal from "./Modal";

const defaultState = {
  people: [],
  isModalOpen: false,
  modalTxt: "",
};

const reducer = (state, action) => {
  if (action.type === "ADD") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalTxt: "New name added!",
    };
  }
  if (action.type === "NULL") {
    return {
      ...state,
      isModalOpen: true,
      modalTxt: "Please, enter something!",
    };
  }
  throw new Error("No matching action type!");
};

const UseReducer = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const submitHandler = (e) => {
    e.preventDefault();

    if (name) {
      const newName = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD", payload: newName });
    } else {
      dispatch({ type: "NULL" });
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal>{state.modalTxt}</Modal>}
      <form className="form" onSubmit={submitHandler}>
        <div className="form__control">
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit" className="btn">
          Add
        </button>
      </form>
      <div className="content flex">
        <div className="people__content">
          {state.people.map((person) => {
            return (
              <div className="person" key={person.id}>
                <span>{person.name}</span>
                <button className="remove">remove</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UseReducer;
