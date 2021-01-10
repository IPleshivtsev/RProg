webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\r\nvar userContext_1 = __webpack_require__(/*! ./shared/context/userContext */ \"./src/shared/context/userContext.tsx\");\r\nvar postsContext_1 = __webpack_require__(/*! ./shared/context/postsContext */ \"./src/shared/context/postsContext.tsx\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\r\nvar reducer_1 = __webpack_require__(/*! ./store/reducer */ \"./src/store/reducer.ts\");\r\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\"));\r\nvar store = redux_1.createStore(reducer_1.rootReducer, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));\r\nfunction AppComponent() {\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store },\r\n        react_1.default.createElement(userContext_1.UserContextProvider, null,\r\n            react_1.default.createElement(postsContext_1.PostsContextProvider, null,\r\n                react_1.default.createElement(Layout_1.Layout, null,\r\n                    react_1.default.createElement(Header_1.Header, null),\r\n                    react_1.default.createElement(Content_1.Content, null,\r\n                        react_1.default.createElement(CardsList_1.CardsList, null)))))));\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar actions_1 = __webpack_require__(/*! ../store/me/actions */ \"./src/store/me/actions.ts\");\r\nfunction useUserData() {\r\n    var data = react_redux_1.useSelector(function (state) { return state.me.data; });\r\n    var loading = react_redux_1.useSelector(function (state) { return state.me.loading; });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    var token = react_redux_1.useSelector(function (state) { return state.token.data; });\r\n    react_1.useEffect(function () {\r\n        if (!token)\r\n            return;\r\n        dispatch(actions_1.meRequestAsync());\r\n    }, [token]);\r\n    return {\r\n        data: data,\r\n        loading: loading\r\n    };\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/CommentFormContainer.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/CommentFormContainer/CommentFormContainer.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentFormContainer = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar reducer_1 = __webpack_require__(/*! ../../store/reducer */ \"./src/store/reducer.ts\");\r\nvar CommentForm_1 = __webpack_require__(/*! ../CommentForm */ \"./src/shared/CommentForm/index.ts\");\r\nfunction CommentFormContainer() {\r\n    var value = react_redux_1.useSelector(function (state) { return state.commentText; });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    function handleChange(event) {\r\n        dispatch(reducer_1.updateComment(event.target.value));\r\n    }\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n        console.log(value);\r\n    }\r\n    return (react_1.default.createElement(CommentForm_1.CommentForm, { value: value, onChange: handleChange, onSubmit: handleSubmit }));\r\n}\r\nexports.CommentFormContainer = CommentFormContainer;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/CommentFormContainer.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\"));\r\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\");\r\nvar useUserData_1 = __webpack_require__(/*! ../../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\r\nfunction SearchBlock() {\r\n    var _a = useUserData_1.useUserData(), data = _a.data, loading = _a.loading;\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock },\r\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name, loading: loading })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Break_1 = __webpack_require__(/*! ../../../Break */ \"./src/shared/Break/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\");\r\nvar userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.css\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../../Icons */ \"./src/shared/Icons/index.ts\");\r\nfunction UserBlock(_a) {\r\n    var avatarSrc = _a.avatarSrc, username = _a.username, loading = _a.loading;\r\n    return (react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=1UllBdBhYKgJcg&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity\", className: userblock_css_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.avatarBox }, avatarSrc\r\n            ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: \"user avatar\", className: userblock_css_1.default.avatarImage })\r\n            : react_1.default.createElement(Icons_1.Icon, { IconName: \"Anon\", Size: 50 })),\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.username },\r\n            react_1.default.createElement(Break_1.Break, { size: 12 }),\r\n            loading ? (react_1.default.createElement(Text_1.Text, { size: 20, color: Text_1.EColors.grey99 }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\"))\r\n                : (react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColors.black : Text_1.EColors.grey99 }, username || 'Аноним')))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/context/userContext.tsx":
/*!********************************************!*\
  !*** ./src/shared/context/userContext.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserContextProvider = exports.userContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar useUserData_1 = __webpack_require__(/*! ../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\r\nexports.userContext = react_1.default.createContext({});\r\nfunction UserContextProvider(_a) {\r\n    var children = _a.children;\r\n    var _b = useUserData_1.useUserData(), data = _b.data, loading = _b.loading;\r\n    return (react_1.default.createElement(exports.userContext.Provider, { value: data }, children));\r\n}\r\nexports.UserContextProvider = UserContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/shared/context/userContext.tsx?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.saveTokenRequestAsync = exports.saveTokenRequestError = exports.SAVE_TOKEN_ERROR = exports.saveTokenRequestSuccess = exports.SAVE_TOKEN_SUCCESS = exports.saveTokenRequest = exports.SAVE_TOKEN = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar indexTemplate_1 = __webpack_require__(/*! ../../server/indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"./node_modules/@hot-loader/react-dom/server.browser.js\"));\r\nvar App_1 = __webpack_require__(/*! ../../App */ \"./src/App.tsx\");\r\nexports.SAVE_TOKEN = 'SET_TOKEN';\r\nexports.saveTokenRequest = function () { return ({\r\n    type: exports.SAVE_TOKEN\r\n}); };\r\nexports.SAVE_TOKEN_SUCCESS = 'SAVE_TOKEN_SUCCESS';\r\nexports.saveTokenRequestSuccess = function (data) { return ({\r\n    type: exports.SAVE_TOKEN_SUCCESS,\r\n    data: data,\r\n}); };\r\nexports.SAVE_TOKEN_ERROR = 'SAVE_TOKEN_ERROR';\r\nexports.saveTokenRequestError = function (error) { return ({\r\n    type: exports.SAVE_TOKEN_ERROR,\r\n    error: error,\r\n}); };\r\nexports.saveTokenRequestAsync = function (code, res) { return function (dispatch, getState) {\r\n    dispatch(exports.saveTokenRequest());\r\n    axios_1.default.post('https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\" + code + \"&redirect_uri=http://localhost:3000/auth\", {\r\n        auth: { username: '1UllBdBhYKgJcg' || false, password: 'GEadcFzJJ1p5DYs-VgzKGtlml17oHQ' },\r\n        headers: { 'Content-type': 'application/x-www-form-urlencoded' }\r\n    }).then(function (_a) {\r\n        var data = _a.data;\r\n        res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App()), data['access_token']));\r\n        dispatch(exports.saveTokenRequestSuccess(data['access_token']));\r\n    })\r\n        .catch(function (error) {\r\n        console.log(error);\r\n        dispatch(exports.saveTokenRequestError(String(error)));\r\n    });\r\n}; };\r\n\n\n//# sourceURL=webpack:///./src/store/token/actions.ts?");

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