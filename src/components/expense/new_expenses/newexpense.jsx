import {nanoid} from 'nanoid'
import Newexpenseform from './form/newexpenseform'
import './newexpense.css'
export default function Newexpense(props) {
    
   const {add}=props;

    const save=(expense)=>{
        const  newexpense={

            id:nanoid(),
            ...expense

        }
        add(newexpense)

    }


    return (
        <>
        <div className='new-expense'>
        <Newexpenseform save={save}/>

        </div>
        </>
    )
}