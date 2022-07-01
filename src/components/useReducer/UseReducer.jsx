import { useState, useReducer } from "react";

import Modal from "./Modal";

const reducer = (state, action) => {
  if (action.type === "Add_Item") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalTxt: "item added",
    };
  }
  if (action.type === "No_Value") {
    return {
      ...state,
      isModalOpen: true,
      modalTxt: "Please, fill input",
    };
  }
  throw new Error("Some error");
};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalTxt: "",
};

const UseReducer = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  console.log(state);
  console.log(dispatch);

  const submitHandler = (e) => {
    e.preventDefault();

    if (name) {
      const newItem = { id: new Date().getTime.toString(), name };
      dispatch({ type: "Add_Item", payload: newItem });
    } else {
      dispatch({ type: "No_Value" });
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal modalTxt={state.modalTxt} />}
      <form className="form" onSubmit={submitHandler}>
        <div className="form__control">
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
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
