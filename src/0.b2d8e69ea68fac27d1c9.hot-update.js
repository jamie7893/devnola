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
	        { onClick: this.state._toggleForm },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL01haW4uanM/YzEzYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBSSxPQUFPLGdCQUFNLFdBQU4sQ0FBa0I7QUFBQTtBQUMzQixrQkFEMkIsNkJBQ1Q7QUFDaEIsWUFBTztBQUNMLGlCQUFVO0FBREwsTUFBUDtBQUdELElBTDBCO0FBTzNCLGNBUDJCLHlCQU9iO0FBQ1osU0FBRyxLQUFLLEtBQUwsQ0FBVyxRQUFYLEtBQXdCLEtBQTNCLEVBQWtDO0FBQ2xDLFlBQUssUUFBTCxDQUFjO0FBQ1osbUJBQVU7QUFERSxRQUFkO0FBR0QsTUFKQyxNQUlLO0FBQ0wsWUFBSyxRQUFMLENBQWM7QUFDWixtQkFBVTtBQURFLFFBQWQ7QUFHRDtBQUNBLElBakIwQjs7O0FBbUIzQixXQUFRLGtCQUFXO0FBQ2pCLFlBQ0U7QUFBQTtPQUFBLEVBQUssV0FBTSxVQUFYO09BRUU7QUFBQTtTQUFBLEVBQVEsU0FBUyxLQUFLLEtBQUwsQ0FBVyxXQUE1QjtTQUFBO0FBQUEsUUFGRjtPQUlOO0FBQUE7U0FBQSxFQUFlLE1BQU0sS0FBSyxLQUFMLENBQVcsUUFBaEM7U0FDTTtBQUROO0FBSk0sTUFERjtBQVlEO0FBaEMwQixFQUFsQixDQUFYOzttQkFtQ2UsSSIsImZpbGUiOiIwLmIyZDhlNjllYTY4ZmFjMjdkMWM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9OZXdQcm9qZWN0L0Zvcm1cIjtcbmltcG9ydCBUb2dnbGVEaXNwbGF5IGZyb20gJ3JlYWN0LXRvZ2dsZS1kaXNwbGF5JztcblxudmFyIE1haW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd0Zvcm06IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBfdG9nZ2xlRm9ybSgpIHtcbiAgICBpZih0aGlzLnN0YXRlLnNob3dGb3JtID09PSBmYWxzZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd0Zvcm06IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dGb3JtOiBmYWxzZVxuICAgIH0pO1xuICB9XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm1GbGV4XCI+XG5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN0YXRlLl90b2dnbGVGb3JtfSA+VG9nZ2xlIEZvcm08L2J1dHRvbj5cblxuPFRvZ2dsZURpc3BsYXkgc2hvdz17dGhpcy5zdGF0ZS5zaG93Rm9ybX0+XG4gICAgICA8Rm9ybS8+XG4gICAgICA8L1RvZ2dsZURpc3BsYXk+XG5cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2pzL2NvbXBvbmVudHMvTWFpbi5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=