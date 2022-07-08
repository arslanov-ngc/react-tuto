import { useState, useEffect } from "react";

const UseEffectBasic = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("UseEffect called!");
    if (value >= 5) {
      document.title = value;
    }
  }, [value]);

  console.log("Component Rendered");

  return (
    <>
      <h3>{value}</h3>
      <button onClick={() => setValue(value + 1)}>Click</button>
    </>
  );
};

export default UseEffectBasic;
