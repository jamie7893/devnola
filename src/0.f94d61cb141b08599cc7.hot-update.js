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
	      { className: "container" },
	      _react2.default.createElement(
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
	      )
	    );
	  }
	});
	
	exports.default = Main;

/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL01haW4uanM/YzEzYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBSSxPQUFPLGdCQUFNLFdBQU4sQ0FBa0I7QUFBQTtBQUMzQixrQkFEMkIsNkJBQ1Q7QUFDaEIsWUFBTztBQUNMLGlCQUFVO0FBREwsTUFBUDtBQUdELElBTDBCO0FBTzNCLGNBUDJCLHlCQU9iO0FBQ1osVUFBSyxRQUFMLENBQWM7QUFDWixpQkFBVSxDQUFDLEtBQUssS0FBTCxDQUFXO0FBRFYsTUFBZDtBQUdELElBWDBCOzs7QUFhM0IsV0FBUSxrQkFBVztBQUNqQixZQUNFO0FBQUE7T0FBQSxFQUFLLFdBQU0sV0FBWDtPQUNBO0FBQUE7U0FBQSxFQUFLLFdBQU0sS0FBWDtTQUNFO0FBQUE7V0FBQSxFQUFRLFNBQVMsS0FBSyxXQUF0QjtXQUFBO0FBQUEsVUFERjtTQUlFO0FBQUE7V0FBQSxFQUFLLFdBQU0sVUFBWDtXQUNFLHVDQUFLLEtBQUkscUVBQVQ7QUFERixVQUpGO1NBUUU7QUFBQTtXQUFBLEVBQUssV0FBTSxtQkFBWDtXQUNFO0FBQUE7YUFBQSxFQUFlLE1BQU0sS0FBSyxLQUFMLENBQVcsUUFBaEM7YUFDRTtBQURGO0FBREY7QUFSRjtBQURBLE1BREY7QUFtQkQ7QUFqQzBCLEVBQWxCLENBQVg7O21CQW9DZSxJIiwiZmlsZSI6IjAuZjk0ZDYxY2IxNDFiMDg1OTljYzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL05ld1Byb2plY3QvRm9ybVwiO1xuaW1wb3J0IFRvZ2dsZURpc3BsYXkgZnJvbSAncmVhY3QtdG9nZ2xlLWRpc3BsYXknO1xuXG52YXIgTWFpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93Rm9ybTogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIF90b2dnbGVGb3JtKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd0Zvcm06ICF0aGlzLnN0YXRlLnNob3dGb3JtXG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZUZvcm19ID5cbiAgICAgICAgICBUb2dnbGUgRm9ybVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vaS5odWZmcG9zdC5jb20vZ2VuLzE0Njk1NTMvaW1hZ2VzL28tTkVXLU9STEVBTlMtZmFjZWJvb2suanBnXCIvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggZm9ybUZsZXhcIj5cbiAgICAgICAgICA8VG9nZ2xlRGlzcGxheSBzaG93PXt0aGlzLnN0YXRlLnNob3dGb3JtfT5cbiAgICAgICAgICAgIDxGb3JtLz5cbiAgICAgICAgICA8L1RvZ2dsZURpc3BsYXk+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vanMvY29tcG9uZW50cy9NYWluLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==