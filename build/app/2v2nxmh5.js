/*! Built with http://stenciljs.com */
const { h: t } = window.App;
import { calculateBMI as e, getRange as s } from "./chunk1.js";
var i;
!function (t) {
  t[t.Form = 0] = "Form",
    t[t.Result = 1] = "Result"
}(i || (i = {}));
class r {
  constructor() {
    this.appState = i.Form
  }
  calculate(t) {
    const { weight: s, height: r, originalWeight: a } = t.detail;
    if (this.bmi = e(s, r),
      a) {
      const t = e(a, r);
      this.difference = this.bmi - t
    }
    this.appState = i.Result
  }
  backToForm(t) {
    this.appState = i.Form
  }
  render() {
    return t("div", {
      class: "container"
    }, t("h1", null, "Body mass index (BMI)"), t("p", null, "A measure of body fat in adults"), this.appState === i.Form ? t("bmi-form", null) : null, this.appState === i.Result ? t("bmi-result", {
      bmi: this.bmi,
      difference: this.difference
    }) : null)
  }
  static get is() {
    return "bmi-app"
  }
  static get properties() {
    return {
      appState: {
        state: !0
      },
      bmi: {
        state: !0
      },
      difference: {
        state: !0
      }
    }
  }
  static get style() {
    return "h1{font-size:1.6rem;margin-bottom:10px}.container{padding:25px;max-width:500px;margin:auto}p{margin:0}form{margin-top:30px}.button-container{margin-top:50px}input,label{display:block;width:100%}label{text-transform:uppercase;font-size:.8rem;margin:25px 0 0;display:block}input{padding:0;font-size:4rem;background-color:transparent;border:none;color:#fff;border-bottom:2px solid #fff}input::placeholder{color:#fff;opacity:.25}button{text-transform:uppercase;color:#fff;font-size:1rem;border:1px solid #fff;background-color:transparent;padding:10px 25px;border-radius:30px;cursor:pointer;transition:transform .3s}button:disabled{cursor:not-allowed}.main-button:hover:not(:disabled){transform:scale(1.05)}.form-container{margin-top:50px}form.imperial .height{display:inline-block;width:45%}form.imperial .height-container{display:flex;justify-content:space-between}"
  }
}
class a {
  render() {
    const e = this.bmi
      , i = 200 * Math.PI
      , r = (100 - e) / 100 * i
      , a = s(e);
    return t("div", null, t("div", {
      style: {
        position: "relative"
      }
    }, t("div", {
      class: "circle-container"
    }, t("p", {
      class: "number"
    }, e.toFixed(1)), t("p", {
      class: "secondary-text"
    }, "BMI"), this.difference ? t("p", {
      class: "secondary-text"
    }, this.difference > 0 ? "+" : null, this.difference.toFixed(1)) : null), t("svg", {
      width: "100%",
      height: "270px",
      transform: "rotate(-90)"
    }, t("circle", {
      stroke: "white",
      "stroke-width": "2",
      r: 100,
      cx: "50%",
      cy: "50%",
      fill: "transparent",
      style: {
        opacity: ".2"
      }
    }), t("circle", {
      stroke: "white",
      "stroke-width": "7",
      cx: "50%",
      cy: "50%",
      r: 100,
      fill: "transparent",
      "stroke-dashoffset": r,
      "stroke-dasharray": i
    }))), t("p", {
      class: "result",
      onClick: () => window.open("https://www.who.int/europe/news-room/fact-sheets/item/a-healthy-lifestyle---who-recommendations")
    }, a.name), t("button", {
      class: "main-button",
      onClick: () => this.backToForm.emit()
    }, "Back"))
  }
  static get is() {
    return "bmi-result"
  }
  static get properties() {
    return {
      bmi: {
        type: Number,
        attr: "bmi"
      },
      difference: {
        type: "Any",
        attr: "difference"
      }
    }
  }
  static get events() {
    return [{
      name: "backToForm",
      method: "backToForm",
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }]
  }
  static get style() {
    return ".circle-container{position:absolute;font-size:4rem;top:50%;left:50%;transform:translate(-50%,-50%)}.circle-container .secondary-text{font-size:.8rem;text-align:center}.result{font-size:2rem;text-align:center;margin-bottom:35px;font-weight:lighter;text-decoration:underline}"
  }
}
export { r as BmiApp, a as BmiResult };
