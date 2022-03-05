import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-name">
        <h2>{props.name}</h2>
      </div>
      <div className="expense-item-price">
        <h3>{props.price}</h3>
      </div>
    </div>
  );
}

export default ExpenseItem;
