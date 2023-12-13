/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("document.addEventListener('DOMContentLoaded', () => {\n  const apiForm = document.getElementById('api-form');\n  const apiUrlInput = document.getElementById('api-url-input');\n  const optionsInput = document.getElementById('options-input');\n  const testFetch = async url => {\n    let optionsJSON = optionsInput.value;\n    let options = await JSON.parse(optionsJSON);\n    if (options.headers) {\n      options.headers[\"Accept\"] = \"application/json\";\n    }\n    try {\n      let res = await fetch(url, options);\n      if (res.ok) {\n        let resBody = await res.json();\n        console.log(resBody);\n      } else {\n        let errorBody = await res.json();\n        console.log(errorBody);\n        throw new Error(res);\n      }\n      ;\n    } catch (err) {\n      console.error(err);\n    }\n    ;\n  };\n  const handleTestFetch = e => {\n    e.preventDefault();\n    testFetch(apiUrlInput.value);\n  };\n  apiForm.addEventListener('submit', handleTestFetch);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcGlGb3JtIiwiZ2V0RWxlbWVudEJ5SWQiLCJhcGlVcmxJbnB1dCIsIm9wdGlvbnNJbnB1dCIsInRlc3RGZXRjaCIsInVybCIsIm9wdGlvbnNKU09OIiwidmFsdWUiLCJvcHRpb25zIiwiSlNPTiIsInBhcnNlIiwiaGVhZGVycyIsInJlcyIsImZldGNoIiwib2siLCJyZXNCb2R5IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvckJvZHkiLCJFcnJvciIsImVyciIsImVycm9yIiwiaGFuZGxlVGVzdEZldGNoIiwiZSIsInByZXZlbnREZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXRfYXBpX3Rlc3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGFwaUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBpLWZvcm0nKTtcbiAgICBjb25zdCBhcGlVcmxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcGktdXJsLWlucHV0Jyk7XG4gICAgY29uc3Qgb3B0aW9uc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wdGlvbnMtaW5wdXQnKTtcblxuICAgIGNvbnN0IHRlc3RGZXRjaCA9IGFzeW5jICh1cmwpID0+IHtcbiAgICAgICAgbGV0IG9wdGlvbnNKU09OID0gb3B0aW9uc0lucHV0LnZhbHVlO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IGF3YWl0IEpTT04ucGFyc2Uob3B0aW9uc0pTT04pO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVyc1tcIkFjY2VwdFwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc0JvZHkgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc0JvZHkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgZXJyb3JCb2R5ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvckJvZHkpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXMpO1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9O1xuXG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVRlc3RGZXRjaCA9IGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGVzdEZldGNoKGFwaVVybElucHV0LnZhbHVlKTtcbiAgICB9XG4gICAgXG4gICAgYXBpRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVUZXN0RmV0Y2gpO1xuXG59KSJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFVBQVUsQ0FBQztFQUNuRCxNQUFNQyxXQUFXLEdBQUdKLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGVBQWUsQ0FBQztFQUM1RCxNQUFNRSxZQUFZLEdBQUdMLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGVBQWUsQ0FBQztFQUU3RCxNQUFNRyxTQUFTLEdBQUcsTUFBT0MsR0FBRyxJQUFLO0lBQzdCLElBQUlDLFdBQVcsR0FBR0gsWUFBWSxDQUFDSSxLQUFLO0lBQ3BDLElBQUlDLE9BQU8sR0FBRyxNQUFNQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0osV0FBVyxDQUFDO0lBRTNDLElBQUlFLE9BQU8sQ0FBQ0csT0FBTyxFQUFFO01BQ2pCSCxPQUFPLENBQUNHLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxrQkFBa0I7SUFDbEQ7SUFFQSxJQUFJO01BQ0EsSUFBSUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQ1IsR0FBRyxFQUFFRyxPQUFPLENBQUM7TUFDbkMsSUFBSUksR0FBRyxDQUFDRSxFQUFFLEVBQUU7UUFDUixJQUFJQyxPQUFPLEdBQUcsTUFBTUgsR0FBRyxDQUFDSSxJQUFJLENBQUMsQ0FBQztRQUM5QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILE9BQU8sQ0FBQztNQUN4QixDQUFDLE1BQU07UUFDSCxJQUFJSSxTQUFTLEdBQUcsTUFBTVAsR0FBRyxDQUFDSSxJQUFJLENBQUMsQ0FBQztRQUNoQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVMsQ0FBQztRQUN0QixNQUFNLElBQUlDLEtBQUssQ0FBQ1IsR0FBRyxDQUFDO01BRXhCO01BQUM7SUFFTCxDQUFDLENBQUMsT0FBT1MsR0FBRyxFQUFFO01BQ1ZKLE9BQU8sQ0FBQ0ssS0FBSyxDQUFDRCxHQUFHLENBQUM7SUFDdEI7SUFBQztFQUVMLENBQUM7RUFFRCxNQUFNRSxlQUFlLEdBQUdDLENBQUMsSUFBSTtJQUN6QkEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUVsQnJCLFNBQVMsQ0FBQ0YsV0FBVyxDQUFDSyxLQUFLLENBQUM7RUFDaEMsQ0FBQztFQUVEUCxPQUFPLENBQUNELGdCQUFnQixDQUFDLFFBQVEsRUFBRXdCLGVBQWUsQ0FBQztBQUV2RCxDQUFDLENBQUMifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXRfYXBpX3Rlc3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;