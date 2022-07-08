import { useState, useEffect } from "react";

const UseEffectCleanUp = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const resize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resize);
    console.log("Window resized!");
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <h1>Window Size</h1>
      <h3>{windowSize}</h3>
    </>
  );
};

export default UseEffectCleanUp;
