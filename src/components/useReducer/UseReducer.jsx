import { useState, useReducer } from "react";
import {reducer} from "./reducer";
import Modal from "./Modal";

const defaultState = {
  people: [],
  isModalOpen: false,
  modalTxt: "",
};

const UseReducer = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const submitHandler = (e) => {
    e.preventDefault();

    if (name) {
      const newName = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_VALUE", payload: newName });
      setName("");
    } else {
      dispatch({ type: "EMPTY_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModalOpen && <Modal closeModal={closeModal}>{state.modalTxt}</Modal>}
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
                <button className="remove" onClick={() => dispatch({ type: "DELETE_VALUE", payload: person.id })}>
                  remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UseReducer;
