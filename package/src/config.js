function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

import { nanoid } from 'nanoid/non-secure';
var config = {
  selector: "vue-portal-target-".concat(nanoid())
};
export default config;
export var setSelector = function setSelector(selector) {
  return config.selector = selector;
};
export var isBrowser = typeof window !== 'undefined' && (typeof document === "undefined" ? "undefined" : _typeof(document)) !== undefined;