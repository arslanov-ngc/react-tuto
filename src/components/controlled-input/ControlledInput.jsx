import { useState } from "react";

const ControlledInput = () => {
  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [people, setPeople] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (name && email) {
      const person = {
        id: new Date().getTime().toString(),
        name,
        email,
      };

      setPeople((people) => {
        return [...people, person];
      });

      setName("");
      setEmail("");
    } else {
      alert("Please fill inputs!");
    }
  };

  const removeHandler = (id) => {
    const filteredPeople = people.filter((person) => person.id != id);
    setPeople(filteredPeople);
  };

  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <h1 className="title">People</h1>
        <div className="form__control">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form__control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">
          Add
        </button>
      </form>
      {people.length ? (
        <div className="people">
          <div className="people__header">
            <span>ID</span>
            <span>Name</span>
            <span>Email</span>
            <span>Remove</span>
          </div>
          <div className="people__content">
            {people.map(({ id, name, email }, i) => {
              i++;
              return (
                <div className="person" key={id}>
                  <span>{i}</span>
                  <span>{name.toUpperCase()}</span>
                  <span>{email}</span>
                  <button className="remove" onClick={() => removeHandler(id)}>
                    x
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <h1 className="badMsg">No any person yet (</h1>
      )}
    </>
  );
};

export default ControlledInput;
