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
	
	var _reactMotion = __webpack_require__(247);
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL01haW4uanM/YzEzYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsS0FBSSxPQUFPLGdCQUFNLFdBQU4sQ0FBa0I7QUFBQTtBQUMzQixrQkFEMkIsNkJBQ1Q7QUFDaEIsWUFBTztBQUNMLGlCQUFVO0FBREwsTUFBUDtBQUdELElBTDBCO0FBTzNCLGNBUDJCLHlCQU9iO0FBQ1osVUFBSyxRQUFMLENBQWM7QUFDWixpQkFBVSxDQUFDLEtBQUssS0FBTCxDQUFXO0FBRFYsTUFBZDtBQUdELElBWDBCOzs7QUFhM0IsV0FBUSxrQkFBVztBQUNqQixZQUVFO0FBQUE7T0FBQSxFQUFLLFdBQU0sS0FBWDtPQUNFO0FBQUE7U0FBQSxFQUFLLFdBQU0sb0JBQVg7U0FDRTtBQUFBO1dBQUE7V0FBQTtBQUFBO0FBREYsUUFERjtPQUtFO0FBQUE7U0FBQSxFQUFLLFdBQU0scUJBQVg7U0FDRTtBQUFBO1dBQUEsRUFBUSxXQUFNLDZCQUFkLEVBQTRDLFNBQVMsS0FBSyxXQUExRDtXQUFBO0FBQUEsVUFERjtTQUlRO0FBQUMsa0NBQUQ7V0FBQSxFQUF5QixnQkFBZSxPQUF4QztXQUNWO0FBQUE7YUFBQSxFQUFlLE1BQU0sS0FBSyxLQUFMLENBQVcsUUFBaEM7YUFHTSxnREFBTSxLQUFJLEdBQVY7QUFITjtBQURVO0FBSlI7QUFMRixNQUZGO0FBeUJEO0FBdkMwQixFQUFsQixDQUFYOzttQkEwQ2UsSSIsImZpbGUiOiIwLjBmMzE0ZDVhNTljMmU5YWIwZGVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9OZXdQcm9qZWN0L0Zvcm1cIjtcbmltcG9ydCBUb2dnbGVEaXNwbGF5IGZyb20gJ3JlYWN0LXRvZ2dsZS1kaXNwbGF5JztcbmltcG9ydCB7TW90aW9uLCBzcHJpbmd9IGZyb20gJ3JlYWN0LW1vdGlvbic7XG5cbnZhciBNYWluID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3dGb3JtOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgX3RvZ2dsZUZvcm0oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93Rm9ybTogIXRoaXMuc3RhdGUuc2hvd0Zvcm1cbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IG1haW4tbGVmdFwiPlxuICAgICAgICAgIDxwPiBzYWRrc2pha2Roc2Fqa2RoaGFzamsgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggbWFpbi1yaWdodFwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgc2hvd0Zvcm1CdG5cIiBvbkNsaWNrPXt0aGlzLl90b2dnbGVGb3JtfSA+XG4gICAgICAgICAgICBUb2dnbGUgRm9ybVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25Hcm91cCB0cmFuc2l0aW9uTmFtZT1cInRoaW5nXCI+XG4gICAgICA8VG9nZ2xlRGlzcGxheSBzaG93PXt0aGlzLnN0YXRlLnNob3dGb3JtfT5cblxuXG4gICAgICAgICAgICA8Rm9ybSBrZXk9XCIxXCIvPlxuXG5cbiAgICAgICAgICA8L1RvZ2dsZURpc3BsYXk+XG4gICAgICAgIDwvUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXA+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9qcy9jb21wb25lbnRzL01haW4uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9