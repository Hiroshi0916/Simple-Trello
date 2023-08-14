/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\nvar _require = __webpack_require__(/*! react-dom/server */ \"react-dom/server\"),\n  renderToString = _require.renderToString;\nvar React = __webpack_require__(/*! react */ \"react\");\nvar App = (__webpack_require__(/*! ../src/App */ \"./src/App.tsx\")[\"default\"]);\nvar app = express();\nvar PORT = 9000;\napp.use(express.static('build'));\napp.get('/', function (req, res) {\n  var content = renderToString( /*#__PURE__*/React.createElement(App, null));\n  var html = \"\\n  <!DOCTYPE html>\\n  <html>\\n    <head>\\n      <title>Your App Name</title>\\n      <link rel=\\\"stylesheet\\\" href=\\\"/path-to-your-css.css\\\"> <!-- CSS\\u3078\\u306E\\u30D1\\u30B9\\u3082\\u9069\\u5207\\u306B\\u6307\\u5B9A -->\\n    </head>\\n    <body>\\n      <div id=\\\"root\\\">\".concat(content, \"</div>\\n      <script src=\\\"/client.bundle.js\\\"></script>\\n    </body>\\n  </html>\\n\");\n  res.send(html);\n});\napp.listen(PORT, function () {\n  console.log(\"Server is running at http://localhost:\".concat(PORT));\n});\n\n//# sourceURL=webpack://trello-app/./server/index.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/Header */ \"./src/components/header/Header.tsx\");\n/* harmony import */ var _components_task_TaskCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/task/TaskCards */ \"./src/components/task/TaskCards.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: \"app\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_header_Header__WEBPACK_IMPORTED_MODULE_0__.Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_task_TaskCards__WEBPACK_IMPORTED_MODULE_1__.TaskCards, null));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://trello-app/./src/App.tsx?");

/***/ }),

/***/ "./src/components/header/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/header/Header.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Header = function Header() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"header\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Simple Trello\")));\n};\n\n//# sourceURL=webpack://trello-app/./src/components/header/Header.tsx?");

/***/ }),

/***/ "./src/components/task/Task.tsx":
/*!**************************************!*\
  !*** ./src/components/task/Task.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-beautiful-dnd */ \"react-beautiful-dnd\");\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__);\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\nvar Task = function Task(_ref) {\n  var task = _ref.task,\n    taskList = _ref.taskList,\n    setTaskList = _ref.setTaskList,\n    index = _ref.index;\n  var handleDelete = function handleDelete(id) {\n    var newTaskList = taskList.filter(function (task) {\n      return task.id !== id;\n    });\n    setTaskList(newTaskList);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__.Draggable, {\n    index: index,\n    draggableId: task.draggableId\n  }, function (provided) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", _extends({\n      className: \"taskBox\",\n      key: task.id,\n      ref: provided.innerRef\n    }, provided.draggableProps, provided.dragHandleProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n      className: \"taskText\"\n    }, task.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n      className: \"taskTrashButton\",\n      onClick: function onClick() {\n        return handleDelete(task.id);\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-trash-alt\"\n    })));\n  });\n};\n\n//# sourceURL=webpack://trello-app/./src/components/task/Task.tsx?");

/***/ }),

/***/ "./src/components/task/TaskCard.tsx":
/*!******************************************!*\
  !*** ./src/components/task/TaskCard.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskCard)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TaskCardTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskCardTitle */ \"./src/components/task/TaskCardTitle.tsx\");\n/* harmony import */ var _button_TaskCardDeleteButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button/TaskCardDeleteButton */ \"./src/components/task/button/TaskCardDeleteButton.tsx\");\n/* harmony import */ var _Tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tasks */ \"./src/components/task/Tasks.tsx\");\n/* harmony import */ var _input_TaskAddInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input/TaskAddInput */ \"./src/components/task/input/TaskAddInput.tsx\");\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-beautiful-dnd */ \"react-beautiful-dnd\");\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__);\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nfunction TaskCard(_ref) {\n  var taskCardsList = _ref.taskCardsList,\n    setTaskCardsList = _ref.setTaskCardsList,\n    taskCard = _ref.taskCard,\n    index = _ref.index;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n    _useState2 = _slicedToArray(_useState, 2),\n    inputText = _useState2[0],\n    setInputText = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n    _useState4 = _slicedToArray(_useState3, 2),\n    taskList = _useState4[0],\n    setTaskList = _useState4[1];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__.Draggable, {\n    draggableId: taskCard.id,\n    index: index\n  }, function (provided) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", _extends({\n      className: \"taskCard\",\n      ref: provided.innerRef\n    }, provided.draggableProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", _extends({\n      className: \"taskCardTitleAndTaskardDeleteButtonArea\"\n    }, provided.dragHandleProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TaskCardTitle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_button_TaskCardDeleteButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      taskCardsList: taskCardsList,\n      setTaskCardsList: setTaskCardsList,\n      taskCard: taskCard\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_input_TaskAddInput__WEBPACK_IMPORTED_MODULE_4__.TaskAddInput, {\n      inputText: inputText,\n      setInputText: setInputText,\n      setTaskList: setTaskList,\n      taskList: taskList\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Tasks__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      inputText: inputText,\n      taskList: taskList,\n      setTaskList: setTaskList\n    }));\n  });\n}\n\n//# sourceURL=webpack://trello-app/./src/components/task/TaskCard.tsx?");

/***/ }),

/***/ "./src/components/task/TaskCardTitle.tsx":
/*!***********************************************!*\
  !*** ./src/components/task/TaskCardTitle.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskCardTitle)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction TaskCardTitle() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    isClick = _useState2[0],\n    setIsClick = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"Today\"),\n    _useState4 = _slicedToArray(_useState3, 2),\n    inputCardTitle = _useState4[0],\n    setInputCardTitle = _useState4[1];\n  var handleClick = function handleClick() {\n    setIsClick(true);\n  };\n  var handleChange = function handleChange(e) {\n    setInputCardTitle(e.target.value);\n  };\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    setIsClick(false);\n  };\n  var handleBlur = function handleBlur() {\n    setIsClick(false);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    onClick: handleClick,\n    className: \"taskCardTitleInputArea\"\n  }, isClick ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    className: \"taskCardTitleInput\",\n    autoFocus: true,\n    type: \"text\",\n    onChange: handleChange,\n    onBlur: handleBlur,\n    value: inputCardTitle,\n    maxLength: 15\n  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, inputCardTitle));\n}\n\n//# sourceURL=webpack://trello-app/./src/components/task/TaskCardTitle.tsx?");

/***/ }),

/***/ "./src/components/task/TaskCards.tsx":
/*!*******************************************!*\
  !*** ./src/components/task/TaskCards.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TaskCards: () => (/* binding */ TaskCards)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TaskCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskCard */ \"./src/components/task/TaskCard.tsx\");\n/* harmony import */ var _button_AddTaskCardButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button/AddTaskCardButton */ \"./src/components/task/button/AddTaskCardButton.tsx\");\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-beautiful-dnd */ \"react-beautiful-dnd\");\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__);\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n\n\n\nvar reorder = function reorder(_ref) {\n  var taskList = _ref.taskList,\n    startIndex = _ref.startIndex,\n    endIndex = _ref.endIndex;\n  var newList = _toConsumableArray(taskList);\n  var _newList$splice = newList.splice(startIndex, 1),\n    _newList$splice2 = _slicedToArray(_newList$splice, 1),\n    removed = _newList$splice2[0];\n  newList.splice(endIndex, 0, removed);\n  return newList;\n};\nvar TaskCards = function TaskCards() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{\n      id: \"0\",\n      draggableId: \"item0\"\n    }]),\n    _useState2 = _slicedToArray(_useState, 2),\n    taskCardsList = _useState2[0],\n    setTaskCardsList = _useState2[1];\n  var handleDragEnd = function handleDragEnd(result) {\n    if (!result.destination) return;\n    var newTaskCardsList = reorder({\n      taskList: taskCardsList,\n      startIndex: result.source.index,\n      endIndex: result.destination.index\n    });\n    setTaskCardsList(newTaskCardsList);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__.DragDropContext, {\n    onDragEnd: handleDragEnd\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__.Droppable, {\n    droppableId: \"droppable\",\n    direction: \"horizontal\"\n  }, function (provided) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", _extends({\n      className: \"taskCardsArea\"\n    }, provided.droppableProps, {\n      ref: provided.innerRef\n    }), taskCardsList.map(function (taskCard, index) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TaskCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        key: taskCard.id,\n        index: index,\n        taskCardsList: taskCardsList,\n        setTaskCardsList: setTaskCardsList,\n        taskCard: taskCard\n      });\n    }), provided.placeholder, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_button_AddTaskCardButton__WEBPACK_IMPORTED_MODULE_2__.AddTaskCardButton, {\n      taskCardsList: taskCardsList,\n      setTaskCardsList: setTaskCardsList\n    }));\n  }));\n};\n\n//# sourceURL=webpack://trello-app/./src/components/task/TaskCards.tsx?");

/***/ }),

/***/ "./src/components/task/Tasks.tsx":
/*!***************************************!*\
  !*** ./src/components/task/Tasks.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-beautiful-dnd */ \"react-beautiful-dnd\");\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./src/components/task/Task.tsx\");\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n\n\nvar Tasks = function Tasks(_ref) {\n  var taskList = _ref.taskList,\n    setTaskList = _ref.setTaskList;\n  if (!taskList) return null;\n  var reorder = function reorder(_ref2) {\n    var taskList = _ref2.taskList,\n      startIndex = _ref2.startIndex,\n      endIndex = _ref2.endIndex;\n    var newList = _toConsumableArray(taskList);\n    var _newList$splice = newList.splice(startIndex, 1),\n      _newList$splice2 = _slicedToArray(_newList$splice, 1),\n      removed = _newList$splice2[0];\n    newList.splice(endIndex, 0, removed);\n    return newList;\n  };\n  var handleDragEnd = function handleDragEnd(result) {\n    if (!result.destination) return;\n    var newTaskList = reorder({\n      taskList: taskList,\n      startIndex: result.source.index,\n      endIndex: result.destination.index\n    });\n    setTaskList(newTaskList);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__.DragDropContext, {\n    onDragEnd: handleDragEnd\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__.Droppable, {\n    droppableId: \"droppable\"\n  }, function (provided) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", _extends({}, provided.droppableProps, {\n      ref: provided.innerRef\n    }), taskList.map(function (task, index) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        key: task.id\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Task__WEBPACK_IMPORTED_MODULE_2__.Task, {\n        task: task,\n        index: index,\n        taskList: taskList,\n        setTaskList: setTaskList\n      }));\n    }), provided.placeholder);\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tasks);\n\n//# sourceURL=webpack://trello-app/./src/components/task/Tasks.tsx?");

/***/ }),

/***/ "./src/components/task/button/AddTaskCardButton.tsx":
/*!**********************************************************!*\
  !*** ./src/components/task/button/AddTaskCardButton.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddTaskCardButton: () => (/* binding */ AddTaskCardButton)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n\nvar AddTaskCardButton = function AddTaskCardButton(_ref) {\n  var taskCardsList = _ref.taskCardsList,\n    setTaskCardsList = _ref.setTaskCardsList;\n  var addTaskCard = function addTaskCard() {\n    var taskCardId = (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)();\n    setTaskCardsList([].concat(_toConsumableArray(taskCardsList), [{\n      id: taskCardId,\n      draggableId: \"item\".concat(taskCardId)\n    }]));\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"addTaskCardButtonArea\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"addTaskCardButton\",\n    onClick: addTaskCard\n  }, \"+\"));\n};\n\n//# sourceURL=webpack://trello-app/./src/components/task/button/AddTaskCardButton.tsx?");

/***/ }),

/***/ "./src/components/task/button/TaskCardDeleteButton.tsx":
/*!*************************************************************!*\
  !*** ./src/components/task/button/TaskCardDeleteButton.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskCardDeleteButton)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction TaskCardDeleteButton(_ref) {\n  var taskCardsList = _ref.taskCardsList,\n    setTaskCardsList = _ref.setTaskCardsList,\n    taskCard = _ref.taskCard;\n  var taskCardDeleteButton = function taskCardDeleteButton(id) {\n    setTaskCardsList(taskCardsList.filter(function (e) {\n      return e.id !== id;\n    }));\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"taskCardDeleteButton\",\n    onClick: function onClick() {\n      return taskCardDeleteButton(taskCard.id);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fa-regular fa-circle-xmark\"\n  })));\n}\n\n//# sourceURL=webpack://trello-app/./src/components/task/button/TaskCardDeleteButton.tsx?");

/***/ }),

/***/ "./src/components/task/input/TaskAddInput.tsx":
/*!****************************************************!*\
  !*** ./src/components/task/input/TaskAddInput.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TaskAddInput: () => (/* binding */ TaskAddInput)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n\nvar TaskAddInput = function TaskAddInput(_ref) {\n  var inputText = _ref.inputText,\n    setInputText = _ref.setInputText,\n    setTaskList = _ref.setTaskList,\n    taskList = _ref.taskList;\n  var handleSubmit = function handleSubmit(e) {\n    var taskId = (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)();\n    e.preventDefault();\n    if (inputText === \"\") {\n      return;\n    }\n    setTaskList([].concat(_toConsumableArray(taskList), [{\n      id: taskId,\n      draggableId: \"task-\".concat(taskId),\n      text: inputText\n    }]));\n    setInputText(\"\");\n  };\n  var handleChange = function handleChange(e) {\n    setInputText(e.target.value);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"add a task\",\n    className: \"taskAddInput\",\n    onChange: handleChange,\n    value: inputText\n  })));\n};\n\n//# sourceURL=webpack://trello-app/./src/components/task/input/TaskAddInput.tsx?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-beautiful-dnd":
/*!**************************************!*\
  !*** external "react-beautiful-dnd" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-beautiful-dnd");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("uuid");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;