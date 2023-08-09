// calculator

let displayScreen = document.getElementById('displayScreen');
let currentScreenValue = '';

  
  const equalsFunction = () => {
    try{
        currentScreenValue = eval(currentScreenValue);
        displayScreen.value = currentScreenValue;
    }catch(error){
        displayScreen.value = "Error...";
    }
  };
  
  function display(value){
    currentScreenValue += value;
    displayScreen.value = currentScreenValue;
  };

  function delFunction(){
    currentScreenValue = currentScreenValue.slice(0,-1);
    displayScreen.value = currentScreenValue;
  };

  function resetFunction(){
    currentScreenValue = '';
    displayScreen.value = currentScreenValue;
  }