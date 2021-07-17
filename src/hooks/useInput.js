import {useState} from 'react';

const useInput = (validateInput) =>{
    const [enteredValue,setEnteredValue] = useState('');
    const [isTouched,setIsTouched] = useState(false);
    const valueChangeHandler = (event) =>{
        setEnteredValue(event.target.value);
    }
    const BlurHandler = () =>{
        setIsTouched(true);
    }
    const reset = () =>{
        setEnteredValue('');
        setIsTouched(false)
    }
    const isValid = validateInput(enteredValue);
    const hasError = !isValid && isTouched;

    return{
        enteredValue,
        isValid,
        hasError,
        valueChangeHandler,
        BlurHandler,
        reset
    }
    
}
export default useInput;