const Test2 = (props) => {
  return (
    <div className="Test2">
      <h4>Sarlavha: {props.expense.expenseTitle}</h4>
      <h5>Narxi: {props.expense.expenseAmount}</h5>
      <h6>Sana: {props.expense.expenseDate.toLocaleDateString()}</h6>
    </div>
  );
};

export default Test2;
