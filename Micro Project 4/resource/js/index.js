// calculator

let displayScreen = document.getElementById('displayScreen');
let currentScreenValue = '';

const addFunction = () => {
    // Retrieve the values from input fields or variables
    // Perform addition logic
    // Display or store the result
  };
  
  const subtractFunction = () => {
    // Retrieve the values from input fields or variables
    // Perform subtraction logic
    // Display or store the result
  };
  
  const multiplyFunction = () => {
    // Retrieve the values from input fields or variables
    // Perform multiplication logic
    // Display or store the result
  };
  
  const divideFunction = () => {
    // Retrieve the values from input fields or variables
    // Perform division logic
    // Display or store the result
  };
  
  const resetFunction = () => {
    // Reset the calculator to initial state
  };
  
  const equalsFunction = () => {
    // Retrieve the values from input fields or variables
    // Perform calculation based on the selected operator (+, -, *, /)
    // Display or store the result
  };
  
  function display(value){
    currentScreenValue += value;
    displayScreen.value +=currentScreenValue;
  }