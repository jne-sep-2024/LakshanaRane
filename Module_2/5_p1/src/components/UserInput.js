import { useState } from "react";
const initialUserInput={
    'current-savings':10000,
        'yearly-contribution':1200,
        'expected-return':7,
        'duration':10,

}
const UserInput =(props)=>{

//current stateat evry instance(pointer):userInput
    const [userInput,setUserInput] = useState(initialUserInput);

    const submitHandler=(event)=>{
        event.preventDefault();
        console.log('SUBMIT');
        props.onCalculate(userInput);       //passing the current user input state to the calculate fucntion in app.js
    };

    const resetHandler=()=>{
        console.log('RESET');
        setUserInput(initialUserInput);
    };

    const inputChangeHandler=(input,value)=>{
        // console.log(input,value)
        //jab input change trigger hoga to setUserInput call hoga and then we want to change the state
        //also if kuch feilds unchanged h to wo data bhi lose naih karna ha
        setUserInput((prevInput)=>{
            return{
                ...prevInput,
                [input]:value,
            }
        }

        );
    };


return(

    <form className="form" onSubmit={submitHandler}>
    <div className="input-group">
      <p>
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input type="number" 
        onChange={(event)=>{inputChangeHandler('current-savings',event.target.value)}}
        value={userInput['current-savings']}

        id="current-savings" />
      </p>
      <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input type="number" 
        onChange={(event)=>{inputChangeHandler('yearly-contribution',event.target.value)}}
        value={userInput['yearly-contribution']}
        id="yearly-contribution" />
      </p>
    </div>
    <div className="input-group">
      <p>
        <label htmlFor="expected-return">
          Expected Interest (%, per year)
        </label>
        <input type="number" 
        onChange={(event)=>{inputChangeHandler('expected-return',event.target.value)}}
        value={userInput['expected-return']}
        id="expected-return" />
      </p>
      <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input type="number" 
                onChange={(event)=>{inputChangeHandler('duration',event.target.value)}}
    value={userInput['duration']}
        id="duration" />
      </p>
      
    </div>
    <p className="actions">
      <button 
      type="reset" 
      onClick={resetHandler}
      className="buttonAlt">
        Reset
      </button>
      <button 
      type="submit"
      className="button">
        Calculate
      </button>
    </p>
  </form>
)
};
 export default UserInput;