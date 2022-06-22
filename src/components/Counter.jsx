import { useState } from "react";

const Counter = () => {
  const [amount, setAmount] = useState(0);

  const incrAmountHandler = () => {
    setAmount(amount + 1);
  };

  const decrAmountHandler = () => {
    setAmount(amount - 1);
  };

  const resetAmountHandler = () => {
    setAmount(0);
  };

  return (
    <>
      <div className="counter flex__group">
        <button className="btn" onClick={decrAmountHandler}>
          Decr Amount
        </button>
        <span>{amount}</span>
        <button className="btn" onClick={incrAmountHandler}>
          Incr Amount
        </button>
      </div>
      <button className="btn" onClick={resetAmountHandler}>
        Reset Amount
      </button>
    </>
  );
};

export default Counter;
