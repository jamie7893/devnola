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
	            { transitionName: "example", transitionEnterTimeout: 500, transitionLeaveTimeout: 300 },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL01haW4uanM/YzEzYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQSxLQUFJLE9BQU8sZ0JBQU0sV0FBTixDQUFrQjtBQUFBO0FBQzNCLGtCQUQyQiw2QkFDVDtBQUNoQixZQUFPO0FBQ0wsaUJBQVU7QUFETCxNQUFQO0FBR0QsSUFMMEI7QUFPM0IsY0FQMkIseUJBT2I7QUFDWixVQUFLLFFBQUwsQ0FBYztBQUNaLGlCQUFVLENBQUMsS0FBSyxLQUFMLENBQVc7QUFEVixNQUFkO0FBR0QsSUFYMEI7OztBQWEzQixXQUFRLGtCQUFXO0FBQ2pCLFlBRUU7QUFBQTtPQUFBLEVBQUssV0FBTSxLQUFYO09BQ0U7QUFBQTtTQUFBLEVBQUssV0FBTSxvQkFBWDtTQUNFO0FBQUE7V0FBQTtXQUFBO0FBQUE7QUFERixRQURGO09BS0U7QUFBQTtTQUFBLEVBQUssV0FBTSxxQkFBWDtTQUNFO0FBQUE7V0FBQSxFQUFRLFdBQU0sNkJBQWQsRUFBNEMsU0FBUyxLQUFLLFdBQTFEO1dBQUE7QUFBQSxVQURGO1NBSUU7QUFBQTtXQUFBLEVBQWUsTUFBTSxLQUFLLEtBQUwsQ0FBVyxRQUFoQztXQUNFO0FBQUE7YUFBQSxFQUF5QixnQkFBZSxTQUF4QyxFQUFrRCx3QkFBd0IsR0FBMUUsRUFBK0Usd0JBQXdCLEdBQXZHO2FBQ0E7QUFEQTtBQURGO0FBSkY7QUFMRixNQUZGO0FBc0JEO0FBcEMwQixFQUFsQixDQUFYOzttQkF1Q2UsSSIsImZpbGUiOiIwLjA2Y2ZkM2VhYTI4NzdhNTM2MGQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9OZXdQcm9qZWN0L0Zvcm1cIjtcbmltcG9ydCBUb2dnbGVEaXNwbGF5IGZyb20gJ3JlYWN0LXRvZ2dsZS1kaXNwbGF5JztcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnO1xudmFyIE1haW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd0Zvcm06IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBfdG9nZ2xlRm9ybSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dGb3JtOiAhdGhpcy5zdGF0ZS5zaG93Rm9ybVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgbWFpbi1sZWZ0XCI+XG4gICAgICAgICAgPHA+IHNhZGtzamFrZGhzYWprZGhoYXNqayA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBtYWluLXJpZ2h0XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBzaG93Rm9ybUJ0blwiIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZUZvcm19ID5cbiAgICAgICAgICAgIFRvZ2dsZSBGb3JtXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPFRvZ2dsZURpc3BsYXkgc2hvdz17dGhpcy5zdGF0ZS5zaG93Rm9ybX0+XG4gICAgICAgICAgICA8UmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgdHJhbnNpdGlvbk5hbWU9XCJleGFtcGxlXCIgdHJhbnNpdGlvbkVudGVyVGltZW91dD17NTAwfSB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXszMDB9PlxuICAgICAgICAgICAgPEZvcm0vPlxuICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxuXG4gICAgICAgICAgPC9Ub2dnbGVEaXNwbGF5PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vanMvY29tcG9uZW50cy9NYWluLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==