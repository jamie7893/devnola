webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(33);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouter = __webpack_require__(168);
	
	var _Main = __webpack_require__(230);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var content = document.getElementById('content');
	_reactDom2.default.render(_react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.hashHistory },
	  _react2.default.createElement(_reactRouter.Route, { path: "/", component: _Main2.default })
	), content);

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Main = _react2.default.createClass({
	  displayName: "Main",
	
	
	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      { className: "formFlex" },
	      _react2.default.createElement(
	        "h1",
	        null,
	        " this is from main.js"
	      )
	    );
	  }
	});
	
	exports.default = Main;

/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9zY3JpcHRzLmpzPzIxMGIiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9NYWluLmpzP2MxM2MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7Ozs7O0FBRUEsS0FBTSxVQUFVLFNBQVMsY0FBVCxDQUF3QixTQUF4QixDQUFoQjtBQUNBLG9CQUFTLE1BQVQsQ0FDRTtBQUFBO0dBQUEsRUFBUSxpQ0FBUjtHQUNFLG9EQUFPLE1BQUssR0FBWixFQUFnQix5QkFBaEI7QUFERixFQURGLEVBSUEsT0FKQSxFOzs7Ozs7Ozs7Ozs7O0FDUkE7Ozs7OztBQUlBLEtBQUksT0FBTyxnQkFBTSxXQUFOLENBQWtCO0FBQUE7OztBQUUzQixXQUFRLGtCQUFXO0FBQ2pCLFlBQ0U7QUFBQTtPQUFBLEVBQUssV0FBTSxVQUFYO09BTUE7QUFBQTtTQUFBO1NBQUE7QUFBQTtBQU5BLE1BREY7QUFZRDtBQWYwQixFQUFsQixDQUFYOzttQkFrQmUsSSIsImZpbGUiOiIwLjVkZDIzNTY0YzAxZTNmMTYxZDUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlLCBoYXNoSGlzdG9yeX0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9jb21wb25lbnRzL01haW4uanNcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5SZWFjdERPTS5yZW5kZXIoXG4gIDxSb3V0ZXIgaGlzdG9yeT17aGFzaEhpc3Rvcnl9PlxuICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17TWFpbn0vPlxuICA8L1JvdXRlcj4sXG5jb250ZW50KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vanMvc2NyaXB0cy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuXG5cbnZhciBNYWluID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtRmxleFwiPlxuXG5cblxuXG5cbiAgICAgIDxoMT4gdGhpcyBpcyBmcm9tIG1haW4uanM8L2gxPlxuXG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9qcy9jb21wb25lbnRzL01haW4uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9