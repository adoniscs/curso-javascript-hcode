class CalcController {
  constructor() {
    this._operation = [];
    this._locale = "pt-BR";
    this._displayCalcEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#data"); // ...El = Element
    this._timeEl = document.querySelector("#hora"); // ...El = Element
    this._buttons = this._currentDate;
    this.initialize();
    this.initButtonsEvents();
  }

  // método para inicializar
  initialize() {
    this.setDisplayDateTime(); // chama o metétodo para iniciar

    setInterval(() => {
      this.setDisplayDateTime(); // chamando o método e atualizar os segundos
    }, 1000);
  }

  // método para definir a hora e a data da calculadora
  setDisplayDateTime() {
    this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
  }

  // metodo para adicionar mais de um evento no click do botão
  addEventListenerAll(element, events, fn) {
    events.split(" ").forEach((event) => {
      element.addEventListener(event, fn, false);
    });
  }

  // metodo para apagar tudo quando o AC for clicado
  clearAll() {
    this._operation = [];
  }

  // metodo para apagar a ultima entrada
  clearEntry() {
    this._operation.pop();
  }

  // metodo para adicionar uma entrada ao final
  addOperation(value) {
    this._operation.push(value);
    console.log(this._operation);
  }

  // metodo para msg de erro caso nenhuma das opções seja válida
  setError() {
    this.displayCalc = "Error";
  }

  // metodo para execultar os botões
  execBtn(value) {
    switch (value) {
      case "ac": // ac = all clear
        this.clearAll();
        break;
      case "ce": // ce = cancel entry = ultima entrada
        this.clearEntry();
        break;
      case "soma":
        break;
      case "subtracao":
        break;
      case "divisao":
        break;
      case "multiplicacao":
        break;
      case "porcento":
        break;
      case "igual":
        break;

      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        this.addOperation(parseInt(value));
        break;

      default:
        this.setError();
        break;
    }
  }

  // método para iniciar evento dos botões
  initButtonsEvents() {
    let buttons = document.querySelectorAll("#buttons > g, #parts > g"); // pegar todas tags g filhos de buttons e parts

    buttons.forEach((btn, index) => {
      this.addEventListenerAll(btn, "click drag", (event) => {
        let textBtn = btn.className.baseVal.replace("btn-", ""); // baseVal é por causa do SVG

        this.execBtn(textBtn); // chama o método
      });

      this.addEventListenerAll(btn, "mouseover mouseup mousedown", (event) => {
        btn.style.cursor = "pointer";
      });
    });
  }

  get displayTime() {
    return this._timeEl.innerHTML;
  }

  set displayTime(value) {
    return (this._timeEl.innerHTML = value);
  }

  get displayDate() {
    return this._dateEl.innerHTML;
  }

  set displayDate(value) {
    return (this._dateEl.innerHTML = value);
  }

  get displayCalc() {
    return this._displayCalcEl.innerHTML;
  }

  set displayCalc(value) {
    this._displayCalcEl.innerHTML = value;
  }

  get currentDate() {
    return new Date();
  }

  set currentDate(value) {
    this.currentDate = value;
  }
}
