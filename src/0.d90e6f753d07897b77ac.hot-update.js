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
	
	var _rcAnimate = __webpack_require__(261);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
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
	          _rcAnimate2.default,
	          {
	            component: "",
	            showProp: "visible",
	            transitionAppear: true,
	            transitionName: "fade" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL01haW4uanM/YzEzYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxLQUFJLE9BQU8sZ0JBQU0sV0FBTixDQUFrQjtBQUFBO0FBQzNCLGtCQUQyQiw2QkFDVDtBQUNoQixZQUFPO0FBQ0wsaUJBQVU7QUFETCxNQUFQO0FBR0QsSUFMMEI7QUFPM0IsY0FQMkIseUJBT2I7QUFDWixVQUFLLFFBQUwsQ0FBYztBQUNaLGlCQUFVLENBQUMsS0FBSyxLQUFMLENBQVc7QUFEVixNQUFkO0FBR0QsSUFYMEI7OztBQWEzQixXQUFRLGtCQUFXO0FBQ2pCLFlBRUU7QUFBQTtPQUFBLEVBQUssV0FBTSxLQUFYO09BQ0U7QUFBQTtTQUFBLEVBQUssV0FBTSxvQkFBWDtTQUNFO0FBQUE7V0FBQTtXQUFBO0FBQUE7QUFERixRQURGO09BS0U7QUFBQTtTQUFBLEVBQUssV0FBTSxxQkFBWDtTQUNFO0FBQUE7V0FBQSxFQUFRLFdBQU0sNkJBQWQsRUFBNEMsU0FBUyxLQUFLLFdBQTFEO1dBQUE7QUFBQSxVQURGO1NBSUU7QUFBQTtXQUFBO0FBQ1Esd0JBQVUsRUFEbEI7QUFFUSx1QkFBUyxTQUZqQjtBQUdRLG1DQUhSO0FBSVEsNkJBQWUsTUFKdkI7V0FLSjtBQUFBO2FBQUEsRUFBZSxNQUFNLEtBQUssS0FBTCxDQUFXLFFBQWhDO2FBQ00sZ0RBQU0sS0FBSSxHQUFWO0FBRE47QUFMSTtBQUpGO0FBTEYsTUFGRjtBQXlCRDtBQXZDMEIsRUFBbEIsQ0FBWDs7bUJBMENlLEkiLCJmaWxlIjoiMC5kOTBlNmY3NTNkMDc4OTdiNzdhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vTmV3UHJvamVjdC9Gb3JtXCI7XG5pbXBvcnQgVG9nZ2xlRGlzcGxheSBmcm9tICdyZWFjdC10b2dnbGUtZGlzcGxheSc7XG5pbXBvcnQgQW5pbWF0ZSBmcm9tICdyYy1hbmltYXRlJztcblxudmFyIE1haW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd0Zvcm06IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBfdG9nZ2xlRm9ybSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dGb3JtOiAhdGhpcy5zdGF0ZS5zaG93Rm9ybVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgbWFpbi1sZWZ0XCI+XG4gICAgICAgICAgPHA+IHNhZGtzamFrZGhzYWprZGhoYXNqayA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBtYWluLXJpZ2h0XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBzaG93Rm9ybUJ0blwiIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZUZvcm19ID5cbiAgICAgICAgICAgIFRvZ2dsZSBGb3JtXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPEFuaW1hdGVcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cIlwiXG4gICAgICAgICAgICAgICAgICBzaG93UHJvcD1cInZpc2libGVcIlxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkFwcGVhclxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJmYWRlXCI+XG4gICAgICA8VG9nZ2xlRGlzcGxheSBzaG93PXt0aGlzLnN0YXRlLnNob3dGb3JtfT5cbiAgICAgICAgICAgIDxGb3JtIGtleT1cIjFcIi8+XG4gICAgICAgICAgPC9Ub2dnbGVEaXNwbGF5PlxuICAgICAgICA8L0FuaW1hdGU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9qcy9jb21wb25lbnRzL01haW4uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9