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
	        { className: "col-md-5", "main-left": true },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL01haW4uanM/YzEzYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBSSxPQUFPLGdCQUFNLFdBQU4sQ0FBa0I7QUFBQTtBQUMzQixrQkFEMkIsNkJBQ1Q7QUFDaEIsWUFBTztBQUNMLGlCQUFVO0FBREwsTUFBUDtBQUdELElBTDBCO0FBTzNCLGNBUDJCLHlCQU9iO0FBQ1osVUFBSyxRQUFMLENBQWM7QUFDWixpQkFBVSxDQUFDLEtBQUssS0FBTCxDQUFXO0FBRFYsTUFBZDtBQUdELElBWDBCOzs7QUFhM0IsV0FBUSxrQkFBVztBQUNqQixZQUVFO0FBQUE7T0FBQSxFQUFLLFdBQU0sS0FBWDtPQUNFO0FBQUE7U0FBQSxFQUFRLFNBQVMsS0FBSyxXQUF0QjtTQUFBO0FBQUEsUUFERjtPQUlFO0FBQUE7U0FBQSxFQUFLLFdBQU0sVUFBWCxFQUFzQixpQkFBdEI7U0FDRTtBQUFBO1dBQUE7V0FBQTtBQUFBO0FBREYsUUFKRjtPQVFFO0FBQUE7U0FBQSxFQUFLLFdBQU0sOEJBQVg7U0FDRTtBQUFBO1dBQUEsRUFBZSxNQUFNLEtBQUssS0FBTCxDQUFXLFFBQWhDO1dBQ0U7QUFERjtBQURGO0FBUkYsTUFGRjtBQW1CRDtBQWpDMEIsRUFBbEIsQ0FBWDs7bUJBb0NlLEkiLCJmaWxlIjoiMC4yMzEwOTNkZTgxYTg4YmJkZjJhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vTmV3UHJvamVjdC9Gb3JtXCI7XG5pbXBvcnQgVG9nZ2xlRGlzcGxheSBmcm9tICdyZWFjdC10b2dnbGUtZGlzcGxheSc7XG5cbnZhciBNYWluID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3dGb3JtOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgX3RvZ2dsZUZvcm0oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93Rm9ybTogIXRoaXMuc3RhdGUuc2hvd0Zvcm1cbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLl90b2dnbGVGb3JtfSA+XG4gICAgICAgICAgVG9nZ2xlIEZvcm1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNVwiIG1haW4tbGVmdD5cbiAgICAgICAgICA8cD4gc2Fka3NqYWtkaHNhamtkaGhhc2prIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03IGZvcm1GbGV4IG1haW4tcmlnaHRcIj5cbiAgICAgICAgICA8VG9nZ2xlRGlzcGxheSBzaG93PXt0aGlzLnN0YXRlLnNob3dGb3JtfT5cbiAgICAgICAgICAgIDxGb3JtLz5cbiAgICAgICAgICA8L1RvZ2dsZURpc3BsYXk+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9qcy9jb21wb25lbnRzL01haW4uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9