import Test2 from "./test2";

function Test() {
  const expenses = [
    {
      expenseDate: new Date(2022, 6, 19),
      expenseTitle: "ReactJS kursi",
      expenseAmount: 325000,
    },
    {
      expenseDate: new Date(2022, 7, 19),
      expenseTitle: "NodeJS kursi",
      expenseAmount: 315000,
    },
    {
      expenseDate: new Date(2022, 8, 19),
      expenseTitle: "VueJS kursi",
      expenseAmount: 300000,
    },
    {
      expenseDate: new Date(2022, 9, 19),
      expenseTitle: "AngularJS kursi",
      expenseAmount: 300000,
    },
    {
      expenseDate: new Date(2022, 10, 19),
      expenseTitle: "TensorflowJS kursi",
      expenseAmount: 250000,
    },
  ];
  return (
    <div className="Test">
      {expenses.map((expense) => {
        return <Test2 expense={expense} />;
      })}
    </div>
  );
}

export default Test;
