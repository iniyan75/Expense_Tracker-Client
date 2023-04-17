import ExpenseList from './expense-list/expenselist'
import './expenses.css'

export default function Expenses(props){
    const {expenses=[]}=props;
    console.log(expenses)
    return(
        <>
        <div className="expenses">
            
            <ExpenseList expenses={expenses}/>

        </div>


        </>
        )
}