const Test2 = (props) => {
  const year = props.expense.expenseDate.getFullYear(),
    month = props.expense.expenseDate.toLocaleString("en-Us", { month: "long" }),
    day = props.expense.expenseDate.getDate();
  return (
    <div className="Test2">
      <h4>Sarlavha: {props.expense.expenseTitle}</h4>
      <h5>Narxi: {props.expense.expenseAmount}</h5>
      <h6>
        Sana: {day}-{month}, {year}
      </h6>
    </div>
  );
};

export default Test2;

