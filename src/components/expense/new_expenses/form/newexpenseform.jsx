
import { useState } from 'react'
import './newexpenseform.css'
export default function Newexpenseform(props){

    const {save}=props
const [title,settitle]=useState()
const [date,setdate]=useState()
const  [amount,setamount]=useState()


const submitform=(e)=>{
    e.preventDefault()
    const data={
        "title":title,
        "date":new Date(date),
        "amount":amount
    }
    save(data)
    console.log(data)
}


    return(
        <>
        <form onSubmit={submitform} action="">
                <div className='new-expense__controls'>
                    <div className='new-expense__control'><label htmlFor="title">Title</label>
                        <input value={title} name='title' type="text" id='title' onChange={(e)=>settitle(e.target.value)} /></div>
                    <div className='new-expense__control'><label htmlFor="amount">Amount</label>

                        <input value={amount} name='amount' type="number" id='amount' min="0" max="1000" onChange={(e)=>setamount(e.target.value)}  /></div>
                    <div className='new-expense__control'> <label  htmlFor="date">Date</label>

                        <input value={date} type="date" name="date" id="date" onChange={(e)=>setdate(e.target.value)}  /></div>



                </div>

                <div className='new-expense__actions'>
                    <button type='submit' >Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>

            </form>

        </>
    )
}