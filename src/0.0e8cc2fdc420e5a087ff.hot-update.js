webpackHotUpdate(0,{

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Form = __webpack_require__(231);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	var _reactToggleDisplay = __webpack_require__(239);
	
	var _reactToggleDisplay2 = _interopRequireDefault(_reactToggleDisplay);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Main = _react2.default.createClass({
	  displayName: "Main",
	
	
	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      { className: "formFlex" },
	      _react2.default.createElement(_Form2.default, null)
	    );
	  }
	});
	
	exports.default = Main;

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	(function (root, factory) {
		// Building component according to modularization strategy
	
		if (true) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
			// Node. Note that this does not work with strict
			// CommonJS, but only CommonJS-like environments
			// that support module.exports
			module.exports = factory(require('react'));
		} else {
			// Browser globals (root is window)
			root.ToggleDisplay = factory(React);
		}
	})(undefined, function (React) {
		"use strict";
	
		function isDefined(val) {
			return val != null;
		}
	
		function shouldHide(props) {
			var shouldHide = undefined;
			if (isDefined(props.show)) {
				shouldHide = !props.show;
			} else if (isDefined(props.hide)) {
				shouldHide = props.hide;
			} else {
				shouldHide = false;
			}
			return shouldHide;
		}
	
		function ToggleDisplay(props) {
			if (props.if === false) {
				return React.createElement('noscript', null);
				// return null // this used to work, now have to manually return <noscript>
			}
	
			var style = {};
			if (shouldHide(props)) {
				style.display = 'none';
			}
			return React.createElement('span', _extends({ style: style }, props));
		}
	
		ToggleDisplay.propTypes = {
			hide: React.PropTypes.bool,
			show: React.PropTypes.bool,
			if: React.PropTypes.bool
		};
	
		return ToggleDisplay;
	});


/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL01haW4uanM/YzEzYyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC10b2dnbGUtZGlzcGxheS9kaXN0L2luZGV4LmpzP2NhN2MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQUksT0FBTyxnQkFBTSxXQUFOLENBQWtCO0FBQUE7OztBQUUzQixXQUFRLGtCQUFXO0FBQ2pCLFlBQ0U7QUFBQTtPQUFBLEVBQUssV0FBTSxVQUFYO09BR0E7QUFIQSxNQURGO0FBU0Q7QUFaMEIsRUFBbEIsQ0FBWDs7bUJBZWUsSTs7Ozs7OztBQ25CZjs7QUFFQSxvREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UCx3QkFBdUIsbUdBQW1HOztBQUUxSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBK0MsZUFBZTtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQyIsImZpbGUiOiIwLjBlOGNjMmZkYzQyMGU1YTA4N2ZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9OZXdQcm9qZWN0L0Zvcm1cIjtcbmltcG9ydCBUb2dnbGVEaXNwbGF5IGZyb20gJ3JlYWN0LXRvZ2dsZS1kaXNwbGF5JztcblxudmFyIE1haW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm1GbGV4XCI+XG5cblxuICAgICAgPEZvcm0vPlxuXG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9qcy9jb21wb25lbnRzL01haW4uanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9XG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHQvLyBCdWlsZGluZyBjb21wb25lbnQgYWNjb3JkaW5nIHRvIG1vZHVsYXJpemF0aW9uIHN0cmF0ZWd5XG5cblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoWydyZWFjdCddLCBmYWN0b3J5KTtcblx0fSBlbHNlIGlmICgodHlwZW9mIGV4cG9ydHMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGV4cG9ydHMpKSA9PT0gJ29iamVjdCcpIHtcblx0XHQvLyBOb2RlLiBOb3RlIHRoYXQgdGhpcyBkb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0XG5cdFx0Ly8gQ29tbW9uSlMsIGJ1dCBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzXG5cdFx0Ly8gdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ3JlYWN0JykpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXG5cdFx0cm9vdC5Ub2dnbGVEaXNwbGF5ID0gZmFjdG9yeShSZWFjdCk7XG5cdH1cbn0pKHVuZGVmaW5lZCwgZnVuY3Rpb24gKFJlYWN0KSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdGZ1bmN0aW9uIGlzRGVmaW5lZCh2YWwpIHtcblx0XHRyZXR1cm4gdmFsICE9IG51bGw7XG5cdH1cblxuXHRmdW5jdGlvbiBzaG91bGRIaWRlKHByb3BzKSB7XG5cdFx0dmFyIHNob3VsZEhpZGUgPSB1bmRlZmluZWQ7XG5cdFx0aWYgKGlzRGVmaW5lZChwcm9wcy5zaG93KSkge1xuXHRcdFx0c2hvdWxkSGlkZSA9ICFwcm9wcy5zaG93O1xuXHRcdH0gZWxzZSBpZiAoaXNEZWZpbmVkKHByb3BzLmhpZGUpKSB7XG5cdFx0XHRzaG91bGRIaWRlID0gcHJvcHMuaGlkZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2hvdWxkSGlkZSA9IGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gc2hvdWxkSGlkZTtcblx0fVxuXG5cdGZ1bmN0aW9uIFRvZ2dsZURpc3BsYXkocHJvcHMpIHtcblx0XHRpZiAocHJvcHMuaWYgPT09IGZhbHNlKSB7XG5cdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnbm9zY3JpcHQnLCBudWxsKTtcblx0XHRcdC8vIHJldHVybiBudWxsIC8vIHRoaXMgdXNlZCB0byB3b3JrLCBub3cgaGF2ZSB0byBtYW51YWxseSByZXR1cm4gPG5vc2NyaXB0PlxuXHRcdH1cblxuXHRcdHZhciBzdHlsZSA9IHt9O1xuXHRcdGlmIChzaG91bGRIaWRlKHByb3BzKSkge1xuXHRcdFx0c3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHR9XG5cdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCBfZXh0ZW5kcyh7IHN0eWxlOiBzdHlsZSB9LCBwcm9wcykpO1xuXHR9XG5cblx0VG9nZ2xlRGlzcGxheS5wcm9wVHlwZXMgPSB7XG5cdFx0aGlkZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG5cdFx0c2hvdzogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG5cdFx0aWY6IFJlYWN0LlByb3BUeXBlcy5ib29sXG5cdH07XG5cblx0cmV0dXJuIFRvZ2dsZURpc3BsYXk7XG59KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9yZWFjdC10b2dnbGUtZGlzcGxheS9kaXN0L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9