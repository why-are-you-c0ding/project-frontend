"use strict";
(self["webpackChunksleact_ts_front"] = self["webpackChunksleact_ts_front"] || []).push([["pages_LogIn_index_tsx"],{

/***/ "./hooks/useInput.ts":
/*!***************************!*\
  !*** ./hooks/useInput.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();



const useInput = initialValue => {
  _s();

  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);
  const handler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

_s(useInput, "zwfZiF3C83B9WQnByKaImAoFfFg=");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInput);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./pages/LogIn/index.tsx":
/*!*******************************!*\
  !*** ./pages/LogIn/index.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/SignUp/styles */ "./pages/SignUp/styles.tsx");
/* harmony import */ var _components_StatusBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/StatusBar */ "./components/StatusBar/index.tsx");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hooks/useInput */ "./hooks/useInput.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/cookie */ "./utils/cookie.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();









const LogIn = () => {
  _s();

  // const { data, error} = useSWR('https://waycabvav.shop/login', fetcher);
  //요기 주소도 수빈이(로그인 정보 받아올곳)
  (0,_utils_cookie__WEBPACK_IMPORTED_MODULE_5__.setCookie)("a", "123");
  const [id, onChangeId, setId] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])("");
  const [password, onChangePassword, setPassword] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])("");
  const [logInError, setLogInError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const headers = {
    "X-Requested-With": "XMLHttpRequest"
  };
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault();
    setLogInError(false);
    axios__WEBPACK_IMPORTED_MODULE_4___default().post("https://waycabvav.shop/login", {
      loginId: id,
      password: password
    }, {
      withCredentials: true,
      headers
    }).then(response => {
      alert("성공");
      console.log(response.headers);
      console.log(response.headers["Date"]); // console.log(response.)
      // mutate(response.data, false);
    }).catch(error => {
      alert("에러");
      setLogInError(error.response?.data?.statuseCode === 401);
    });
  }, [id, password]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_StatusBar__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Header, null, "WAYC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.SubHeader, null, "Why Are You Coding?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Form, {
    onSubmit: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Label, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\uC544\uC774\uB514"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Input, {
    type: "text",
    id: "id",
    name: "id",
    value: id,
    onChange: onChangeId,
    placeholder: "\uC608) Wayc"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Label, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\uBE44\uBC00 \uBC88\uD638*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Input, {
    type: "password",
    id: "password",
    name: "password",
    value: password,
    onChange: onChangePassword,
    placeholder: "\uC608) \uC601\uBB38, \uC22B\uC790, \uD2B9\uC218\uBB38\uC790 \uC870\uD569 8-16\uC790"
  })), logInError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.Error, null, "\uC774\uBA54\uC77C\uACFC \uBE44\uBC00\uBC88\uD638 \uC870\uD569\uC774 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.SignUpBtn, {
    type: "submit"
  }, "Log In"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_1__.SearchBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    to: "/signup"
  }, "\uD68C\uC6D0 \uAC00\uC785")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\uC544\uC774\uB514 \uCC3E\uAE30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30"))));
};

_s(LogIn, "SxgzlrKiMv4efltlKjdCIAirr3E=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"]];
});

_c = LogIn;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogIn);

var _c;

__webpack_require__.$Refresh$.register(_c, "LogIn");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./pages/SignUp/styles.tsx":
/*!*********************************!*\
  !*** ./pages/SignUp/styles.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button),
/* harmony export */   "Correct": () => (/* binding */ Correct),
/* harmony export */   "CorrectCircle": () => (/* binding */ CorrectCircle),
/* harmony export */   "Div": () => (/* binding */ Div),
/* harmony export */   "Error": () => (/* binding */ Error),
/* harmony export */   "ErrorCircle": () => (/* binding */ ErrorCircle),
/* harmony export */   "Form": () => (/* binding */ Form),
/* harmony export */   "Header": () => (/* binding */ Header),
/* harmony export */   "Input": () => (/* binding */ Input),
/* harmony export */   "Label": () => (/* binding */ Label),
/* harmony export */   "LinkContainer": () => (/* binding */ LinkContainer),
/* harmony export */   "SearchBox": () => (/* binding */ SearchBox),
/* harmony export */   "SignUpBtn": () => (/* binding */ SignUpBtn),
/* harmony export */   "SubHeader": () => (/* binding */ SubHeader),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Header = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].header`
  font-weight: bolder;
  font-size: 3em;
  letter-spacing: -0.75px;
  margin-bottom: 2rem;
`;
const Div = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: relative;
`;
const Button = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  width: 4rem;
  height: 1.5rem;
  border-radius: 5px;
  background-color: #e8e1e1;
  color: inherit;
  border: transparent;
  text-align: center;
  margin-left: 1rem;
  font-weight: bold;
  cursor: pointer;

  position: absolute;
  top: 0;
  left: 4.5rem;
`;
const SubHeader = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  font-weight: bolder;
  font-size: 20px;
  letter-spacing: -0.75px;
  margin-bottom: 30px;
`;
const Form = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].form`
  margin: 0 auto;
  width: 100vw;
  max-width: 400px;
`;
const Label = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].label`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 2rem;

  & span {
    text-align: left;
    font-size: 15px;
    cursor: pointer;
    font-weight: 700;

    width: 7rem;
  }
`;
const Input = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].input`
  position: relative;
  box-sizing: border-box;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #ebebeb;
  width: 25rem;
  height: 2rem;
  outline: none;
  font-size: 1rem;
  padding: 10px 0 14px;
  margin-top: 0.6rem;
  :focus {
    border-bottom: 2px solid black;
  }
  ::placeholder {
    font-size: 0.9rem;
  }
`;
const SignUpBtn = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  width: 25rem;
  height: 4rem;
  background-color: cornflowerblue;
  color: white;
  border: transparent;
  border-radius: 20px;
  text-align: center;
  outline: none;
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  cursor: pointer;
  &:hover {
    background-color: blueviolet;
    border: none;
  }
`;
const ErrorCircle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  background-color: red;
  float: left;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-weight: bold;
  margin-right: 10px;
  padding: 5px;
`;
const Error = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  color: red;
  margin: 8px 0 16px;
  font-weight: bold;
`;
const Correct = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  color: green;
  margin: 10px 0 10px;
  font-weight: bold;
`;
const CorrectCircle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  background-color: green;
  float: left;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-weight: bold;
  margin-right: 10px;
  padding: 5px;
`;
const SearchBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  text-align: center;
  & span {
    padding: 20px;

    & a {
      text-decoration: none;
      color: inherit;
    }
  }
`;
const LinkContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  font-size: 13px;
  color: #616061;
  margin: 0 auto 8px;
  width: 400px;
  max-width: 400px;
  & a {
    color: #1264a3;
    text-decoration: none;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./utils/cookie.ts":
/*!*************************!*\
  !*** ./utils/cookie.ts ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCookie": () => (/* binding */ getCookie),
/* harmony export */   "setCookie": () => (/* binding */ setCookie)
/* harmony export */ });
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/Cookies.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_0__["default"]();
const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option
  });
};
const getCookie = name => {
  return cookies.get(name);
};

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./node_modules/cookie/index.js":
/*!**************************************!*\
  !*** ./node_modules/cookie/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

exports.parse = parse;
exports.serialize = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {}
  var opt = options || {};
  var pairs = str.split(';')
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var index = pair.indexOf('=')

    // skip things that don't look like key=value
    if (index < 0) {
      continue;
    }

    var key = pair.substring(0, index).trim()

    // only assign once
    if (undefined == obj[key]) {
      var val = pair.substring(index + 1, pair.length).trim()

      // quoted values
      if (val[0] === '"') {
        val = val.slice(1, -1)
      }

      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;

    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError('option maxAge is invalid')
    }

    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}


/***/ }),

/***/ "./node_modules/react-cookie/es6/Cookies.js":
/*!**************************************************!*\
  !*** ./node_modules/react-cookie/es6/Cookies.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (universal_cookie__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/universal-cookie/es6/Cookies.js":
/*!******************************************************!*\
  !*** ./node_modules/universal-cookie/es6/Cookies.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ "./node_modules/cookie/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/universal-cookie/es6/utils.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var Cookies = /** @class */ (function () {
    function Cookies(cookies, options) {
        var _this = this;
        this.changeListeners = [];
        this.HAS_DOCUMENT_COOKIE = false;
        this.cookies = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.parseCookies)(cookies, options);
        new Promise(function () {
            _this.HAS_DOCUMENT_COOKIE = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.hasDocumentCookie)();
        }).catch(function () { });
    }
    Cookies.prototype._updateBrowserValues = function (parseOptions) {
        if (!this.HAS_DOCUMENT_COOKIE) {
            return;
        }
        this.cookies = cookie__WEBPACK_IMPORTED_MODULE_0__.parse(document.cookie, parseOptions);
    };
    Cookies.prototype._emitChange = function (params) {
        for (var i = 0; i < this.changeListeners.length; ++i) {
            this.changeListeners[i](params);
        }
    };
    Cookies.prototype.get = function (name, options, parseOptions) {
        if (options === void 0) { options = {}; }
        this._updateBrowserValues(parseOptions);
        return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.readCookie)(this.cookies[name], options);
    };
    Cookies.prototype.getAll = function (options, parseOptions) {
        if (options === void 0) { options = {}; }
        this._updateBrowserValues(parseOptions);
        var result = {};
        for (var name_1 in this.cookies) {
            result[name_1] = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.readCookie)(this.cookies[name_1], options);
        }
        return result;
    };
    Cookies.prototype.set = function (name, value, options) {
        var _a;
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }
        this.cookies = __assign(__assign({}, this.cookies), (_a = {}, _a[name] = value, _a));
        if (this.HAS_DOCUMENT_COOKIE) {
            document.cookie = cookie__WEBPACK_IMPORTED_MODULE_0__.serialize(name, value, options);
        }
        this._emitChange({ name: name, value: value, options: options });
    };
    Cookies.prototype.remove = function (name, options) {
        var finalOptions = (options = __assign(__assign({}, options), { expires: new Date(1970, 1, 1, 0, 0, 1), maxAge: 0 }));
        this.cookies = __assign({}, this.cookies);
        delete this.cookies[name];
        if (this.HAS_DOCUMENT_COOKIE) {
            document.cookie = cookie__WEBPACK_IMPORTED_MODULE_0__.serialize(name, '', finalOptions);
        }
        this._emitChange({ name: name, value: undefined, options: options });
    };
    Cookies.prototype.addChangeListener = function (callback) {
        this.changeListeners.push(callback);
    };
    Cookies.prototype.removeChangeListener = function (callback) {
        var idx = this.changeListeners.indexOf(callback);
        if (idx >= 0) {
            this.changeListeners.splice(idx, 1);
        }
    };
    return Cookies;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cookies);


/***/ }),

/***/ "./node_modules/universal-cookie/es6/index.js":
/*!****************************************************!*\
  !*** ./node_modules/universal-cookie/es6/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cookies */ "./node_modules/universal-cookie/es6/Cookies.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Cookies__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/universal-cookie/es6/utils.js":
/*!****************************************************!*\
  !*** ./node_modules/universal-cookie/es6/utils.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanCookies": () => (/* binding */ cleanCookies),
/* harmony export */   "hasDocumentCookie": () => (/* binding */ hasDocumentCookie),
/* harmony export */   "isParsingCookie": () => (/* binding */ isParsingCookie),
/* harmony export */   "parseCookies": () => (/* binding */ parseCookies),
/* harmony export */   "readCookie": () => (/* binding */ readCookie)
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ "./node_modules/cookie/index.js");

function hasDocumentCookie() {
    // Can we get/set cookies on document.cookie?
    return typeof document === 'object' && typeof document.cookie === 'string';
}
function cleanCookies() {
    document.cookie.split(';').forEach(function (c) {
        document.cookie = c
            .replace(/^ +/, '')
            .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    });
}
function parseCookies(cookies, options) {
    if (typeof cookies === 'string') {
        return cookie__WEBPACK_IMPORTED_MODULE_0__.parse(cookies, options);
    }
    else if (typeof cookies === 'object' && cookies !== null) {
        return cookies;
    }
    else {
        return {};
    }
}
function isParsingCookie(value, doNotParse) {
    if (typeof doNotParse === 'undefined') {
        // We guess if the cookie start with { or [, it has been serialized
        doNotParse =
            !value || (value[0] !== '{' && value[0] !== '[' && value[0] !== '"');
    }
    return !doNotParse;
}
function readCookie(value, options) {
    if (options === void 0) { options = {}; }
    var cleanValue = cleanupCookieValue(value);
    if (isParsingCookie(cleanValue, options.doNotParse)) {
        try {
            return JSON.parse(cleanValue);
        }
        catch (e) {
            // At least we tried
        }
    }
    // Ignore clean value if we failed the deserialization
    // It is not relevant anymore to trim those values
    return value;
}
function cleanupCookieValue(value) {
    // express prepend j: before serializing a cookie
    if (value && value[0] === 'j' && value[1] === ':') {
        return value.substr(2);
    }
    return value;
}


/***/ })

}]);