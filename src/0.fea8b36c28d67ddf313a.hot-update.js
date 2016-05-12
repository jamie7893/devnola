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
	
	var ReactCSSTransitionGroup = _react2.default.addons.CSSTransitionGroup;
	
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
	          ReactCSSTransitionGroup,
	          { transitionName: "thing" },
	          _react2.default.createElement(
	            _reactToggleDisplay2.default,
	            { show: this.state.showForm },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL01haW4uanM/YzEzYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBQ0EsS0FBSSwwQkFBMEIsZ0JBQU0sTUFBTixDQUFhLGtCQUEzQzs7QUFFQSxLQUFJLE9BQU8sZ0JBQU0sV0FBTixDQUFrQjtBQUFBO0FBQzNCLGtCQUQyQiw2QkFDVDtBQUNoQixZQUFPO0FBQ0wsaUJBQVU7QUFETCxNQUFQO0FBR0QsSUFMMEI7QUFPM0IsY0FQMkIseUJBT2I7QUFDWixVQUFLLFFBQUwsQ0FBYztBQUNaLGlCQUFVLENBQUMsS0FBSyxLQUFMLENBQVc7QUFEVixNQUFkO0FBR0QsSUFYMEI7OztBQWEzQixXQUFRLGtCQUFXO0FBQ2pCLFlBRUU7QUFBQTtPQUFBLEVBQUssV0FBTSxLQUFYO09BQ0U7QUFBQTtTQUFBLEVBQUssV0FBTSxvQkFBWDtTQUNFO0FBQUE7V0FBQTtXQUFBO0FBQUE7QUFERixRQURGO09BS0U7QUFBQTtTQUFBLEVBQUssV0FBTSxxQkFBWDtTQUNFO0FBQUE7V0FBQSxFQUFRLFdBQU0sNkJBQWQsRUFBNEMsU0FBUyxLQUFLLFdBQTFEO1dBQUE7QUFBQSxVQURGO1NBSVE7QUFBQyxrQ0FBRDtXQUFBLEVBQXlCLGdCQUFlLE9BQXhDO1dBQ1Y7QUFBQTthQUFBLEVBQWUsTUFBTSxLQUFLLEtBQUwsQ0FBVyxRQUFoQzthQUdNLGdEQUFNLEtBQUksR0FBVjtBQUhOO0FBRFU7QUFKUjtBQUxGLE1BRkY7QUF5QkQ7QUF2QzBCLEVBQWxCLENBQVg7O21CQTBDZSxJIiwiZmlsZSI6IjAuZmVhOGIzNmMyOGQ2N2RkZjMxM2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL05ld1Byb2plY3QvRm9ybVwiO1xuaW1wb3J0IFRvZ2dsZURpc3BsYXkgZnJvbSAncmVhY3QtdG9nZ2xlLWRpc3BsYXknO1xudmFyIFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwID0gUmVhY3QuYWRkb25zLkNTU1RyYW5zaXRpb25Hcm91cDtcblxudmFyIE1haW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd0Zvcm06IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBfdG9nZ2xlRm9ybSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dGb3JtOiAhdGhpcy5zdGF0ZS5zaG93Rm9ybVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgbWFpbi1sZWZ0XCI+XG4gICAgICAgICAgPHA+IHNhZGtzamFrZGhzYWprZGhoYXNqayA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBtYWluLXJpZ2h0XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBzaG93Rm9ybUJ0blwiIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZUZvcm19ID5cbiAgICAgICAgICAgIFRvZ2dsZSBGb3JtXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIHRyYW5zaXRpb25OYW1lPVwidGhpbmdcIj5cbiAgICAgIDxUb2dnbGVEaXNwbGF5IHNob3c9e3RoaXMuc3RhdGUuc2hvd0Zvcm19PlxuXG5cbiAgICAgICAgICAgIDxGb3JtIGtleT1cIjFcIi8+XG5cblxuICAgICAgICAgIDwvVG9nZ2xlRGlzcGxheT5cbiAgICAgICAgPC9SZWFjdENTU1RyYW5zaXRpb25Hcm91cD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2pzL2NvbXBvbmVudHMvTWFpbi5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=