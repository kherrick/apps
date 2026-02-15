// toggle dialog
const dialog = document.querySelector("dialog");
export const closeDialog = () => dialog.removeAttribute("open");
export const openDialog = (message = null) => {
  dialog.setAttribute("open", "open");
  dialog.querySelector("h1").textContent = message;
};

// clear the display and calculator model
export const clear = (model, result, clearModelOnly = false) => {
  model.numbers.first = "";
  model.numbers.second = "";
  model.operation = "";

  if (clearModelOnly) {
    return;
  }

  result.value = "";
};

// regex used to determine if the button is a calculator operation
export const isOperation = (val) => val.match(/[+\-*/]/) !== null;

// determine next steps for the calculator
export const resolveOperations = (Calculator, model, result, val) => {
  const isOperationValue = isOperation(val);

  // prevent leading with an operation
  if (isOperationValue && !model.numbers.first) {
    return;
  }

  // prevent two decimals
  if (result.value.includes(".") && val === ".") {
    return;
  }

  // handle "c" key and escape key
  if (val === "c" || val === "Escape") {
    clear(model, result);

    return;
  }

  // handle equals and enter key
  if (val === "=" || val === "Enter") {
    // do not solve when the dialog is open
    if (dialog.getAttribute("open")) {
      return;
    }

    solve(Calculator, model, result);

    return;
  }

  // handle "Error" and "NaN" value
  if (result.value === "Error" || result.value === "NaN") {
    clear(model, result);
  }

  // handle operation and number1
  if (!model.operation) {
    // handle operation
    if (isOperationValue) {
      model.operation = val;
      result.value = val;

      return;
    }

    // do not allow a number with length longer than sixteen for number1
    if (result.value.length === 16) {
      return;
    }

    // handle number1
    model.numbers.first += val;
    result.value += val;

    return;
  } else {
    // prevent changing operation before solving
    if (isOperationValue) {
      return;
    }
  }

  // handle first time seeing number2
  if (!model.numbers.second) {
    model.numbers.second = val;
    result.value = val;

    return;
  }

  // do not allow to divide by more than a number with length of nine
  if (model.operation === "/" && result.value.length === 9) {
    return;
  }

  // do not allow a number with length longer than sixteen for number2
  if (result.value.length === 16) {
    return;
  }

  // handle appending to number2
  model.numbers.second += val;
  result.value += val;
};

// solve the stored equation and set the result
export const solve = (Calculator, model, result) => {
  let solution = null;

  const number1 = model.numbers.first;
  const number2 = model.numbers.second;

  if (Calculator === null) {
    openDialog("Required dependencies are still loading...");

    setTimeout(() => {
      dialog.querySelector("button").focus();
    }, 0);

    return;
  }

  try {
    // determine operation
    if (model.operation === "+") {
      solution = Calculator.add(number1, number2);
    }

    if (model.operation === "-") {
      solution = Calculator.subtract(number1, number2);
    }

    if (model.operation === "*") {
      solution = Calculator.multiply(number1, number2);
    }

    if (model.operation === "/") {
      solution = Calculator.divide(number1, number2);
    }
  } catch (error) {
    if (String(error).includes("Attempted to divide by zero")) {
      result.value = "NaN";

      // clear just calculator model
      clear(model, result, true);

      return;
    }

    result.value = "Error";

    // clear just calculator model
    clear(model, result, true);
  }

  // try to display the solution
  if (solution !== null) {
    // clear display and model
    clear(model, result);

    // trim trailing 0's
    let answer = parseFloat(solution).toString();

    // error using scientific notation
    if (answer.includes("e-") || answer.includes("e+")) {
      result.value = "Error";

      // clear just calculator model
      clear(model, result, true);

      return;
    }

    // trim decimals
    if (answer.includes(".") && answer.length > 16) {
      answer = answer.slice(0, 16);
    }

    // error on length longer than sixteen
    if (answer.length > 16) {
      result.value = "Error";

      // clear just calculator model
      clear(model, result, true);

      return;
    }

    // set solution as first number
    model.numbers.first = answer;
    result.value = answer;
  }
};
