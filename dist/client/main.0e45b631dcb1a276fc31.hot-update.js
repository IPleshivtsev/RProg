webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\r\nvar userContext_1 = __webpack_require__(/*! ./shared/context/userContext */ \"./src/shared/context/userContext.tsx\");\r\nvar postsContext_1 = __webpack_require__(/*! ./shared/context/postsContext */ \"./src/shared/context/postsContext.tsx\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\r\nvar store_1 = __webpack_require__(/*! ./store */ \"./src/store.ts\");\r\nvar store = redux_1.createStore(store_1.rootReducer, redux_devtools_extension_1.composeWithDevTools());\r\nfunction AppComponent() {\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store },\r\n        react_1.default.createElement(userContext_1.UserContextProvider, null,\r\n            react_1.default.createElement(postsContext_1.PostsContextProvider, null,\r\n                react_1.default.createElement(Layout_1.Layout, null,\r\n                    react_1.default.createElement(Header_1.Header, null),\r\n                    react_1.default.createElement(Content_1.Content, null,\r\n                        react_1.default.createElement(CardsList_1.CardsList, null)))))));\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ReactDOM = __importStar(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nwindow.addEventListener('load', function () {\r\n    ReactDOM.hydrate(react_1.default.createElement(App_1.App, null), document.getElementById('react_root'));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/index.jsx?");

/***/ }),

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostData = exports.usePostsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nfunction usePostsData() {\r\n    var _a = react_1.useState([]), data = _a[0], setData = _a[1];\r\n    var token = react_redux_1.useSelector(function (state) { return state.token; });\r\n    react_1.useEffect(function () {\r\n        axios_1.default.get('https://oauth.reddit.com/best', {\r\n            headers: { Authorization: \"bearer \" + token }\r\n        })\r\n            .then(function (resp) {\r\n            if (resp.data.data !== undefined) {\r\n                var postsData = resp.data.data.children;\r\n                var postsArr_1 = [];\r\n                postsData.map(function (item) { return (postsArr_1.push({\r\n                    author: item.data.author || '',\r\n                    id: item.data.id || '',\r\n                    title: item.data.title || '',\r\n                    url: item.data.url || '',\r\n                    preview: (item.data.thumbnail && item.data.thumbnail.indexOf('http') !== -1) ? item.data.thumbnail : '',\r\n                    num_comments: item.data.num_comments || 0,\r\n                    score: item.data.score || 0,\r\n                    created: item.data.created_utc ?\r\n                        new Date(item.data.created_utc * 1000).toLocaleDateString() + ' ' +\r\n                            new Date(item.data.created_utc * 1000).toLocaleTimeString() : ''\r\n                })); });\r\n                setData(postsArr_1);\r\n            }\r\n        })\r\n            .catch(console.log);\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.usePostsData = usePostsData;\r\nfunction usePostData(postId) {\r\n    var _a = react_1.useState({ title: '', author: '', selfText: '', comments: [] }), data = _a[0], setData = _a[1];\r\n    var token = react_redux_1.useSelector(function (state) { return state.token; });\r\n    react_1.useEffect(function () {\r\n        axios_1.default.get(\"https://oauth.reddit.com/comments/\" + postId + \"?limit=20\", {\r\n            headers: { Authorization: \"bearer \" + token }\r\n        })\r\n            .then(function (resp) {\r\n            if (resp.data !== undefined) {\r\n                var postData = {\r\n                    title: resp.data[0].data.children[0].data.title,\r\n                    author: resp.data[0].data.children[0].data.author,\r\n                    created: resp.data[0].data.children[0].data.created_utc ?\r\n                        new Date(resp.data[0].data.children[0].data.created_utc * 1000).toLocaleDateString() + ' ' +\r\n                            new Date(resp.data[0].data.children[0].data.created_utc * 1000).toLocaleTimeString() : '',\r\n                    selfText: resp.data[0].data.children[0].data.selfText,\r\n                    comments: [],\r\n                };\r\n                var commentsData_1 = [];\r\n                var commentsArr = resp.data[1].data.children;\r\n                commentsArr.map(function (item) { return (commentsData_1.push({\r\n                    author: item.data.author || '',\r\n                    created: item.data.created_utc ?\r\n                        new Date(item.data.created_utc * 1000).toLocaleDateString() + ' ' +\r\n                            new Date(item.data.created_utc * 1000).toLocaleTimeString() : '',\r\n                    body: item.data.body || '',\r\n                })); });\r\n                postData.comments = commentsData_1;\r\n                setData(postData);\r\n            }\r\n        })\r\n            .catch(console.log);\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.usePostData = usePostData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar store_1 = __webpack_require__(/*! ../store */ \"./src/store.ts\");\r\nfunction useUserData() {\r\n    var _a = react_1.useState({}), data = _a[0], setData = _a[1];\r\n    var dispatch = react_redux_1.useDispatch();\r\n    react_1.useEffect(function () {\r\n        if (window.__token__) {\r\n            dispatch(store_1.setToken(window.__token__));\r\n        }\r\n    }, []);\r\n    var token = react_redux_1.useSelector(function (state) { return state.token; });\r\n    react_1.useEffect(function () {\r\n        axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n            headers: { Authorization: \"bearer \" + token }\r\n        })\r\n            .then(function (resp) {\r\n            var userData = resp.data;\r\n            setData({ name: userData.name, iconImg: userData.icon_img });\r\n        })\r\n            .catch(console.log);\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/CommentFormContainer.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/CommentFormContainer/CommentFormContainer.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentFormContainer = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar store_1 = __webpack_require__(/*! ../../store */ \"./src/store.ts\");\r\nvar CommentForm_1 = __webpack_require__(/*! ../CommentForm */ \"./src/shared/CommentForm/index.ts\");\r\nfunction CommentFormContainer() {\r\n    var value = react_redux_1.useSelector(function (state) { return state.commentText; });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    function handleChange(event) {\r\n        dispatch(store_1.updateComment(event.target.value));\r\n    }\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n        console.log(value);\r\n    }\r\n    return (react_1.default.createElement(CommentForm_1.CommentForm, { value: value, onChange: handleChange, onSubmit: handleSubmit }));\r\n}\r\nexports.CommentFormContainer = CommentFormContainer;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/CommentFormContainer.tsx?");

/***/ }),

/***/ "./src/shared/context/userContext.tsx":
/*!********************************************!*\
  !*** ./src/shared/context/userContext.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserContextProvider = exports.userContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar useUserData_1 = __webpack_require__(/*! ../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\r\nexports.userContext = react_1.default.createContext({});\r\nfunction UserContextProvider(_a) {\r\n    var children = _a.children;\r\n    var data = useUserData_1.useUserData()[0];\r\n    return (react_1.default.createElement(exports.userContext.Provider, { value: data }, children));\r\n}\r\nexports.UserContextProvider = UserContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/shared/context/userContext.tsx?");

/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = exports.setToken = exports.updateComment = void 0;\r\nvar initialState = {\r\n    commentText: 'Привет, SkillBox!',\r\n    token: ''\r\n};\r\nvar UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nvar UPDATE_TOKEN = 'UPDATE_TOKEN';\r\nexports.updateComment = function (text) { return ({\r\n    type: UPDATE_COMMENT,\r\n    text: text,\r\n}); };\r\nexports.setToken = function (text) { return ({\r\n    type: UPDATE_TOKEN,\r\n    text: text,\r\n}); };\r\nexports.rootReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { commentText: action.text });\r\n        case UPDATE_TOKEN:\r\n            return __assign(__assign({}, state), { token: action.text });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/store.ts?");

/***/ })

})