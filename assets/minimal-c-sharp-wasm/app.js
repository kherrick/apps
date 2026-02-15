import { clear } from "./utils.js";
import { getAssemblyExports } from "./main.js";
import {
  handleCalculatorButtons,
  handleCalculatorValue,
  handleKeydownAndPaste,
} from "./eventHandlers.js";

// result element
const result = document.getElementById("result");

// setup model for calculator
const model = {
  numbers: {
    first: "",
    second: "",
  },
  operation: "",
};

// define placeholder for instance of C# calculator
let Calculator = null;

// set C# calculator
getAssemblyExports().then((assemblyExports) => {
  Calculator = assemblyExports.Calculator;
});

// clear the calculator on first load
clear(model, result);

// setup event handlers for paste and keydown
document.body.addEventListener("keydown", (e) =>
  handleKeydownAndPaste(Calculator, model, result, e)
);
result.addEventListener("keydown", (e) => {
  // prevent modifying the results directly
  if (e.key !== "Tab") {
    e.preventDefault();
  }
});
result.addEventListener("beforeinput", (e) => {
  // check insertFromPaste using beforeinput
  if (e.inputType === "insertFromPaste") {
    handleKeydownAndPaste(Calculator, model, result, e);
  }
});

// setup event handlers for clicking buttons
document.querySelectorAll("input[type=button]").forEach((button) => {
  // need both click and keydown to differentiate between space and enter
  button.addEventListener("click", (e) =>
    handleCalculatorButtons(Calculator, model, result, e, button)
  );
  button.addEventListener("keydown", (e) =>
    handleCalculatorButtons(Calculator, model, result, e, button)
  );
});

// focus clear button
document.querySelector("[value='c']").focus();
