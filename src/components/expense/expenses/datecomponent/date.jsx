import './date.css'
export default function Dates(props){

    const { date } = props
    const d=new Date(date);
  
  const month = d.toLocaleString('en-us', { month: 'long' })
  const day = d.toLocaleString('en-us', { day: 'numeric' })
  const year = d.getFullYear()
    return(
        <>
        <div className="expense-date">
          <div className="expense-date__month">{month}</div>
          <div className="expense-date__day">
            {day}

          </div>
          <div className="expense-date__year">
            {year}
{/*  */}
          </div>


        </div>
        
        </>
    )
}