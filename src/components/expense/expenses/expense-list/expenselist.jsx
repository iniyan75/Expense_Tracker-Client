
import Expense from '../expense_item/expense';
import './expenselist.css'
export default function ExpenseList(props) {

    const { expenses = [] } = props;

if(expenses.length==0){
    return <h3>No expenses found</h3>
}

    return (
        <>
            <ul className='expenses-list'>


                {expenses.map((entry,i) => {
                    return (
                        <li key={entry.id||entry._id} >

                        
                        <Expense
                            title={entry.title}
                            amount={entry.amount}
                            date={entry.date}

                        />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}