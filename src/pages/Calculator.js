//citations: https://www.w3schools.com/css/
//citations: https://react.dev/learn
//citations: https://legacy.reactjs.org/docs/getting-started.html
import React from 'react'




//main react component (the calculator)
//assign CalculatorButton a property called value and set it to the numbers for the calculator
const Calculator= () => {
    // State to manage calculator display and calculations
    const [calculate, setCalculator] = React.useState({
      current: "0", // Current input or calculated value
      total: "0", // Total accumulated value
      isInitial: true, // Tracks if the calculator is in an initial state
      chainOp: "" // Operator for the next operation
    }); 
    
    
    //updates the state of the display to show whatever number is being pressed through useState and getNumber function
    //handleNumebr function called during OnClick events for numbers

  // Function to take care of numeric button clicks  
  function getNumber(value) {
    let newValue = value; //variable that calculates new string (display)
    if (!calculate.isInitial){ //if calculate is not initial state then concatenate
      newValue = calculate.current + value; //current value and append onto the value
    }
    // Update the calculator state with the new value
    setCalculator({current: newValue, total: calculate.total, isInitial: false, chainOp: calculate.chainOp}); //set current property to new value 
  }

  // Function to take care of operator button clicks
  function getOperator(value) {
    // Perform the calculation and update the calculator state
    const total = doCalculation();
      setCalculator({current: total.toString(), total: total.toString(), isInitial: true, chainOp: value});
  }

   // Function to perform calculations based on the current operator
  function doCalculation(){
    let total = parseFloat(calculate.total)
    const currentNumber = parseFloat(calculate.current);
    switch(calculate.chainOp){
      case "+":
        total += parseFloat(calculate.current);
        break;
      case '-':
        total -= parseFloat(calculate.current);
        break;
      case '*':
        total *= parseFloat(calculate.current);
        break;
        case "/":

          if (currentNumber === 0) {
            alert("Error: Dividing by Zero is Undefined");
          } else {
            total /= currentNumber;
          }
        break;
      default:
        total = parseFloat(calculate.current)
    }
    return total;
  }

  // Function to render the current display value
  function showDisplay() {
    return calculate.current
  }

  // Function to take care of the clear button click (resets the calculator)
  function getClear(){
    setCalculator({
      current: "0",
      total: "0",
      isInitial: true,
      chainOp: ""
    });
  }


  // JSX for the Calculator component HTML tags, etc.
  return (
    <div className="calculator">
      <div className="display">{showDisplay()}</div>
      <CalculatorButton className ="button" value="7" onClick={getNumber}/> 
      <CalculatorButton className ="button" value="8" onClick={getNumber}/>
      <CalculatorButton className ="button" value="9" onClick={getNumber}/>
      <CalculatorButton className ="operator" onClick={getOperator} value="/"/> 
      <CalculatorButton className ="button" value="4" onClick={getNumber}/>
      <CalculatorButton className ="button" value="5" onClick={getNumber}/>
      <CalculatorButton className ="button" value="6" onClick={getNumber}/>
      <CalculatorButton className ="operator" onClick={getOperator} value="*"/>
      <CalculatorButton className ="button" value="1" onClick={getNumber}/>
      <CalculatorButton className ="button" value="2" onClick={getNumber}/>
      <CalculatorButton className ="button" value="3" onClick={getNumber}/>
      <CalculatorButton className ="operator" onClick={getOperator} value="-"/>
      <CalculatorButton className ="button" value="C" onClick={getClear} />
      <CalculatorButton className ="button" value="0" onClick={getNumber}/>
      <CalculatorButton className ="operator" value="=" onClick={getOperator}/>
      <CalculatorButton className ="operator" onClick={getOperator} value="+"/>
      </div>   
      
    
  )
  

}


//child component to output buttons using props (allows it to use the className, value, onclicks, etc)
//pass parameter through callback function for onClicks
function CalculatorButton(props) {
  return <button className={props.className} onClick={() => {props.onClick(props.value)}}>{props.value}</button>
}

export default Calculator


