import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        name={props.items[0].name}
        date={props.items[0].date}
        price={props.items[0].price}
      ></ExpenseItem>
      <ExpenseItem
        name={props.items[1].name}
        date={props.items[1].date}
        price={props.items[1].price}
      ></ExpenseItem>
      <ExpenseItem
        name={props.items[2].name}
        date={props.items[2].date}
        price={props.items[2].price}
      ></ExpenseItem>
      <ExpenseItem
        name={props.items[3].name}
        date={props.items[3].date}
        price={props.items[3].price}
      ></ExpenseItem>
    </Card>
  );
};

export default Expenses;
