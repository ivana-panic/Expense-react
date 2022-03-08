import Expenses from "./components/Expenses/Expenses";

function App() {
  const expense = [
    {
      id: "e1",
      name: "Book",
      date: new Date(2021, 2, 15),
      price: "12e",
    },
    {
      id: "e2",
      name: "Phone",
      date: new Date(2021, 4, 19),
      price: "300e",
    },
    {
      id: "e3",
      name: "Pencil",
      date: new Date(2020, 9, 5),
      price: "5e",
    },
    {
      id: "e4",
      name: "Pants",
      date: new Date(2020, 12, 1),
      price: "26e",
    },
  ];
  return (
    <div className="App">
      <h1 className="expense-title">Your expense</h1>
      <Expenses items={expense}></Expenses>
    </div>
  );
}

export default App;
