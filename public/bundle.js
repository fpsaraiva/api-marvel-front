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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar TaskList = /*#__PURE__*/function () {\n  function TaskList() {\n    _classCallCheck(this, TaskList);\n\n    this.titleInput = document.getElementById(\"messageTitle\");\n    this.editTitleInput = document.getElementById(\"editMessageTitle\");\n    this.messageInput = document.getElementById(\"messageBody\");\n    this.editMessageInput = document.getElementById(\"editMessageBody\");\n    this.addButton = document.getElementById(\"addButton\");\n    this.scrapsField = document.getElementById(\"scrapsField\");\n    this.btnSaveEdit = document.getElementById(\"saveEdit\");\n    this.scraps = [];\n    this.setAddButtonEvent();\n  }\n\n  _createClass(TaskList, [{\n    key: \"generateScrapId\",\n    value: function generateScrapId() {\n      return this.scraps.length + 1;\n    }\n  }, {\n    key: \"setAddButtonEvent\",\n    value: function setAddButtonEvent() {\n      var _this = this;\n\n      this.addButton.onclick = function () {\n        return _this.addNewScrap();\n      };\n    }\n  }, {\n    key: \"setButtonEvents\",\n    value: function setButtonEvents() {\n      var _this2 = this;\n\n      document.querySelectorAll(\".delete-button\").forEach(function (item) {\n        item.onclick = function (event) {\n          return _this2.deleteScraps(event);\n        };\n      });\n      document.querySelectorAll(\".edit-button\").forEach(function (item) {\n        item.onclick = function (event) {\n          return _this2.openEditModal(event);\n        };\n      });\n    }\n  }, {\n    key: \"renderScraps\",\n    value: function renderScraps() {\n      this.scrapsField.innerHTML = \"\";\n\n      var _iterator = _createForOfIteratorHelper(this.scraps),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var scrap = _step.value;\n          this.generateScrap(scrap.id, scrap.title, scrap.message);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      this.setButtonEvents();\n    }\n  }, {\n    key: \"generateScrap\",\n    value: function generateScrap(id, title, message) {\n      var cardHtml = this.createScrapCard(id, title, message);\n      this.insertHtml(cardHtml);\n      this.setButtonEvents();\n    }\n  }, {\n    key: \"addNewScrap\",\n    value: function addNewScrap() {\n      var title = this.titleInput.value;\n      var message = this.messageInput.value;\n      this.titleInput.value = \"\";\n      this.messageInput.value = \"\";\n      var id = this.generateScrapId();\n      this.scraps.push({\n        id: id,\n        title: title,\n        message: message\n      });\n      this.generateScrap(id, title, message);\n    }\n  }, {\n    key: \"insertHtml\",\n    value: function insertHtml(html) {\n      this.scrapsField.innerHTML += html;\n    }\n  }, {\n    key: \"deleteScraps\",\n    value: function deleteScraps(event) {\n      event.path[2].remove();\n      var scrapId = event.path[2].getAttribute(\"id-scrap\");\n      var scrapIndex = this.scraps.findIndex(function (scrap) {\n        return scrap.id == scrapId;\n      });\n      this.scraps.splice(scrapIndex, 1);\n    }\n  }, {\n    key: \"openEditModal\",\n    value: function openEditModal(event) {\n      var _this3 = this;\n\n      $(\"#editModal\").modal(\"toggle\");\n      var scrapId = event.path[2].getAttribute(\"id-scrap\");\n      var scrapIndex = this.scraps.findIndex(function (scrap) {\n        return scrap.id == scrapId;\n      });\n      this.editTitleInput.value = this.scraps[scrapIndex].title;\n      this.editMessageInput.value = this.scraps[scrapIndex].message;\n\n      this.btnSaveEdit.onclick = function () {\n        return _this3.saveChanges(scrapIndex);\n      };\n    }\n  }, {\n    key: \"saveChanges\",\n    value: function saveChanges(scrapIndex) {\n      var title = this.editTitleInput.value;\n      var message = this.editMessageInput.value;\n      this.scraps[scrapIndex] = {\n        title: title,\n        message: message\n      };\n      this.renderScraps();\n      $(\"#editModal\").modal(\"hide\");\n    }\n  }, {\n    key: \"createScrapCard\",\n    value: function createScrapCard(id, title, message) {\n      return \"\\n      <div class=\\\"message-cards card text-white bg-dark m-2 col-3\\\" id-scrap=\\\"\".concat(id, \"\\\">\\n        <div class=\\\"card-header font-weight-bold\\\">\").concat(title, \"</div>\\n        <div class=\\\"card-body\\\">\\n          <p class=\\\"card-text\\\">\\n            \").concat(message, \"\\n          </p>\\n        </div>\\n        <div class=\\\"w-100 d-flex justify-content-end pr-2 pb-2\\\">\\n          <button class=\\\"btn btn-danger mr-1 delete-button\\\">Deletar</button>\\n          <button class=\\\"btn btn-info edit-button\\\">Editar</button>\\n        </div>\\n      </div>\\n    \");\n    }\n  }]);\n\n  return TaskList;\n}();\n\nnew TaskList();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });