import { useState, useEffect } from "react";
import Modal from "./Modal";

const TestUseState = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setShowModal(false);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName("");
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal modalTxt={state.modalContent} />}
      <form className="form" onSubmit={handleSubmit}>
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
          {people.map((person) => {
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

export default TestUseState;
