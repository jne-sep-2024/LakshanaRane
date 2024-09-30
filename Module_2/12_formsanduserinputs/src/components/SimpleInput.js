import { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouch] = useState(false);
  const [formIsValid,setFormIsValid]=useState(false);


  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid= !enteredNameIsValid  && enteredNameTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouch(true);
    //adding basic validation
    
    if(!enteredNameIsValid){
      return;
    }
    //if condition is passed that means it is validated and evrthing is ok

    console.log(enteredName);
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    setEnteredName("");
    setEnteredNameTouch(false)
  };

  useEffect(() => {
    setFormIsValid(enteredNameIsValid);
    // if (enteredNameIsValid) {
    //   console.log("name is valid");
    //   setFormIsValid(true);
    // }else{
    //    setFormIsValid(false)
    // }
  }, [enteredNameIsValid]);

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          // ref={nameInputRef}
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        { nameInputIsInvalid && (
          <p className="error-text">Name must not be empty..</p>
        )}
      </div>
      <div className="form-actions">
        <button className="button" disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
