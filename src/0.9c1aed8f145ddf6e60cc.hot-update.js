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
	          _reactAddonsCssTransitionGroup2.default,
	          { transitionName: "example", transitionEnterTimeout: 500, transitionLeaveTimeout: 300 },
	          _react2.default.createElement(_Form2.default, { key: "1" })
	        )
	      )
	    );
	  }
	});
	
	exports.default = Main;

/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL01haW4uanM/YzEzYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQSxLQUFJLE9BQU8sZ0JBQU0sV0FBTixDQUFrQjtBQUFBO0FBQzNCLGtCQUQyQiw2QkFDVDtBQUNoQixZQUFPO0FBQ0wsaUJBQVU7QUFETCxNQUFQO0FBR0QsSUFMMEI7QUFPM0IsY0FQMkIseUJBT2I7QUFDWixVQUFLLFFBQUwsQ0FBYztBQUNaLGlCQUFVLENBQUMsS0FBSyxLQUFMLENBQVc7QUFEVixNQUFkO0FBR0QsSUFYMEI7OztBQWEzQixXQUFRLGtCQUFXO0FBQ2pCLFlBRUU7QUFBQTtPQUFBLEVBQUssV0FBTSxLQUFYO09BQ0U7QUFBQTtTQUFBLEVBQUssV0FBTSxvQkFBWDtTQUNFO0FBQUE7V0FBQTtXQUFBO0FBQUE7QUFERixRQURGO09BS0U7QUFBQTtTQUFBLEVBQUssV0FBTSxxQkFBWDtTQUNFO0FBQUE7V0FBQSxFQUFRLFdBQU0sNkJBQWQsRUFBNEMsU0FBUyxLQUFLLFdBQTFEO1dBQUE7QUFBQSxVQURGO1NBS0k7QUFBQTtXQUFBLEVBQXlCLGdCQUFlLFNBQXhDLEVBQWtELHdCQUF3QixHQUExRSxFQUErRSx3QkFBd0IsR0FBdkc7V0FFQSxnREFBTSxLQUFJLEdBQVY7QUFGQTtBQUxKO0FBTEYsTUFGRjtBQXVCRDtBQXJDMEIsRUFBbEIsQ0FBWDs7bUJBd0NlLEkiLCJmaWxlIjoiMC45YzFhZWQ4ZjE0NWRkZjZlNjBjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vTmV3UHJvamVjdC9Gb3JtXCI7XG5pbXBvcnQgVG9nZ2xlRGlzcGxheSBmcm9tICdyZWFjdC10b2dnbGUtZGlzcGxheSc7XG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJztcbnZhciBNYWluID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3dGb3JtOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgX3RvZ2dsZUZvcm0oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93Rm9ybTogIXRoaXMuc3RhdGUuc2hvd0Zvcm1cbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IG1haW4tbGVmdFwiPlxuICAgICAgICAgIDxwPiBzYWRrc2pha2Roc2Fqa2RoaGFzamsgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggbWFpbi1yaWdodFwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgc2hvd0Zvcm1CdG5cIiBvbkNsaWNrPXt0aGlzLl90b2dnbGVGb3JtfSA+XG4gICAgICAgICAgICBUb2dnbGUgRm9ybVxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8UmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgdHJhbnNpdGlvbk5hbWU9XCJleGFtcGxlXCIgdHJhbnNpdGlvbkVudGVyVGltZW91dD17NTAwfSB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXszMDB9PlxuXG4gICAgICAgICAgICA8Rm9ybSBrZXk9XCIxXCIvPlxuXG4gICAgICAgIDwvUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXA+XG4gICAgXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9qcy9jb21wb25lbnRzL01haW4uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9