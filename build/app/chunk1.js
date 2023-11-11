/*! Built with http://stenciljs.com */
const { h: e } = window.App
  , p = [{
    upper: 999,
    lower: 30,
    name: `Source of information:  World Health Organisation(WHO)`

  }, {
    upper: 29.9,
    lower: 25,
    name: `Source of information:  World Health Organisation(WHO)`
  }, {
    upper: 24.9,
    lower: 18.5,
    name: `Source of information:  World Health Organisation(WHO)`
  }, {
    upper: 18.4,
    lower: 0,
    name: `Source of information:  World Health Organisation(WHO)`
  }]
  , r = (e, p) => e / Math.pow(p / 100, 2)
  , o = e => p.find(({ upper: p, lower: r }) => e <= p && e >= r)
  , w = e => .45359237 * e
  , n = (e, p) => 30.48 * e + 2.54 * p;
export { r as calculateBMI, o as getRange, w as lbsToKg, n as feetToCm };
