"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 486);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ 569);


// import print from "./print.js";
//静态引入
// function component() {
//     const element = document.createElement('div');
//     element.innerHTML = _.join(['Hello', 'webpack'], '')
//
//     const btn = document.createElement('button');
//     btn.innerHTML = '点我执行print';
//     btn.onclick = printMe;
//
//     element.appendChild(btn)
//     return element;
// }
//
// document.body.appendChild(component())

//动态导入
async function getComponent() {
    const element = document.createElement('div')

    //
    // return import('lodash')
    //     .then(({default: _}) => {
    //         const element = document.createElement('div')
    //         element.innerHTML = _.join(['Hello', 'Webpack'], '')
    //         return element
    //     })
    //     .catch((error) => {
    //         console.log('错误', error)
    //     })

    const {default: _} = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ 486, 23))
    element.innerHTML = _.join(['Hello', 'Webpack'], '')
    // element.onclick = print.bind(null,'hello webpack')

    return element

}

getComponent().then((component) => {
    document.body.appendChild(component)
})

/***/ }),

/***/ 569:
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ print)
/* harmony export */ });
// export default function printMe() {
//     console.log('我是print函数')
//     conse.log('我是错误')
// }

function print(text){
    console.log(text)
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(138)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguN2Y0ZTE2MWFiZGVkMzFlY2VhZWEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFzQjtBQUNXO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFdBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxXQUFXLFlBQVksUUFBUSw2R0FBZ0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUMzQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvcHJpbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgcHJpbnRNZSBmcm9tIFwiLi9wcmludC5qc1wiO1xyXG4vLyBpbXBvcnQgcHJpbnQgZnJvbSBcIi4vcHJpbnQuanNcIjtcclxuLy/pnZnmgIHlvJXlhaVcclxuLy8gZnVuY3Rpb24gY29tcG9uZW50KCkge1xyXG4vLyAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbycsICd3ZWJwYWNrJ10sICcnKVxyXG4vL1xyXG4vLyAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbi8vICAgICBidG4uaW5uZXJIVE1MID0gJ+eCueaIkeaJp+ihjHByaW50JztcclxuLy8gICAgIGJ0bi5vbmNsaWNrID0gcHJpbnRNZTtcclxuLy9cclxuLy8gICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKVxyXG4vLyAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbi8vIH1cclxuLy9cclxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSlcclxuXHJcbi8v5Yqo5oCB5a+85YWlXHJcbmFzeW5jIGZ1bmN0aW9uIGdldENvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuICAgIC8vXHJcbiAgICAvLyByZXR1cm4gaW1wb3J0KCdsb2Rhc2gnKVxyXG4gICAgLy8gICAgIC50aGVuKCh7ZGVmYXVsdDogX30pID0+IHtcclxuICAgIC8vICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAvLyAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnV2VicGFjayddLCAnJylcclxuICAgIC8vICAgICAgICAgcmV0dXJuIGVsZW1lbnRcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ+mUmeivrycsIGVycm9yKVxyXG4gICAgLy8gICAgIH0pXHJcblxyXG4gICAgY29uc3Qge2RlZmF1bHQ6IF99ID0gYXdhaXQgaW1wb3J0KCdsb2Rhc2gnKVxyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbycsICdXZWJwYWNrJ10sICcnKVxyXG4gICAgLy8gZWxlbWVudC5vbmNsaWNrID0gcHJpbnQuYmluZChudWxsLCdoZWxsbyB3ZWJwYWNrJylcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudFxyXG5cclxufVxyXG5cclxuZ2V0Q29tcG9uZW50KCkudGhlbigoY29tcG9uZW50KSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudClcclxufSkiLCIvLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludE1lKCkge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ+aIkeaYr3ByaW505Ye95pWwJylcclxuLy8gICAgIGNvbnNlLmxvZygn5oiR5piv6ZSZ6K+vJylcclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnQodGV4dCl7XHJcbiAgICBjb25zb2xlLmxvZyh0ZXh0KVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9