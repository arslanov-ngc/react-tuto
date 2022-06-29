import { useState, useEffect, useRef } from "react";

const UseRefBasic = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const name = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name.current.value);
  };

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <div className="form__control">
          <label>Name</label>
          <input type="text" ref={name} />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      <div className="form__control">
        <label>Input</label>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <label>Count: {count.current}</label>
      </div>
    </>
  );
};

export default UseRefBasic;
