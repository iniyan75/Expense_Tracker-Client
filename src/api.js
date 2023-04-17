export const getAllExpense=(fn)=>
{
    fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(expensedata=>fn(expensedata.data))
  
}

export const addexpense=(postData={},callback)=>
{
    fetch('http://localhost:3000/add',
    {
        method:"POST",
        headers:{
            "Content-type":"application/json",
        },
        body:JSON.stringify(postData)
    })
    .then((response)=>response.json())
    .then((data)=>{callback && callback();});
}
