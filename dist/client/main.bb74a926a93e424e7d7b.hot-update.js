webpackHotUpdate("main",{

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar reducer_1 = __webpack_require__(/*! ../store/reducer */ \"./src/store/reducer.ts\");\r\nvar actions_1 = __webpack_require__(/*! ../store/me/actions */ \"./src/store/me/actions.ts\");\r\nfunction useUserData() {\r\n    var data = react_redux_1.useSelector(function (state) { return state.me.data; });\r\n    var loading = react_redux_1.useSelector(function (state) { return state.me.loading; });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    react_1.useEffect(function () {\r\n        if (window.__token__) {\r\n            dispatch(reducer_1.setToken(window.__token__));\r\n        }\r\n    }, []);\r\n    var token = react_redux_1.useSelector(function (state) { return state.token; });\r\n    react_1.useEffect(function () {\r\n        if (!token)\r\n            return;\r\n        dispatch(actions_1.meRequestAsync());\r\n    }, [token]);\r\n    return {\r\n        data: data,\r\n        loading: loading\r\n    };\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/store/me/actions.ts":
/*!*********************************!*\
  !*** ./src/store/me/actions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nexports.ME_REQUEST = 'ME_REQUEST';\r\nexports.meRequest = function () { return ({\r\n    type: exports.ME_REQUEST\r\n}); };\r\nexports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';\r\nexports.meRequestSuccess = function (data) { return ({\r\n    type: exports.ME_REQUEST_SUCCESS,\r\n    data: data\r\n}); };\r\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\r\nexports.meRequestError = function (error) { return ({\r\n    type: exports.ME_REQUEST_ERROR,\r\n    error: error\r\n}); };\r\nexports.meRequestAsync = function () { return function (dispatch, getState) {\r\n    dispatch(exports.meRequest());\r\n    axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n        headers: { Authorization: \"bearer \" + getState().token }\r\n    })\r\n        .then(function (resp) {\r\n        var userData = resp.data;\r\n        dispatch(exports.meRequestSuccess({ name: userData.name, iconImg: userData.icon_img }));\r\n    })\r\n        .catch(function (error) {\r\n        console.log(error);\r\n        dispatch(exports.meRequestError(String(error)));\r\n    });\r\n}; };\r\n\n\n//# sourceURL=webpack:///./src/store/me/actions.ts?");

/***/ }),

/***/ "./src/store/me/reducer.ts":
/*!*********************************!*\
  !*** ./src/store/me/reducer.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meReducer = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/store/me/actions.ts\");\r\nexports.meReducer = function (state, action) {\r\n    switch (action.type) {\r\n        case actions_1.ME_REQUEST:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { error: action.error, loading: false });\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n            return __assign(__assign({}, state), { data: action.data, loading: false });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/store/me/reducer.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = exports.updateComment = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./me/actions */ \"./src/store/me/actions.ts\");\r\nvar reducer_1 = __webpack_require__(/*! ./me/reducer */ \"./src/store/me/reducer.ts\");\r\nvar initialState = {\r\n    commentText: 'Привет, SkillBox!',\r\n    token: {\r\n        error: '',\r\n        data: ''\r\n    },\r\n    me: {\r\n        loading: false,\r\n        error: '',\r\n        data: {}\r\n    }\r\n};\r\nvar UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nexports.updateComment = function (text) { return ({\r\n    type: UPDATE_COMMENT,\r\n    text: text,\r\n}); };\r\nexports.rootReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { commentText: action.text });\r\n        case SET_TOKEN:\r\n        case SET_TOKEN_SUCCESS:\r\n        case SET_TOKEN_ERROR:\r\n            return __assign(__assign({}, state), { token: tokenReducer(state.token, action) });\r\n        case actions_1.ME_REQUEST:\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { me: reducer_1.meReducer(state.me, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/store/reducer.ts?");

/***/ })

})