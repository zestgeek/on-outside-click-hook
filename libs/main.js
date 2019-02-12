"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

/**
 * @param {function} func - Function to be called when click outside the component
 * @returns {ref} the ref which will be attached to target element
*/
function useOnOutsideClick(func) {
  var elementInstance = (0, _react.useRef)(null);

  var onDocumentClick = function onDocumentClick(event) {
    if (!elementInstance.current.contains(event.target)) {
      func();
    }
  };

  (0, _react.useEffect)(function () {
    document.addEventListener('click', onDocumentClick);
    return function () {
      return document.removeEventListener('click', onDocumentClick);
    };
  }, []);
  return elementInstance;
}

var _default = useOnOutsideClick;
exports.default = _default;
