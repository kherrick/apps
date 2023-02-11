import { CalculatorModel } from './x-calculator.component';

// clear the display and calculator model
export const clear = (
  model: CalculatorModel,
  result: HTMLInputElement,
  clearModelOnly = false
) => {
  model.numbers.first = '';
  model.numbers.second = '';
  model.operation = '';

  if (clearModelOnly) {
    return;
  }

  result.value = '';
};

// regex used to determine if the button is a calculator operation
export const isOperation = (val: string) => val.match(/[+\-*/]/) !== null;
