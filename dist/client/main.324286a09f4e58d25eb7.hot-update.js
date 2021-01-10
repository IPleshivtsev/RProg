webpackHotUpdate("main",{

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = exports.updateComment = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./me/actions */ \"./src/store/me/actions.ts\");\r\nvar reducer_1 = __webpack_require__(/*! ./me/reducer */ \"./src/store/me/reducer.ts\");\r\nvar reducer_2 = __webpack_require__(/*! ./token/reducer */ \"./src/store/token/reducer.ts\");\r\nvar actions_2 = __webpack_require__(/*! ./token/actions */ \"./src/store/token/actions.ts\");\r\nvar initialState = {\r\n    commentText: 'Привет, SkillBox!',\r\n    token: {\r\n        error: '',\r\n        data: ''\r\n    },\r\n    me: {\r\n        loading: false,\r\n        error: '',\r\n        data: {}\r\n    }\r\n};\r\nvar UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nexports.updateComment = function (text) { return ({\r\n    type: UPDATE_COMMENT,\r\n    text: text,\r\n}); };\r\nexports.rootReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { commentText: action.text });\r\n        case actions_2.SAVE_TOKEN:\r\n        case actions_2.SAVE_TOKEN_SUCCESS:\r\n        case actions_2.SAVE_TOKEN_ERROR:\r\n            return __assign(__assign({}, state), { token: reducer_2.tokenReducer(state.token, action) });\r\n        case actions_1.ME_REQUEST:\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { me: reducer_1.meReducer(state.me, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/store/reducer.ts?");

/***/ }),

/***/ "./src/store/token/actions.ts":
/*!************************************!*\
  !*** ./src/store/token/actions.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.saveTokenRequestAsync = exports.saveTokenRequestError = exports.SAVE_TOKEN_ERROR = exports.saveTokenRequestSuccess = exports.SAVE_TOKEN_SUCCESS = exports.saveTokenRequest = exports.SAVE_TOKEN = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nexports.SAVE_TOKEN = 'SET_TOKEN';\r\nexports.saveTokenRequest = function () { return ({\r\n    type: exports.SAVE_TOKEN\r\n}); };\r\nexports.SAVE_TOKEN_SUCCESS = 'SAVE_TOKEN_SUCCESS';\r\nexports.saveTokenRequestSuccess = function (data) { return ({\r\n    type: exports.SAVE_TOKEN_SUCCESS,\r\n    data: data,\r\n}); };\r\nexports.SAVE_TOKEN_ERROR = 'SAVE_TOKEN_ERROR';\r\nexports.saveTokenRequestError = function (error) { return ({\r\n    type: exports.SAVE_TOKEN_ERROR,\r\n    error: error,\r\n}); };\r\nexports.saveTokenRequestAsync = function (code) { return function (dispatch) {\r\n    dispatch(exports.saveTokenRequest());\r\n    axios_1.default.post('https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\" + code + \"&redirect_uri=http://localhost:3000/auth\", {\r\n        auth: { username: '1UllBdBhYKgJcg' || false, password: 'GEadcFzJJ1p5DYs-VgzKGtlml17oHQ' },\r\n        headers: { 'Content-type': 'application/x-www-form-urlencoded' }\r\n    })\r\n        .then(function (_a) {\r\n        var data = _a.data;\r\n        dispatch(exports.saveTokenRequestSuccess(data['access_token']));\r\n    })\r\n        .catch(function (error) {\r\n        console.log(error);\r\n        dispatch(exports.saveTokenRequestError(String(error)));\r\n    });\r\n}; };\r\n\n\n//# sourceURL=webpack:///./src/store/token/actions.ts?");

/***/ }),

/***/ "./src/store/token/reducer.ts":
/*!************************************!*\
  !*** ./src/store/token/reducer.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.tokenReducer = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/store/token/actions.ts\");\r\nexports.tokenReducer = function (state, action) {\r\n    switch (action.type) {\r\n        case actions_1.SAVE_TOKEN:\r\n            return __assign({}, state);\r\n        case actions_1.SAVE_TOKEN_ERROR:\r\n            return __assign(__assign({}, state), { error: action.error });\r\n        case actions_1.SAVE_TOKEN_SUCCESS:\r\n            return __assign(__assign({}, state), { data: action.data });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/store/token/reducer.ts?");

/***/ })

})