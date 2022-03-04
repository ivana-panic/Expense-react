import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div className="expense-name">
        <h2>{props.name}</h2>
      </div>
      <div className="expense-item-value">
        <h2>{props.date.toISOString()}</h2>
      </div>
      <div className="expense-item-price">
        <h3>{props.price}</h3>
      </div>
    </div>
  );
}

export default ExpenseItem;
