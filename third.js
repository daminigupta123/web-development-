  let display = document.getElementById('display');
  function clearDisplay() {
      display.textContent = '0';
  }
  function appendNumber(number) {
      if (display.textContent === '0') {
          display.textContent = number;
      } else {
          display.textContent += number;
      }
  }
  function appendOperator(operator) {
      const lastChar = display.textContent.slice(-1);
      if (['+', '-', '*', '/'].includes(lastChar)) {
          return;  // Prevent multiple operators in a row
      }
      display.textContent += operator;
  }
  function calculateResult() {
      try {
          display.textContent = eval(display.textContent);
      } catch (error) {
          display.textContent = 'Error';
      }
  }

