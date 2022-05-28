import Card from "../Card/Card";
import ExpenseItem from "../ExpenseItemComponent/ExpenseItem";
import './ExpenseItems.css';

function ExpenseItems(props) {
  const expenses = props.expenses;
  return (
    <Card className="expenses">
      <ExpenseItem 
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>     

    </Card>
  );
}

// function getExpense(params) {
//     return(
//         <ExpenseItem title={params.title} amount={params.amount}  date={params.date} ></ExpenseItem>
//     );
// }

export default ExpenseItems;
