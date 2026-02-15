import { clear, isOperation, resolveOperations, solve } from "./utils.js";

// common handler for all calculator values
export const handleCalculatorValue = (Calculator, model, result, val) => {

  if (
    val == "Escape" ||
    val == "Enter" ||
    val == "." ||
    val == "=" ||
    val == "c" ||
    val == "0" ||
    val == "1" ||
    val == "2" ||
    val == "3" ||
    val == "4" ||
    val == "5" ||
    val == "6" ||
    val == "7" ||
    val == "8" ||
    val == "9" ||
    val == "+" ||
    val == "-" ||
    val == "*" ||
    val == "/"
  ) {
    resolveOperations(Calculator, model, result, val);
  }

  if (val.length > 1 && val.match(/^\d+$/)) {
    Array.from(val).forEach((number) => {
      resolveOperations(Calculator, model, result, number);
    });
  }
};

// event handler for keydown and paste
export const handleKeydownAndPaste = (Calculator, model, result, e) => {
  let val = e.key || e.data;

  // get value from result if paste is used
  if (e.inputType === "insertFromPaste") {
    val = e.data;

    e.preventDefault();
  }

  // prevent spacebar when a calculator button is not selected
  if (e.key === " ") {
    return;
  }

  // prevent select key combinations
  if (e.ctrlKey || e.metaKey) {
    return;
  }

  handleCalculatorValue(Calculator, model, result, val);
};

// event handler for calculator buttons
export const handleCalculatorButtons = (Calculator, model, result, e, el) => {
  // handle only clicks without detail (0) that identify as a space key
  if (!e?.detail && e?.key !== " ") {
    return;
  }

  handleCalculatorValue(Calculator, model, result, el.value);
};
