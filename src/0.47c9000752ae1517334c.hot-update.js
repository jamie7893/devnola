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
	    console.log('sjdasd');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL01haW4uanM/YzEzYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBSSxPQUFPLGdCQUFNLFdBQU4sQ0FBa0I7QUFBQTtBQUMzQixrQkFEMkIsNkJBQ1Q7QUFDaEIsWUFBTztBQUNMLGlCQUFVO0FBREwsTUFBUDtBQUdELElBTDBCO0FBTzNCLGNBUDJCLHlCQU9iO0FBQ1osYUFBUSxHQUFSLENBQVksUUFBWjtBQUNBLFNBQUcsS0FBSyxLQUFMLENBQVcsUUFBWCxLQUF3QixLQUEzQixFQUFrQztBQUNsQyxZQUFLLFFBQUwsQ0FBYztBQUNaLG1CQUFVO0FBREUsUUFBZDtBQUdELE1BSkMsTUFJSztBQUNMLFlBQUssUUFBTCxDQUFjO0FBQ1osbUJBQVU7QUFERSxRQUFkO0FBR0Q7QUFDQSxJQWxCMEI7OztBQW9CM0IsV0FBUSxrQkFBVztBQUNqQixZQUNFO0FBQUE7T0FBQSxFQUFLLFdBQU0sVUFBWDtPQUVFO0FBQUE7U0FBQSxFQUFRLFNBQVMsS0FBSyxLQUFMLENBQVcsV0FBNUI7U0FBQTtBQUFBLFFBRkY7T0FJTjtBQUFBO1NBQUEsRUFBZSxNQUFNLEtBQUssS0FBTCxDQUFXLFFBQWhDO1NBQ007QUFETjtBQUpNLE1BREY7QUFZRDtBQWpDMEIsRUFBbEIsQ0FBWDs7bUJBb0NlLEkiLCJmaWxlIjoiMC40N2M5MDAwNzUyYWUxNTE3MzM0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vTmV3UHJvamVjdC9Gb3JtXCI7XG5pbXBvcnQgVG9nZ2xlRGlzcGxheSBmcm9tICdyZWFjdC10b2dnbGUtZGlzcGxheSc7XG5cbnZhciBNYWluID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3dGb3JtOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgX3RvZ2dsZUZvcm0oKSB7XG4gICAgY29uc29sZS5sb2coJ3NqZGFzZCcpXG4gICAgaWYodGhpcy5zdGF0ZS5zaG93Rm9ybSA9PT0gZmFsc2UpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dGb3JtOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93Rm9ybTogZmFsc2VcbiAgICB9KTtcbiAgfVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtRmxleFwiPlxuXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdGF0ZS5fdG9nZ2xlRm9ybX0gPlRvZ2dsZSBGb3JtPC9idXR0b24+XG5cbjxUb2dnbGVEaXNwbGF5IHNob3c9e3RoaXMuc3RhdGUuc2hvd0Zvcm19PlxuICAgICAgPEZvcm0vPlxuICAgICAgPC9Ub2dnbGVEaXNwbGF5PlxuXG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9qcy9jb21wb25lbnRzL01haW4uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9