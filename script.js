function clearResult() {
    document.getElementById("result").value = "";
  }
  
  function deleteLastDigit() {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
  }
  
  function appendSymbol(symbol) {
    document.getElementById("result").value += symbol;
  }
  
  function calculate() {
    let result = document.getElementById("result").value;
    try {
      let answer = eval(result);
      document.getElementById("result").value = answer;
    } catch (error) {
      document.getElementById("result").value = "Error";
    }
  }