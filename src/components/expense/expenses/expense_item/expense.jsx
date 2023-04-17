import { useState } from 'react'
import Dates from '../datecomponent/date'
import './expense.css'
export default function Expense (props) {

  const { date, title, amount } = props;
  
console.log(props)


  return (
    <>
      <div className="expense-item">
        
        <Dates  date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
        {/* <button onClick={update} >update</button> */}
      </div>

    </>
  )
}

