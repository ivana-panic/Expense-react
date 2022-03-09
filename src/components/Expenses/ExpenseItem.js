import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [name, setName] = useState(props.name);

  const clickHandler = () => {
    setName("Update");
    console.log(name);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-name">
        <h2>{name}</h2>
      </div>
      <div className="expense-item-price">
        <h3>{props.price}</h3>
      </div>
      <button onClick={clickHandler}>Change name</button>
    </Card>
  );
};

export default ExpenseItem;
