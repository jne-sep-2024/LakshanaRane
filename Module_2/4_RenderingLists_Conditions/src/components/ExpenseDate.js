import './ExpenseDate.css';


function ExpenseDate(props){

    const validDate= props.date instanceof Date ? props.date:new Date(props.date);

    if(isNaN(validDate)){
        return(<div>Invalid date</div>)
    }
    const month=validDate.toLocaleString('en-US',{month:'long'});
    const day=validDate.toLocaleString('en-US',{day:'2-digit'});
    const year=validDate.getFullYear();

    return(
         <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div> 
         </div>
    )

}
export default ExpenseDate;