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
	    this.setState({
	      showForm: !this.state.showForm
	    });
	  },
	
	
	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      { className: "row" },
	      _react2.default.createElement(
	        "button",
	        { onClick: this._toggleForm },
	        "Toggle Form"
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "col-md-4" },
	        _react2.default.createElement("img", { src: "http://i.huffpost.com/gen/1469553/images/o-NEW-ORLEANS-facebook.jpg" })
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "col-md-8 formFlex" },
	        _react2.default.createElement(
	          _reactToggleDisplay2.default,
	          { show: this.state.showForm },
	          _react2.default.createElement(_Form2.default, null)
	        )
	      )
	    );
	  }
	});
	
	exports.default = Main;

/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL01haW4uanM/YzEzYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBSSxPQUFPLGdCQUFNLFdBQU4sQ0FBa0I7QUFBQTtBQUMzQixrQkFEMkIsNkJBQ1Q7QUFDaEIsWUFBTztBQUNMLGlCQUFVO0FBREwsTUFBUDtBQUdELElBTDBCO0FBTzNCLGNBUDJCLHlCQU9iO0FBQ1osVUFBSyxRQUFMLENBQWM7QUFDWixpQkFBVSxDQUFDLEtBQUssS0FBTCxDQUFXO0FBRFYsTUFBZDtBQUdELElBWDBCOzs7QUFhM0IsV0FBUSxrQkFBVztBQUNqQixZQUNFO0FBQUE7T0FBQSxFQUFLLFdBQU0sS0FBWDtPQUNFO0FBQUE7U0FBQSxFQUFRLFNBQVMsS0FBSyxXQUF0QjtTQUFBO0FBQUEsUUFERjtPQUlFO0FBQUE7U0FBQSxFQUFLLFdBQU0sVUFBWDtTQUNFLHVDQUFLLEtBQUkscUVBQVQ7QUFERixRQUpGO09BUUU7QUFBQTtTQUFBLEVBQUssV0FBTSxtQkFBWDtTQUNFO0FBQUE7V0FBQSxFQUFlLE1BQU0sS0FBSyxLQUFMLENBQVcsUUFBaEM7V0FDRTtBQURGO0FBREY7QUFSRixNQURGO0FBaUJEO0FBL0IwQixFQUFsQixDQUFYOzttQkFrQ2UsSSIsImZpbGUiOiIwLmZiMDQ2Y2I1Njc3MjJjMWFhZmJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9OZXdQcm9qZWN0L0Zvcm1cIjtcbmltcG9ydCBUb2dnbGVEaXNwbGF5IGZyb20gJ3JlYWN0LXRvZ2dsZS1kaXNwbGF5JztcblxudmFyIE1haW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd0Zvcm06IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBfdG9nZ2xlRm9ybSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dGb3JtOiAhdGhpcy5zdGF0ZS5zaG93Rm9ybVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLl90b2dnbGVGb3JtfSA+XG4gICAgICAgICAgVG9nZ2xlIEZvcm1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL2kuaHVmZnBvc3QuY29tL2dlbi8xNDY5NTUzL2ltYWdlcy9vLU5FVy1PUkxFQU5TLWZhY2Vib29rLmpwZ1wiLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04IGZvcm1GbGV4XCI+XG4gICAgICAgICAgPFRvZ2dsZURpc3BsYXkgc2hvdz17dGhpcy5zdGF0ZS5zaG93Rm9ybX0+XG4gICAgICAgICAgICA8Rm9ybS8+XG4gICAgICAgICAgPC9Ub2dnbGVEaXNwbGF5PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2pzL2NvbXBvbmVudHMvTWFpbi5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=