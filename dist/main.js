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

eval("document.addEventListener('DOMContentLoaded', () => {\n  const apiForm = document.getElementById('api-form');\n  const apiUrlInput = document.getElementById('api-url-input');\n  const optionsInput = document.getElementById('options-input');\n  const testFetch = async url => {\n    let optionsJSON = optionsInput.value;\n    if (optionsJSON === '') {\n      optionsJSON = '{}';\n    }\n    let options = await JSON.parse(optionsJSON);\n    if (options.headers) {\n      options.headers[\"Accept\"] = \"application/json\";\n    }\n    try {\n      let res = await fetch(url, options);\n      if (res.ok) {\n        let resBody = await res.json();\n        console.log(resBody);\n        let codeElement = document.getElementById('output');\n        codeElement.textContent = '';\n        codeElement.textContent = JSON.stringify(resBody, null, '  ');\n      } else {\n        let errorBody = await res.json();\n        console.log(errorBody);\n        let codeElement = document.getElementById('output');\n        codeElement.textContent = '';\n        codeElement.textContent = JSON.stringify(errorBody, null, '  ');\n        throw new Error(res);\n      }\n      ;\n    } catch (err) {\n      console.error(err);\n    }\n    ;\n  };\n  const handleTestFetch = e => {\n    e.preventDefault();\n    testFetch(apiUrlInput.value);\n  };\n  apiForm.addEventListener('submit', handleTestFetch);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcGlGb3JtIiwiZ2V0RWxlbWVudEJ5SWQiLCJhcGlVcmxJbnB1dCIsIm9wdGlvbnNJbnB1dCIsInRlc3RGZXRjaCIsInVybCIsIm9wdGlvbnNKU09OIiwidmFsdWUiLCJvcHRpb25zIiwiSlNPTiIsInBhcnNlIiwiaGVhZGVycyIsInJlcyIsImZldGNoIiwib2siLCJyZXNCb2R5IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJjb2RlRWxlbWVudCIsInRleHRDb250ZW50Iiwic3RyaW5naWZ5IiwiZXJyb3JCb2R5IiwiRXJyb3IiLCJlcnIiLCJlcnJvciIsImhhbmRsZVRlc3RGZXRjaCIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2F0X2FwaV90ZXN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBhcGlGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwaS1mb3JtJyk7XG4gICAgY29uc3QgYXBpVXJsSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBpLXVybC1pbnB1dCcpO1xuICAgIGNvbnN0IG9wdGlvbnNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb25zLWlucHV0Jyk7XG5cbiAgICBjb25zdCB0ZXN0RmV0Y2ggPSBhc3luYyAodXJsKSA9PiB7XG4gICAgICAgIGxldCBvcHRpb25zSlNPTiA9IG9wdGlvbnNJbnB1dC52YWx1ZTtcblxuICAgICAgICBpZiAob3B0aW9uc0pTT04gPT09ICcnKSB7XG4gICAgICAgICAgICBvcHRpb25zSlNPTiA9ICd7fSdcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBvcHRpb25zID0gYXdhaXQgSlNPTi5wYXJzZShvcHRpb25zSlNPTik7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzW1wiQWNjZXB0XCJdID0gXCJhcHBsaWNhdGlvbi9qc29uXCI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzQm9keSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzQm9keSk7XG4gICAgICAgICAgICAgICAgbGV0IGNvZGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dHB1dCcpO1xuICAgICAgICAgICAgICAgIGNvZGVFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICAgICAgY29kZUVsZW1lbnQudGV4dENvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShyZXNCb2R5LCBudWxsLCAnICAnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGVycm9yQm9keSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JCb2R5KTtcbiAgICAgICAgICAgICAgICBsZXQgY29kZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0cHV0Jyk7XG4gICAgICAgICAgICAgICAgY29kZUVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICBjb2RlRWxlbWVudC50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGVycm9yQm9keSwgbnVsbCwgJyAgJyk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlcyk7XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH07XG5cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlVGVzdEZldGNoID0gZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0ZXN0RmV0Y2goYXBpVXJsSW5wdXQudmFsdWUpO1xuICAgIH1cbiAgICBcbiAgICBhcGlGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZVRlc3RGZXRjaCk7XG5cbn0pIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hELE1BQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsVUFBVSxDQUFDO0VBQ25ELE1BQU1DLFdBQVcsR0FBR0osUUFBUSxDQUFDRyxjQUFjLENBQUMsZUFBZSxDQUFDO0VBQzVELE1BQU1FLFlBQVksR0FBR0wsUUFBUSxDQUFDRyxjQUFjLENBQUMsZUFBZSxDQUFDO0VBRTdELE1BQU1HLFNBQVMsR0FBRyxNQUFPQyxHQUFHLElBQUs7SUFDN0IsSUFBSUMsV0FBVyxHQUFHSCxZQUFZLENBQUNJLEtBQUs7SUFFcEMsSUFBSUQsV0FBVyxLQUFLLEVBQUUsRUFBRTtNQUNwQkEsV0FBVyxHQUFHLElBQUk7SUFDdEI7SUFFQSxJQUFJRSxPQUFPLEdBQUcsTUFBTUMsSUFBSSxDQUFDQyxLQUFLLENBQUNKLFdBQVcsQ0FBQztJQUUzQyxJQUFJRSxPQUFPLENBQUNHLE9BQU8sRUFBRTtNQUNqQkgsT0FBTyxDQUFDRyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsa0JBQWtCO0lBQ2xEO0lBRUEsSUFBSTtNQUNBLElBQUlDLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNSLEdBQUcsRUFBRUcsT0FBTyxDQUFDO01BQ25DLElBQUlJLEdBQUcsQ0FBQ0UsRUFBRSxFQUFFO1FBQ1IsSUFBSUMsT0FBTyxHQUFHLE1BQU1ILEdBQUcsQ0FBQ0ksSUFBSSxDQUFDLENBQUM7UUFDOUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxPQUFPLENBQUM7UUFDcEIsSUFBSUksV0FBVyxHQUFHckIsUUFBUSxDQUFDRyxjQUFjLENBQUMsUUFBUSxDQUFDO1FBQ25Ea0IsV0FBVyxDQUFDQyxXQUFXLEdBQUcsRUFBRTtRQUM1QkQsV0FBVyxDQUFDQyxXQUFXLEdBQUdYLElBQUksQ0FBQ1ksU0FBUyxDQUFDTixPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztNQUNqRSxDQUFDLE1BQU07UUFDSCxJQUFJTyxTQUFTLEdBQUcsTUFBTVYsR0FBRyxDQUFDSSxJQUFJLENBQUMsQ0FBQztRQUNoQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNJLFNBQVMsQ0FBQztRQUN0QixJQUFJSCxXQUFXLEdBQUdyQixRQUFRLENBQUNHLGNBQWMsQ0FBQyxRQUFRLENBQUM7UUFDbkRrQixXQUFXLENBQUNDLFdBQVcsR0FBRyxFQUFFO1FBQzVCRCxXQUFXLENBQUNDLFdBQVcsR0FBR1gsSUFBSSxDQUFDWSxTQUFTLENBQUNDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1FBQy9ELE1BQU0sSUFBSUMsS0FBSyxDQUFDWCxHQUFHLENBQUM7TUFFeEI7TUFBQztJQUVMLENBQUMsQ0FBQyxPQUFPWSxHQUFHLEVBQUU7TUFDVlAsT0FBTyxDQUFDUSxLQUFLLENBQUNELEdBQUcsQ0FBQztJQUN0QjtJQUFDO0VBRUwsQ0FBQztFQUVELE1BQU1FLGVBQWUsR0FBR0MsQ0FBQyxJQUFJO0lBQ3pCQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBRWxCeEIsU0FBUyxDQUFDRixXQUFXLENBQUNLLEtBQUssQ0FBQztFQUNoQyxDQUFDO0VBRURQLE9BQU8sQ0FBQ0QsZ0JBQWdCLENBQUMsUUFBUSxFQUFFMkIsZUFBZSxDQUFDO0FBRXZELENBQUMsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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