import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { Subject } from 'rxjs';

import { environment } from 'src/environments/environment';

import { clear, isOperation } from './utils';

interface CalculatorNumbers {
  first: string;
  second: string;
}

export interface CalculatorModel {
  numbers: CalculatorNumbers;
  operation: string;
}

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container>
      <article>
        <h1>Calculator</h1>
        <dialog #dialog>
          <h1></h1>
          <form method="dialog">
            <button>OK</button>
          </form>
        </dialog>
        <div class="column">
          <div class="row">
            <input
              (keydown)="handleResultKeydown($event)"
              (beforeInput)="handleResultBeforeInput($event)"
              type="text"
              inputMode="none"
              id="result"
              #result
            />
            <input
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="c"
              #clear
            />
          </div>
          <div class="row">
            <input
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="1"
            />
            <input
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="2"
            />
            <input
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="3"
            />
            <input
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="/"
            />
          </div>
          <div class="row">
            <input
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="4"
            />
            <input
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="5"
            />
            <input
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="6"
            />
            <input
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="*"
            />
          </div>
          <div class="row">
            <input
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="7"
            />
            <input
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="8"
            />
            <input
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="9"
            />
            <input
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="-"
            />
          </div>
          <div class="row">
            <input
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="0"
            />
            <input
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="."
            />
            <input
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="="
            />
            <input
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="+"
            />
          </div>
        </div>
      </article>
    </ng-container>
  `,
  styles: [
    `
      :host {
        article {
          max-width: 60rem;
        }

        h1 {
          color: var(--x-postpress-h1-color, inherit);
          margin: var(--x-postpress-h1-margin, inherit);
          text-align: var(--x-postpress-h1-text-align, initial);

          font-size: larger;
          font-weight: bold;
        }
      }

      .blink {
        animation: blinker 1s linear infinite;
      }

      @keyframes blinker {
        50% {
          opacity: 0;
        }
      }

      .column {
        display: flex;
        flex-direction: column;
        max-width: 50rem;
        width: 100%;
      }

      .row {
        display: flex;
        flex-direction: row;
      }

      dialog {
        text-align: center;
      }

      button,
      input[type='button'] {
        background-color: darkblue;
        border-radius: 0.3125rem;
        border: 0.0625rem solid white;
        color: white;
        font-size: 3rem;
        height: 6rem;
        margin: 0;
        min-width: 4.0625rem;
        width: 100%;
      }

      button:active,
      button:hover,
      input[type='button']:active,
      input[type='button']:hover {
        background-color: darkslategray;
      }

      input[type='text'] {
        border-radius: 0.3125rem;
        border: 0.0625rem outset grey;
        font-family: monospace;
        font-size: 3.75rem;
        margin: 0.1875rem;
        min-width: 9.6875rem;
        padding: 0.5rem;
        width: 100%;
      }

      input[value='c'] {
        max-width: 25%;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CalculatorComponent implements OnInit, OnDestroy {
  private isBrowser: boolean;
  private isReady = new Subject<boolean>();
  private calculator = null; // define placeholder for instance of C# calculator

  public results = 'loading...';

  public model: CalculatorModel = {
    numbers: {
      first: '',
      second: '',
    },
    operation: '',
  };

  @ViewChild('result') result!: ElementRef;
  @ViewChild('dialog') dialog!: ElementRef;
  @ViewChild('clear') clear!: ElementRef;

  nativeElement!: HTMLElement;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    el: ElementRef
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      this.nativeElement = el.nativeElement;
      this.isReady.next(false);
      this.isReady.subscribe(() => this.isReadyHandler());
    }
  }

  handleKeys(event: any) {
    return this.handleKeydownAndPaste(
      this.calculator,
      this.model,
      this.result,
      event
    );
  }

  ngOnInit() {
    if (this.isBrowser) {
      let script = null;

      if (!this.document.querySelector('[data-dotnet-script]')) {
        script = this.document.createElement('script');
        script.setAttribute('src', environment.DOTNET_PATH);
        script.setAttribute('data-dotnet-script', 'true');

        this.document.body.appendChild(script);
      }

      const loadIt = () => {
        const dotnet = (window as unknown as Window & { runtime: any }).runtime
          .dotnet;
        dotnet.moduleConfig.configSrc =
          'assets/minimal-c-sharp-wasm/mono-config.json';

        const createRuntime = async () => await dotnet.create();
        const getAssemblyExports = async () => {
          const runtime = await createRuntime();
          const assemblyExports = await runtime.getAssemblyExports(
            runtime.getConfig().mainAssemblyName
          );

          return assemblyExports;
        };

        // set C# calculator
        getAssemblyExports().then((assemblyExports) => {
          this.calculator = assemblyExports.Calculator;
          this.isReady.next(true);
        });
      };

      if (script) {
        script.onload = loadIt;
      } else {
        loadIt();
      }

      this.nativeElement.addEventListener('keydown', (e: Event) => {
        this.handleKeydownAndPaste(this.calculator, this.model, this.result, e);
      });
    }
  }

  private handleCalculatorValue(
    calculator: any,
    model: CalculatorModel,
    result: HTMLInputElement,
    val: string
  ) {
    if (
      val == 'Escape' ||
      val == 'Enter' ||
      val == '.' ||
      val == '=' ||
      val == 'c' ||
      val == '0' ||
      val == '1' ||
      val == '2' ||
      val == '3' ||
      val == '4' ||
      val == '5' ||
      val == '6' ||
      val == '7' ||
      val == '8' ||
      val == '9' ||
      val == '+' ||
      val == '-' ||
      val == '*' ||
      val == '/'
    ) {
      this.resolveOperations(calculator, model, result, val);
    }

    if (val.length > 1 && val.match(/^\d+$/)) {
      Array.from(val).forEach((number) => {
        this.resolveOperations(calculator, model, result, number);
      });
    }
  }

  handleResultKeydown(e: any) {
    // prevent modifying the results directly
    if (e.key !== 'Tab') {
      e.preventDefault();
    }
  }

  handleResultBeforeInput(e: any) {
    // check insertFromPaste using beforeinput
    if (e.inputType === 'insertFromPaste') {
      this.handleKeydownAndPaste(this.calculator, this.model, this.result, e);
    }
  }

  // event handler for keydown and paste
  handleKeydownAndPaste(
    calculator: any,
    model: CalculatorModel,
    result: ElementRef,
    e: InputEvent | KeyboardEvent | any
  ) {
    let val = e.key || e.data;
    // get value from result if paste is used
    if (e.inputType === 'insertFromPaste') {
      val = e.data;

      e.preventDefault();
    }

    // prevent spacebar when a calculator button is not selected
    if (e.key === ' ') {
      return;
    }

    // prevent select key combinations
    if (e.ctrlKey || e.metaKey) {
      return;
    }

    this.handleCalculatorValue(calculator, model, result.nativeElement, val);
  }

  // event handler for calculator buttons
  handleCalculatorButtons(
    calculator: any,
    model: CalculatorModel,
    result: HTMLInputElement,
    e: any,
    el: any
  ) {
    // handle only clicks without detail (0) that identify as a space key
    if (!e?.detail && e?.key !== ' ') {
      return;
    }

    this.handleCalculatorValue(calculator, model, result, el.value);
  }

  // determine next steps for the calculator
  private resolveOperations(
    calculator: any,
    model: CalculatorModel,
    result: HTMLInputElement,
    val: any
  ) {
    const isOperationValue = isOperation(val);

    // prevent leading with an operation
    if (isOperationValue && !model.numbers.first) {
      return;
    }

    // prevent two decimals
    if (result.value.includes('.') && val === '.') {
      return;
    }

    // handle "c" key and escape key
    if (val === 'c' || val === 'Escape') {
      clear(model, result);

      return;
    }

    // handle equals and enter key
    if (val === '=' || val === 'Enter') {
      // do not solve when the dialog is open
      if (this.dialog.nativeElement.getAttribute('open')) {
        return;
      }

      this.solve(calculator, model, result);

      return;
    }

    // handle "Error" and "NaN" value
    if (result.value === 'Error' || result.value === 'NaN') {
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
    if (model.operation === '/' && result.value.length === 9) {
      return;
    }

    // do not allow a number with length longer than sixteen for number2
    if (result.value.length === 16) {
      return;
    }

    // handle appending to number2
    model.numbers.second += val;
    result.value += val;
  }

  // solve the stored equation and set the result
  solve(calculator: any, model: CalculatorModel, result: HTMLInputElement) {
    let solution = null;

    const number1 = model.numbers.first;
    const number2 = model.numbers.second;

    if (calculator === null) {
      this.openDialog('Required dependencies are still loading...');

      setTimeout(() => {
        (
          this.dialog.nativeElement.querySelector('button') as HTMLElement
        ).focus();
      }, 0);

      return;
    }

    try {
      // determine operation
      if (model.operation === '+') {
        solution = calculator.add(number1, number2);
      }

      if (model.operation === '-') {
        solution = calculator.subtract(number1, number2);
      }

      if (model.operation === '*') {
        solution = calculator.multiply(number1, number2);
      }

      if (model.operation === '/') {
        solution = calculator.divide(number1, number2);
      }
    } catch (error) {
      if (String(error).includes('Attempted to divide by zero')) {
        result.value = 'NaN';

        // clear just calculator model
        clear(model, result, true);

        return;
      }

      result.value = 'Error';

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
      if (answer.includes('e-') || answer.includes('e+')) {
        result.value = 'Error';

        // clear just calculator model
        clear(model, result, true);

        return;
      }

      // trim decimals
      if (answer.includes('.') && answer.length > 16) {
        answer = answer.slice(0, 16);
      }

      // error on length longer than sixteen
      if (answer.length > 16) {
        result.value = 'Error';

        // clear just calculator model
        clear(model, result, true);

        return;
      }

      // set solution as first number
      model.numbers.first = answer;
      result.value = answer;
    }
  }
  closeDialog() {
    this.dialog.nativeElement.removeAttribute('open');
  }

  openDialog(message: string | null = null) {
    this.dialog.nativeElement.setAttribute('open', 'open');
    (this.dialog.nativeElement.querySelector('h1') as HTMLElement).textContent =
      message;
  }

  buttonHandler(event: Event) {
    this.handleCalculatorButtons(
      this.calculator,
      this.model,
      this.result.nativeElement,
      event,
      event.target
    );
  }

  isReadyHandler() {
    // clear the calculator on first load
    clear(this.model, this.result.nativeElement);

    // focus the calculator input
    this.result.nativeElement.focus();
  }

  ngOnDestroy(): void {
    this.isReady?.unsubscribe();
  }
}
