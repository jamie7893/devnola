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
	        "div",
	        { className: "col-md-5 main-left" },
	        _react2.default.createElement(
	          "p",
	          null,
	          " sadksjakdhsajkdhhasjk "
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "col-md-7 formFlex main-right" },
	        _react2.default.createElement(
	          "button",
	          { className: "defalt-btn", onClick: this._toggleForm },
	          "Toggle Form"
	        ),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL01haW4uanM/YzEzYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBSSxPQUFPLGdCQUFNLFdBQU4sQ0FBa0I7QUFBQTtBQUMzQixrQkFEMkIsNkJBQ1Q7QUFDaEIsWUFBTztBQUNMLGlCQUFVO0FBREwsTUFBUDtBQUdELElBTDBCO0FBTzNCLGNBUDJCLHlCQU9iO0FBQ1osVUFBSyxRQUFMLENBQWM7QUFDWixpQkFBVSxDQUFDLEtBQUssS0FBTCxDQUFXO0FBRFYsTUFBZDtBQUdELElBWDBCOzs7QUFhM0IsV0FBUSxrQkFBVztBQUNqQixZQUVFO0FBQUE7T0FBQSxFQUFLLFdBQU0sS0FBWDtPQUNFO0FBQUE7U0FBQSxFQUFLLFdBQU0sb0JBQVg7U0FDRTtBQUFBO1dBQUE7V0FBQTtBQUFBO0FBREYsUUFERjtPQUtFO0FBQUE7U0FBQSxFQUFLLFdBQU0sOEJBQVg7U0FDRTtBQUFBO1dBQUEsRUFBUSxXQUFNLFlBQWQsRUFBMkIsU0FBUyxLQUFLLFdBQXpDO1dBQUE7QUFBQSxVQURGO1NBSUU7QUFBQTtXQUFBLEVBQWUsTUFBTSxLQUFLLEtBQUwsQ0FBVyxRQUFoQztXQUNFO0FBREY7QUFKRjtBQUxGLE1BRkY7QUFtQkQ7QUFqQzBCLEVBQWxCLENBQVg7O21CQW9DZSxJIiwiZmlsZSI6IjAuM2VmYTc4MDdhOWQ5Y2RkYzMxYzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL05ld1Byb2plY3QvRm9ybVwiO1xuaW1wb3J0IFRvZ2dsZURpc3BsYXkgZnJvbSAncmVhY3QtdG9nZ2xlLWRpc3BsYXknO1xuXG52YXIgTWFpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93Rm9ybTogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIF90b2dnbGVGb3JtKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd0Zvcm06ICF0aGlzLnN0YXRlLnNob3dGb3JtXG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNSBtYWluLWxlZnRcIj5cbiAgICAgICAgICA8cD4gc2Fka3NqYWtkaHNhamtkaGhhc2prIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03IGZvcm1GbGV4IG1haW4tcmlnaHRcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVmYWx0LWJ0blwiIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZUZvcm19ID5cbiAgICAgICAgICAgIFRvZ2dsZSBGb3JtXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPFRvZ2dsZURpc3BsYXkgc2hvdz17dGhpcy5zdGF0ZS5zaG93Rm9ybX0+XG4gICAgICAgICAgICA8Rm9ybS8+XG4gICAgICAgICAgPC9Ub2dnbGVEaXNwbGF5PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vanMvY29tcG9uZW50cy9NYWluLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==