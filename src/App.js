import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      id: "e1",
      name: "book",
      date: new Date(2021, 2, 15),
      price: "12e",
    },
    {
      id: "e2",
      name: "phone",
      date: new Date(2021, 4, 19),
      price: "300e",
    },
    {
      id: "e3",
      name: "pencil",
      date: new Date(2020, 9, 5),
      price: "5e",
    },
    {
      id: "e4",
      name: "pants",
      date: new Date(2020, 12, 1),
      price: "26e",
    },
  ];
  return (
    <div className="App">
      <h1 className="expense-title">Your expense</h1>
      <ExpenseItem
        name={expense[0].name}
        date={expense[0].date}
        price={expense[0].price}
      ></ExpenseItem>
      <ExpenseItem
        name={expense[1].name}
        date={expense[1].date}
        price={expense[1].price}
      ></ExpenseItem>
      <ExpenseItem
        name={expense[2].name}
        date={expense[2].date}
        price={expense[2].price}
      ></ExpenseItem>
      <ExpenseItem
        name={expense[3].name}
        date={expense[3].date}
        price={expense[3].price}
      ></ExpenseItem>
    </div>
  );
}

export default App;
