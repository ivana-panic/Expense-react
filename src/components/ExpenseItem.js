import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-name">
        <h2>{props.name}</h2>
      </div>
      <div className="expense-item-price">
        <h3>{props.price}</h3>
      </div>
    </Card>
  );
}

export default ExpenseItem;
