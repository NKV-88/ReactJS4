/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\src\\\\app.js: Unexpected token, expected \\\"...\\\" (50:23)\\n\\n\\u001b[0m \\u001b[90m 48 | \\u001b[39m        \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m \\u001b[90m 49 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 50 | \\u001b[39m                \\u001b[33m<\\u001b[39m\\u001b[33mBlog\\u001b[39m {\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mstate\\u001b[33m.\\u001b[39mpost}\\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                       \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 51 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 52 | \\u001b[39m        )\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 53 | \\u001b[39m    }\\u001b[0m\\n    at Object.raise (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6325:17)\\n    at Object.unexpected (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7642:16)\\n    at Object.expect (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7628:28)\\n    at Object.jsxParseAttribute (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3463:12)\\n    at Object.jsxParseOpeningElementAfterName (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3490:28)\\n    at Object.jsxParseOpeningElementAt (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3483:17)\\n    at Object.jsxParseElementAt (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3515:33)\\n    at Object.jsxParseElementAt (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3531:32)\\n    at Object.jsxParseElement (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3589:17)\\n    at Object.parseExprAtom (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3596:19)\\n    at Object.parseExprSubscripts (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8412:23)\\n    at Object.parseMaybeUnary (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8392:21)\\n    at Object.parseExprOps (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8267:23)\\n    at Object.parseMaybeConditional (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8240:23)\\n    at Object.parseMaybeAssign (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8187:21)\\n    at Object.parseParenAndDistinguishExpression (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8978:28)\\n    at Object.parseExprAtom (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8762:21)\\n    at Object.parseExprAtom (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3601:20)\\n    at Object.parseExprSubscripts (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8412:23)\\n    at Object.parseMaybeUnary (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8392:21)\\n    at Object.parseExprOps (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8267:23)\\n    at Object.parseMaybeConditional (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8240:23)\\n    at Object.parseMaybeAssign (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8187:21)\\n    at Object.parseExpression (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8135:23)\\n    at Object.parseReturnStatement (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10198:28)\\n    at Object.parseStatementContent (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9877:21)\\n    at Object.parseStatement (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9829:17)\\n    at Object.parseBlockOrModuleBlockBody (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10405:25)\\n    at Object.parseBlockBody (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10392:10)\\n    at Object.parseBlock (D:\\\\GIT\\\\React\\\\ReactJS4.git\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10376:10)\");\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });