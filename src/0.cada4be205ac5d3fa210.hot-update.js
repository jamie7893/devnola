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
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(240);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
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
	        { className: "col-md-4 main-left" },
	        _react2.default.createElement(
	          "p",
	          null,
	          " sadksjakdhsajkdhhasjk "
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "col-md-8 main-right" },
	        _react2.default.createElement(
	          "button",
	          { className: "btn btn-default showFormBtn", onClick: this._toggleForm },
	          "Toggle Form"
	        ),
	        _react2.default.createElement(
	          _reactToggleDisplay2.default,
	          { show: this.state.showForm },
	          _react2.default.createElement(
	            _reactAddonsCssTransitionGroup2.default,
	            { transitionName: "example", transitionAppear: true, transitionEnterTimeout: 500, transitionLeaveTimeout: 300 },
	            _react2.default.createElement(_Form2.default, { key: "1" })
	          )
	        )
	      )
	    );
	  }
	});
	
	exports.default = Main;

/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL01haW4uanM/YzEzYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQSxLQUFJLE9BQU8sZ0JBQU0sV0FBTixDQUFrQjtBQUFBO0FBQzNCLGtCQUQyQiw2QkFDVDtBQUNoQixZQUFPO0FBQ0wsaUJBQVU7QUFETCxNQUFQO0FBR0QsSUFMMEI7QUFPM0IsY0FQMkIseUJBT2I7QUFDWixVQUFLLFFBQUwsQ0FBYztBQUNaLGlCQUFVLENBQUMsS0FBSyxLQUFMLENBQVc7QUFEVixNQUFkO0FBR0QsSUFYMEI7OztBQWEzQixXQUFRLGtCQUFXO0FBQ2pCLFlBRUU7QUFBQTtPQUFBLEVBQUssV0FBTSxLQUFYO09BQ0U7QUFBQTtTQUFBLEVBQUssV0FBTSxvQkFBWDtTQUNFO0FBQUE7V0FBQTtXQUFBO0FBQUE7QUFERixRQURGO09BS0U7QUFBQTtTQUFBLEVBQUssV0FBTSxxQkFBWDtTQUNFO0FBQUE7V0FBQSxFQUFRLFdBQU0sNkJBQWQsRUFBNEMsU0FBUyxLQUFLLFdBQTFEO1dBQUE7QUFBQSxVQURGO1NBSUY7QUFBQTtXQUFBLEVBQWUsTUFBTSxLQUFLLEtBQUwsQ0FBVyxRQUFoQztXQUNNO0FBQUE7YUFBQSxFQUF5QixnQkFBZSxTQUF4QyxFQUFrRCxrQkFBa0IsSUFBcEUsRUFBMEUsd0JBQXdCLEdBQWxHLEVBQXVHLHdCQUF3QixHQUEvSDthQUVBLGdEQUFNLEtBQUksR0FBVjtBQUZBO0FBRE47QUFKRTtBQUxGLE1BRkY7QUF1QkQ7QUFyQzBCLEVBQWxCLENBQVg7O21CQXdDZSxJIiwiZmlsZSI6IjAuY2FkYTRiZTIwNWFjNWQzZmEyMTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL05ld1Byb2plY3QvRm9ybVwiO1xuaW1wb3J0IFRvZ2dsZURpc3BsYXkgZnJvbSAncmVhY3QtdG9nZ2xlLWRpc3BsYXknO1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCc7XG52YXIgTWFpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93Rm9ybTogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIF90b2dnbGVGb3JtKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd0Zvcm06ICF0aGlzLnN0YXRlLnNob3dGb3JtXG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBtYWluLWxlZnRcIj5cbiAgICAgICAgICA8cD4gc2Fka3NqYWtkaHNhamtkaGhhc2prIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04IG1haW4tcmlnaHRcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHNob3dGb3JtQnRuXCIgb25DbGljaz17dGhpcy5fdG9nZ2xlRm9ybX0gPlxuICAgICAgICAgICAgVG9nZ2xlIEZvcm1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDxUb2dnbGVEaXNwbGF5IHNob3c9e3RoaXMuc3RhdGUuc2hvd0Zvcm19PlxuICAgICAgICAgICAgPFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIHRyYW5zaXRpb25OYW1lPVwiZXhhbXBsZVwiIHRyYW5zaXRpb25BcHBlYXI9e3RydWV9IHRyYW5zaXRpb25FbnRlclRpbWVvdXQ9ezUwMH0gdHJhbnNpdGlvbkxlYXZlVGltZW91dD17MzAwfT5cblxuICAgICAgICAgICAgPEZvcm0ga2V5PVwiMVwiLz5cblxuICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxuICAgICAgICAgIDwvVG9nZ2xlRGlzcGxheT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2pzL2NvbXBvbmVudHMvTWFpbi5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=