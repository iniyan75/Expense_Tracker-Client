import { useEffect, useState } from 'react';
import './App.css'
import Expenses from './components/expense/expenses/expenses';
import Newexpense from './components/expense/new_expenses/newexpense';
  // import { getAllExpense, addexpense } from './api';
const DUMMY_DATA = [
  {
    id: 1,
    title: 'Groceries',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { id: 2, title: 'New Mobile', amount: 799.49, date: new Date(2020, 2, 12) },
  {
    id: 3,
    title: 'Car Repair',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 4,
    title: 'New work desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {

const [data,setdata]=useState([])

  
  //  const getexpense=()=>{
  //   fetch('http://localhost:3000/')
  //   .then(response => response.json())
  //   .then(expensedata=>setdata(expensedata.data))
  //  ;
  // }


const addexpense=async (expense)=>{
  fetch('http://localhost:3000/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(expense)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

}
  
  // useEffect(()=>{
  //   getexpense(setdata)
    
  
  //  },[])
   useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => setdata(data))
      .catch(error => console.error(error))
  }, []);
console.log(data)
   const add=(expense)=>{
    addexpense(expense)
    setdata((prev)=> ([...prev,expense]))
   }



  return (
    <div>
      <Newexpense add={add}/>
      <Expenses expenses={data}/>
      
    </div>
  )
}

export default App
