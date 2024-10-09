import React, { useRef,useState } from 'react'
import classes from './MealItemForm.module.css';
import Input from '../UI/Input';


//parent component for <Input/>

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef=useRef();

  const onSubmitHandler=(event)=>{
    event.preventDefault();

    const enteredAmount=amountInputRef.current.value;
    console.log(enteredAmount)

    console.log(typeof amountInputRef.current.value)
    
    // console.log("in meanl",typeof enteredAmount )
    const enteredAmountNumber= +enteredAmount;
    console.log("enteredAmountNumber",enteredAmountNumber)
    console.log("enteredAmountNumber type",typeof enteredAmountNumber)


    // if(enteredAmountNumber<0 || enteredAmountNumber>10 || enteredAmountNumber.trim() === 0){
    //   setAmountIsValid(false);
    //   return;
    // }
    // amountInputRef.current.value="0";
  }
  console.log("hiiiii")


  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <Input
      ref={amountInputRef}
      label="Amount"
      input={{
        id:"amount_" + props.id,
        type:"number",
        min:"1",
        max:"10",
        step:"1",
      }}
     
        />
      <button type="submit" className={classes.button}>+ADD</button>
      {!amountIsValid && <p>Please enter valid amount (1-10).</p>}
    </form>
  )
}

export default MealItemForm