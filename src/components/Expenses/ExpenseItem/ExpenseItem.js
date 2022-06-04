import React,{useState}  from "react";

import "./ExpenseItem.css";
import  ExpenseDate  from "../ExpenseDate/ExpenseDate";
import Card from "../../UI/Card/Card";

function ExpenseItem(props) {
  
  const [title,setTitle]=useState(props.title);

  const clickHandler =()=>{
    setTitle("updated");
    alert("tes");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">RS {props.amount}</div>      
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
