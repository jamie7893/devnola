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
	  getInitialState: function getInitialState() {
	    return {
	      showForm: false
	    };
	  },
	  _toggleForm: function _toggleForm() {
	    console.log('sjdasd');
	    if (this.state.showForm === false) {
	      this.setState({
	        showForm: true
	      });
	    } else {
	      this.setState({
	        showForm: false
	      });
	    }
	  },
	
	
	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      { className: "formFlex" },
	      _react2.default.createElement(
	        "button",
	        { onClick: this.state._toggleForm() },
	        "Toggle Form"
	      ),
	      _react2.default.createElement(
	        _reactToggleDisplay2.default,
	        { show: this.state.showForm },
	        _react2.default.createElement(_Form2.default, null)
	      )
	    );
	  }
	});
	
	exports.default = Main;

/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL01haW4uanM/YzEzYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBSSxPQUFPLGdCQUFNLFdBQU4sQ0FBa0I7QUFBQTtBQUMzQixrQkFEMkIsNkJBQ1Q7QUFDaEIsWUFBTztBQUNMLGlCQUFVO0FBREwsTUFBUDtBQUdELElBTDBCO0FBTzNCLGNBUDJCLHlCQU9iO0FBQ1osYUFBUSxHQUFSLENBQVksUUFBWjtBQUNBLFNBQUcsS0FBSyxLQUFMLENBQVcsUUFBWCxLQUF3QixLQUEzQixFQUFrQztBQUNsQyxZQUFLLFFBQUwsQ0FBYztBQUNaLG1CQUFVO0FBREUsUUFBZDtBQUdELE1BSkMsTUFJSztBQUNMLFlBQUssUUFBTCxDQUFjO0FBQ1osbUJBQVU7QUFERSxRQUFkO0FBR0Q7QUFDQSxJQWxCMEI7OztBQW9CM0IsV0FBUSxrQkFBVztBQUNqQixZQUNFO0FBQUE7T0FBQSxFQUFLLFdBQU0sVUFBWDtPQUVFO0FBQUE7U0FBQSxFQUFRLFNBQVMsS0FBSyxLQUFMLENBQVcsV0FBWCxFQUFqQjtTQUFBO0FBQUEsUUFGRjtPQUlOO0FBQUE7U0FBQSxFQUFlLE1BQU0sS0FBSyxLQUFMLENBQVcsUUFBaEM7U0FDTTtBQUROO0FBSk0sTUFERjtBQVlEO0FBakMwQixFQUFsQixDQUFYOzttQkFvQ2UsSSIsImZpbGUiOiIwLmY3ZGE0NGUyMWY3MDQ1MDc5ZmQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9OZXdQcm9qZWN0L0Zvcm1cIjtcbmltcG9ydCBUb2dnbGVEaXNwbGF5IGZyb20gJ3JlYWN0LXRvZ2dsZS1kaXNwbGF5JztcblxudmFyIE1haW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd0Zvcm06IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBfdG9nZ2xlRm9ybSgpIHtcbiAgICBjb25zb2xlLmxvZygnc2pkYXNkJylcbiAgICBpZih0aGlzLnN0YXRlLnNob3dGb3JtID09PSBmYWxzZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd0Zvcm06IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dGb3JtOiBmYWxzZVxuICAgIH0pO1xuICB9XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm1GbGV4XCI+XG5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN0YXRlLl90b2dnbGVGb3JtKCl9ID5Ub2dnbGUgRm9ybTwvYnV0dG9uPlxuXG48VG9nZ2xlRGlzcGxheSBzaG93PXt0aGlzLnN0YXRlLnNob3dGb3JtfT5cbiAgICAgIDxGb3JtLz5cbiAgICAgIDwvVG9nZ2xlRGlzcGxheT5cblxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vanMvY29tcG9uZW50cy9NYWluLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==