import { useState } from "react";

const ShortCircuit = () => {
  const [showHide, setShowHide] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setShowHide(!showHide)}>
        Show&Hide
      </button>
      {showHide && <h1>Menu</h1>}
    </>
  );
};

export default ShortCircuit;
