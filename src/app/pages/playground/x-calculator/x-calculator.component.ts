import { isPlatformBrowser } from '@angular/common';

import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
  ViewEncapsulation,
  inject,
  DOCUMENT,
  ChangeDetectorRef,
} from '@angular/core';

import { Subject, Subscription } from 'rxjs';

import { XDialogService } from '../../../../app/shell/x-dialog/x-dialog.service';
import { environment } from '../../../../environments/environment';

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
  selector: 'x-calculator',
  imports: [],
  template: `
    <div calculator-container>
      <section>
        <header>
          <h1>&lt;x-calculator&gt;</h1>
          <p>
            An experiment with Wasm using
            <a
              href="https://karlherrick.com/2022/11/27/c-sharp-in-the-browser-without-blazor/"
              >C# in the browser without the Blazor framework</a
            >
          </p>
        </header>
      </section>
      <section x-section>
        <div class="column">
          <div class="row">
            <label class="text-field outlined">
              <input
                (keydown)="handleResultKeydown($event)"
                (beforeInput)="handleResultBeforeInput($event)"
                type="text"
                inputMode="none"
                id="result"
                #result
              />
              <span>Calculator</span>
            </label>
            <button
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="c"
              #clear
            >
              c
            </button>
          </div>
          <div class="row">
            <button
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="1"
            >
              1
            </button>
            <button
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="2"
            >
              2
            </button>
            <button
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="3"
            >
              3
            </button>
            <button
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="/"
            >
              /
            </button>
          </div>
          <div class="row">
            <button
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="4"
            >
              4
            </button>
            <button
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="5"
            >
              5
            </button>
            <button
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="6"
            >
              6
            </button>
            <button
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="*"
            >
              *
            </button>
          </div>
          <div class="row">
            <button
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="7"
            >
              7
            </button>
            <button
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="8"
            >
              8
            </button>
            <button
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="9"
            >
              9
            </button>
            <button
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="-"
            >
              -
            </button>
          </div>
          <div class="row">
            <button
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="0"
            >
              0
            </button>
            <button
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="."
            >
              .
            </button>
            <button
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="="
            >
              =
            </button>
            <button
              type="button"
              (click)="buttonHandler($event)"
              (keydown)="buttonHandler($event)"
              value="+"
            >
              +
            </button>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      @use 'material-design-lite/css/components/button/style.css' as button-style;
      @use 'material-design-lite/css/components/text-field/style.css' as text-field-style;

      [calculator-container] {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;

        a {
          text-decoration: underline;
        }

        .column {
          display: flex;
          flex-direction: column;
          max-width: 50rem;
          width: 100%;
        }

        .row {
          align-items: center;
          display: flex;
          flex-direction: row;
        }

        :is(.text-field).outlined input {
          font-family: monospace;
          font-size: 3.75rem;
          height: 6rem;
        }

        :is(.text-field).outlined {
          outline: none;
        }

        [x-section] {
          align-items: center;
          display: flex;
          height: 100%;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }

        section {
          text-align: center;
          width: 100%;
        }

        button {
          font-size: 1.75rem;
          font-weight: normal;
          height: 6rem;
          margin: 0;
          margin: 0.25rem;
          min-width: 4.0625rem;
          width: 100%;
        }

        button:active,
        button:hover {
          background-color: var(--md-sys-color-secondary);
          color: var(--md-sys-color-on-secondary);
        }

        button:focus-visible {
          outline: 2px solid var(--md-sys-color-primary);
        }

        button[value='c'] {
          flex: 1;
          margin-top: 0.375rem;
          max-width: 11.5rem;
          min-width: 4.0625rem;
        }

        label {
          flex: 3;
          margin: 0 0.25rem 0 0.25rem;
          min-width: 9.6875rem;
          width: 100%;
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
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class XCalculatorComponent implements OnInit, OnDestroy {
  private calculator = null; // define placeholder for instance of C# calculator
  private cdr = inject(ChangeDetectorRef);
  private xDialogService: XDialogService = inject(XDialogService);
  private xDialogSubscription: Subscription;
  private document: Document = inject(DOCUMENT);
  private isBrowser: boolean;
  private isReady: Subject<boolean> = new Subject<boolean>();
  private platformId: Object = inject(PLATFORM_ID);

  public results = 'loading...';
  public isDialogOpen = false;

  public model: CalculatorModel = {
    numbers: {
      first: '',
      second: '',
    },
    operation: '',
  };

  @ViewChild('result') result!: ElementRef;
  @ViewChild('clear') clear!: ElementRef;

  nativeElement!: HTMLElement;

  constructor(el: ElementRef) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.nativeElement = el.nativeElement;
      this.isReady.next(false);
      this.isReady.subscribe(() => this.isReadyHandler());
    }

    this.xDialogService.registerChangeDetector(this.cdr);
    this.xDialogSubscription = this.xDialogService.open$.subscribe(
      (isDialogOpen: boolean) => {
        this.isDialogOpen = isDialogOpen;
      },
    );
  }

  ngOnInit() {
    if (this.isBrowser) {
      let script: HTMLScriptElement | null = null;

      if (!this.document.querySelector('[data-dotnet-script]')) {
        script = this.document.createElement('script');
        script.setAttribute('src', environment.DOTNET_PATH);
        script.setAttribute('data-dotnet-script', 'true');

        this.document.body.appendChild(script);
      }

      const loadIt = () => {
        const dotnet = (globalThis as any & { runtime: any }).runtime.dotnet;

        dotnet.moduleConfig.configSrc =
          'assets/minimal-c-sharp-wasm/mono-config.json';

        const createRuntime = async () => await dotnet.create();
        const getAssemblyExports = async () => {
          const runtime = await createRuntime();
          const assemblyExports = await runtime.getAssemblyExports(
            runtime.getConfig().mainAssemblyName,
          );

          return assemblyExports;
        };

        // set C# calculator
        getAssemblyExports().then((assemblyExports) => {
          this.calculator = assemblyExports.Calculator;

          if (!this.isReady.closed) {
            this.isReady.next(true);
          }
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

  ngOnDestroy(): void {
    this.isReady?.unsubscribe();
    this.xDialogSubscription?.unsubscribe();
  }

  buttonHandler(event: Event) {
    this.handleCalculatorButtons(
      this.calculator,
      this.model,
      this.result.nativeElement,
      event,
      event.target,
    );
  }

  // event handler for calculator buttons
  handleCalculatorButtons(
    calculator: any,
    model: CalculatorModel,
    result: HTMLInputElement,
    e: any,
    el: any,
  ) {
    // handle only clicks without detail (0) that identify as a space key
    if (!e?.detail && e?.key !== ' ') {
      return;
    }

    this.handleCalculatorValue(calculator, model, result, el.value);
  }

  handleKeys(event: any) {
    return this.handleKeydownAndPaste(
      this.calculator,
      this.model,
      this.result,
      event,
    );
  }

  // event handler for keydown and paste
  handleKeydownAndPaste(
    calculator: any,
    model: CalculatorModel,
    result: ElementRef,
    e: InputEvent | KeyboardEvent | any,
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

  isReadyHandler() {
    // clear the calculator on first load
    clear(this.model, this.result.nativeElement);

    // focus the calculator input
    this.result.nativeElement.focus();
  }

  // solve the stored equation and set the result
  solve(calculator: any, model: CalculatorModel, result: HTMLInputElement) {
    let solution = null;

    const number1 = model.numbers.first;
    const number2 = model.numbers.second;

    if (calculator === null) {
      this.xDialogService.openDialog(
        'Required dependencies are still loading...',
      );

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

  private handleCalculatorValue(
    calculator: any,
    model: CalculatorModel,
    result: HTMLInputElement,
    val: string,
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

  // determine next steps for the calculator
  private resolveOperations(
    calculator: any,
    model: CalculatorModel,
    result: HTMLInputElement,
    val: any,
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
      if (this.isDialogOpen) {
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
}
