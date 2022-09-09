"use strict";
(self["webpackChunksleact_ts_front"] = self["webpackChunksleact_ts_front"] || []).push([["pages_SignUp_index_tsx"],{

/***/ "./components/CheckIdModal/index.tsx":
/*!*******************************************!*\
  !*** ./components/CheckIdModal/index.tsx ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_CheckIdModal_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/CheckIdModal/styles */ "./components/CheckIdModal/styles.tsx");
/* harmony import */ var _pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pages/SignUp/styles */ "./pages/SignUp/styles.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();






const CheckIdModal = ({
  id,
  onChangeId,
  onCloseCheckIdModal,
  setId,
  setCheckId
}) => {
  _s();

  const [failUseID, setFailUseId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [clickCheck, setClickCheck] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const onSubmitId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault();
    if (!id && !id.trim()) return;
    axios__WEBPACK_IMPORTED_MODULE_3___default().post("https://waycabvav.shop/verification/login-id", {
      loginId: id
    }, {
      withCredentials: true
    }).then(response => {
      setFailUseId(true);
      setId(id);
      setCheckId(true);

      if (id.length < 6) {
        setFailUseId(false);
        setCheckId(false);
      }

      console.log(response);
    }).catch(error => {
      setFailUseId(false);
      setCheckId(false);
      console.log(error.response);
    }).finally(() => {
      setClickCheck(true);
    });
  }, [id, setId]);
  const stopPropagation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.stopPropagation();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CheckIdModal_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {
    onClick: stopPropagation
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CheckIdModal_styles__WEBPACK_IMPORTED_MODULE_1__.Form, {
    onSubmit: onSubmitId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CheckIdModal_styles__WEBPACK_IMPORTED_MODULE_1__.Div, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CheckIdModal_styles__WEBPACK_IMPORTED_MODULE_1__.Header, null, "\uC544\uC774\uB514 \uC911\uBCF5 \uAC80\uC0AC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CheckIdModal_styles__WEBPACK_IMPORTED_MODULE_1__.Button, {
    type: "submit"
  }, "\uAC80\uC0AC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CheckIdModal_styles__WEBPACK_IMPORTED_MODULE_1__.Input, {
    type: "text",
    id: "id",
    onChange: onChangeId,
    name: "id",
    value: id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: onCloseCheckIdModal
  }, "X"), clickCheck && !failUseID && id.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_2__.Error, null, "\uC544\uC774\uB514\uB97C \uC0AC\uC6A9\uD558\uC2E4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."), clickCheck && failUseID && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_2__.Correct, null, "\uC544\uC774\uB514 \uC0AC\uC6A9\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.")));
};

_s(CheckIdModal, "oe0tYFx1kLaLs7FUTH1Nl0DgQYg=");

_c = CheckIdModal;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckIdModal);

var _c;

__webpack_require__.$Refresh$.register(_c, "CheckIdModal");

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

/***/ "./components/CheckIdModal/styles.tsx":
/*!********************************************!*\
  !*** ./components/CheckIdModal/styles.tsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button),
/* harmony export */   "Div": () => (/* binding */ Div),
/* harmony export */   "Form": () => (/* binding */ Form),
/* harmony export */   "Header": () => (/* binding */ Header),
/* harmony export */   "Input": () => (/* binding */ Input),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  border: 1px solid;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  position: relative;

  background-color: white;

  width: 35vw;
  min-width: 400px;
  height: 30vh;
  min-height: 180px;

  margin: 26vh auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  & > form > button {
    border: none;
    background-color: inherit;

    position: absolute;
    top: 1rem;
    right: 1rem;

    font-size: 2rem;
  }
`;
const Form = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
`;
const Div = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;
const Header = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].header`
  font-size: 1.2rem;
`;
const Button = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  width: 4rem;
  height: 1.5rem;
  border-radius: 5px;
  background-color: #e8e1e1;
  color: inherit;
  border: transparent;
  text-align: center;
  margin: 10px 1rem;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.8rem;
`;
const Input = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].input`
  box-sizing: border-box;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid black;
  width: 20rem;
  height: 2rem;
  outline: none;
  font-size: 1rem;
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

/***/ "./components/CheckNicknameModal/index.tsx":
/*!*************************************************!*\
  !*** ./components/CheckNicknameModal/index.tsx ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_CheckIdModal_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/CheckIdModal/styles */ "./components/CheckIdModal/styles.tsx");
/* harmony import */ var _pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pages/SignUp/styles */ "./pages/SignUp/styles.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_CheckNicknameModal_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/CheckNicknameModal/styles */ "./components/CheckNicknameModal/styles.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();







const CheckNicknameModal = ({
  nickname,
  onChangeNickname,
  onCloseCheckIdModal,
  setNickname,
  setCheckNickname
}) => {
  _s();

  const [failUseNickname, setFailUseNickname] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [clickCheck, setClickCheck] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const onSubmitNickname = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault();
    if (!nickname && !nickname.trim()) return;
    axios__WEBPACK_IMPORTED_MODULE_3___default().post("https://waycabvav.shop/verification/nick-name", {
      nickName: nickname
    }, {
      withCredentials: true
    }).then(response => {
      setFailUseNickname(true);
      setNickname(nickname);
      setCheckNickname(true);

      if (nickname.length < 2) {
        setFailUseNickname(false);
        setCheckNickname(false);
      }

      console.log(response);
    }).catch(error => {
      setFailUseNickname(false);
      setCheckNickname(false);
      console.log(error.response);
    }).finally(() => {
      setClickCheck(true);
    });
  }, [nickname, setNickname]);
  const stopPropagation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.stopPropagation();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CheckNicknameModal_styles__WEBPACK_IMPORTED_MODULE_4__.Wrapper, {
    onClick: stopPropagation
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CheckIdModal_styles__WEBPACK_IMPORTED_MODULE_1__.Form, {
    onSubmit: onSubmitNickname
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CheckIdModal_styles__WEBPACK_IMPORTED_MODULE_1__.Div, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CheckIdModal_styles__WEBPACK_IMPORTED_MODULE_1__.Header, null, "\uB2C9\uB124\uC784 \uC911\uBCF5 \uAC80\uC0AC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CheckIdModal_styles__WEBPACK_IMPORTED_MODULE_1__.Button, {
    type: "submit"
  }, "\uAC80\uC0AC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CheckIdModal_styles__WEBPACK_IMPORTED_MODULE_1__.Input, {
    type: "text",
    id: "nickname",
    onChange: onChangeNickname,
    name: "nickname",
    value: nickname
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: onCloseCheckIdModal
  }, "X"), clickCheck && !failUseNickname && nickname.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_2__.Error, null, "\uB2C9\uB124\uC784\uC744 \uC0AC\uC6A9\uD558\uC2E4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."), clickCheck && failUseNickname && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_styles__WEBPACK_IMPORTED_MODULE_2__.Correct, null, "\uB2C9\uB124\uC784 \uC0AC\uC6A9\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.")));
};

_s(CheckNicknameModal, "UoI22YrXpe6WzM8bADwoDI574Wk=");

_c = CheckNicknameModal;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckNicknameModal);

var _c;

__webpack_require__.$Refresh$.register(_c, "CheckNicknameModal");

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

/***/ "./components/CheckNicknameModal/styles.tsx":
/*!**************************************************!*\
  !*** ./components/CheckNicknameModal/styles.tsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  border: 1px solid;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  position: relative;

  background-color: white;

  width: 35vw;
  min-width: 400px;
  height: 30vh;
  min-height: 180px;

  margin: 50vh auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  & > form > button {
    border: none;
    background-color: inherit;

    position: absolute;
    top: 1rem;
    right: 1rem;

    font-size: 2rem;
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

/***/ "./pages/SignUp/index.tsx":
/*!********************************!*\
  !*** ./pages/SignUp/index.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hooks/useInput */ "./hooks/useInput.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./pages/SignUp/styles.tsx");
/* harmony import */ var _components_StatusBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/StatusBar */ "./components/StatusBar/index.tsx");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Menu */ "./components/Menu/index.tsx");
/* harmony import */ var _components_CheckIdModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/CheckIdModal */ "./components/CheckIdModal/index.tsx");
/* harmony import */ var _components_CheckNicknameModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/CheckNicknameModal */ "./components/CheckNicknameModal/index.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();











const SignUp = () => {
  _s();

  const [id, onChangeId, setId] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_1__["default"])("");
  const [password,, setPassword] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_1__["default"])("");
  const [passwordCheck,, setPasswordCheck] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_1__["default"])("");
  const [email, onChangeEmail, setEmail] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_1__["default"])("");
  const [nickname, onChangeNickname, setNickname] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_1__["default"])("");
  const [birthDay, onChangeBirthDay, setBirthDay] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_1__["default"])("");
  const [age, setAge] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [signUpError, setSignUpError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [signUpSuccess, setSignUpSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  /** password mismatch */

  const [mismatchError, setMismatchError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [mismatchCondition, setMismatchCondition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [checkId, setCheckId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [checkNickname, setCheckNickname] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [checkIdModal, setCheckIdModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [checkNicknameModal, setCheckNicknameModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // 여기 변수로 나이 계산

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const thisYear = new Date().getFullYear().toString().slice(0, 4);
    setAge(parseInt(thisYear) - parseInt(birthDay.slice(0, 4)) + 1);
  }, [birthDay, onChangeBirthDay, setBirthDay]); // password 조건 검색

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const regexp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,15}$/;
    if (password.match(regexp)) setMismatchCondition(true);else setMismatchCondition(false);
  }, [password, setPassword]);
  const onChangePassword = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    setPassword(e.target.value);
    setMismatchError(e.target.value === passwordCheck);
  }, [passwordCheck, setPassword]);
  const onChangePasswordCheck = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    setPasswordCheck(e.target.value);
    setMismatchError(e.target.value === password);
  }, [password, setPasswordCheck]);
  const onCloseCheckIdModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setCheckIdModal(prev => !prev);
  }, []);
  const onCloseCheckNicknameModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setCheckNicknameModal(prev => !prev);
  }, []);
  const headers = {
    "X-Requested-With": "XMLHttpRequest"
  };
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault();

    if (!checkId || !mismatchError || !mismatchCondition || !birthDay && !birthDay.trim() || !checkNickname) {
      alert("전부 조건에 맞게 입력해주세요!");
      return;
    }

    axios__WEBPACK_IMPORTED_MODULE_2___default().post("https://waycabvav.shop/members", {
      nickName: nickname,
      email: email,
      loginId: id,
      password: password,
      checkPassword: passwordCheck,
      age: age
    }, {
      withCredentials: true,
      headers
    }).then(response => {
      alert("회원가입에 성공하셨습니다. 로그인을 해주세요");
      console.log(response);
      setSignUpSuccess(true);
      setId("");
      setPassword("");
      setPasswordCheck("");
      setEmail("");
      setNickname("");
      setBirthDay("");
      setAge(0);
    }).catch(error => {
      alert("에러!!!!!!");
      console.log(error.response);
    });
  }, [id, setId, password, setPassword, passwordCheck, setPasswordCheck, birthDay, setBirthDay, age, setAge, email, setEmail, nickname, setNickname, checkId, setCheckId, checkNickname, setCheckNickname, mismatchError, setMismatchError, mismatchCondition, setMismatchCondition]); //이메일 발송 axios

  const onSubmitEmail = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_2___default().post("https://waycabvav.shop/verification/email", {
      receiveEmail: email
    }, {
      withCredentials: true
    }).then(response => {
      alert("이메일을 보냈습니다.");
      console.log(response);
    }).catch(error => {
      alert("이메일 발송에 실패했습니다.");
      console.log(error.response);
    });
  }, [email]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_StatusBar__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Header, null, "\uD68C\uC6D0\uAC00\uC785"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Form, {
    onSubmit: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Div, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Label, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\uC544\uC774\uB514*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Input, {
    type: "text",
    id: "id",
    name: "id",
    value: id,
    onChange: onChangeId,
    placeholder: "\uC608) Wayc123, 6\uC790 \uC774\uC0C1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Button, {
    type: "button",
    onClick: onCloseCheckIdModal
  }, "\uC911\uBCF5 \uCCB4\uD06C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Label, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\uBE44\uBC00 \uBC88\uD638*"), !mismatchCondition && password.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Error, null, " ", "\uBE44\uBC00\uBC88\uD638 \uC870\uAC74\uC5D0 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4!", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.ErrorCircle, null)), mismatchCondition && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Correct, null, " ", "\uBE44\uBC00\uBC88\uD638 \uC870\uAC74\uC5D0 \uC77C\uCE58\uD569\uB2C8\uB2E4!", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.CorrectCircle, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Input, {
    type: "password",
    id: "password",
    name: "password",
    value: password,
    onChange: onChangePassword,
    placeholder: "\uC608) \uC601\uBB38, \uC22B\uC790, \uD2B9\uC218\uBB38\uC790 \uC870\uD569 8-15\uC790",
    minLength: 8,
    maxLength: 15
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Label, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\uBE44\uBC00 \uBC88\uD638 \uCCB4\uD06C* "), !mismatchError && passwordCheck.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Error, null, " ", "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4!", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.ErrorCircle, null)), mismatchError && passwordCheck.length > 7 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Correct, null, " ", "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD569\uB2C8\uB2E4!", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.CorrectCircle, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Input, {
    type: "password",
    id: "password-check",
    name: "password-check",
    value: passwordCheck,
    onChange: onChangePasswordCheck,
    placeholder: "\uC608) \uC601\uBB38, \uC22B\uC790, \uD2B9\uC218\uBB38\uC790 \uC870\uD569 8-15\uC790",
    minLength: 8,
    maxLength: 15
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Label, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\uC0DD\uB144 \uC6D4\uC77C*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Input, {
    type: "date",
    value: birthDay,
    onChange: onChangeBirthDay
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Div, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Label, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\uC774\uBA54\uC77C \uC8FC\uC18C*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Input, {
    type: "email",
    id: "email",
    name: "email",
    value: email,
    onChange: onChangeEmail,
    placeholder: "\uC608) wayc@google.com"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Button, {
    type: "button"
  }, "\uC778\uC99D \uBC88\uD638")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Div, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Label, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\uB2C9\uB124\uC784*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Input, {
    type: "text",
    id: "nickname",
    name: "nickname",
    value: nickname,
    onChange: onChangeNickname,
    placeholder: "\uC608) \uB098\uBE44, 2\uC790 \uC774\uC0C1",
    minLength: 2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Button, {
    type: "button",
    onClick: onCloseCheckNicknameModal
  }, "\uC911\uBCF5 \uCCB4\uD06C")), signUpError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Error, null, signUpError), signUpSuccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Correct, null, "\uD68C\uC6D0\uAC00\uC785\uB418\uC5C8\uC2B5\uB2C8\uB2E4! \uB85C\uADF8\uC778\uD574\uC8FC\uC138\uC694."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.SignUpBtn, {
    type: "submit"
  }, "\uAC00\uC785\uD558\uAE30")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.LinkContainer, null, "\uC774\uBBF8 \uD68C\uC6D0\uC774\uC2E0\uAC00\uC694? \xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
    to: "/login"
  }, "\uB85C\uADF8\uC778 \uD558\uB7EC\uAC00\uAE30")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    show: checkIdModal,
    onCloseModal: onCloseCheckIdModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CheckIdModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: id,
    onChangeId: onChangeId,
    onCloseCheckIdModal: onCloseCheckIdModal,
    setId: setId,
    setCheckId: setCheckId
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    show: checkNicknameModal,
    onCloseModal: onCloseCheckNicknameModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CheckNicknameModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    nickname: nickname,
    onChangeNickname: onChangeNickname,
    onCloseCheckIdModal: onCloseCheckNicknameModal,
    setNickname: setNickname,
    setCheckNickname: setCheckNickname
  }))));
};

_s(SignUp, "sJXZTDJy+0nuSXVt4IeP4qilsIs=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_1__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_1__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_1__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_1__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_1__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_1__["default"]];
});

_c = SignUp;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);

var _c;

__webpack_require__.$Refresh$.register(_c, "SignUp");

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

/***/ })

}]);