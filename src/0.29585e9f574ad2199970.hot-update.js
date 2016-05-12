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
	        { className: "col-md-3 main-left" },
	        _react2.default.createElement(
	          "p",
	          null,
	          " sadksjakdhsajkdhhasjk "
	        ),
	        _react2.default.createElement(
	          "button",
	          { className: "btn btn-default showFormBtn", onClick: this._toggleForm },
	          "Toggle Form"
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "col-md-9 main-right" },
	        _react2.default.createElement("style", null),
	        _react2.default.createElement(
	          "div",
	          { id: "background-carousel" },
	          _react2.default.createElement(
	            "div",
	            { id: "myCarousel", className: "carousel slide", "data-ride": "carousel" },
	            _react2.default.createElement(
	              "div",
	              { className: "carousel-inner" },
	              _react2.default.createElement("div", { className: "item active", style: "background-image:url(http://placehold.it/1600x800/)" }),
	              _react2.default.createElement("div", { className: "item", style: "background-image:url(http://placehold.it/1600x800/)" }),
	              _react2.default.createElement("div", { className: "item", style: "background-image:url(http://placehold.it/1600x800/)" })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { id: "content-wrapper" },
	          _react2.default.createElement(
	            "div",
	            { className: "container" },
	            _react2.default.createElement(
	              "div",
	              { className: "page-header" },
	              _react2.default.createElement(
	                "h3",
	                null,
	                "Background Carousel"
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "well", style: "opacity:0.6;" },
	              _react2.default.createElement(
	                "p",
	                null,
	                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
	              )
	            )
	          )
	        ),
	        _react2.default.createElement("script", { src: "http://codeorigin.jquery.com/jquery-1.10.2.min.js" }),
	        _react2.default.createElement("script", { src: "//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js" }),
	        _react2.default.createElement(
	          "script",
	          null,
	          "$(document).ready(function() ",
	          $('#myCarousel').carousel({
	            pause: 'none'
	          }),
	          ");"
	        )
	      )
	    );
	  }
	});
	
	exports.default = Main;

/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL01haW4uanM/YzEzYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBSSxPQUFPLGdCQUFNLFdBQU4sQ0FBa0I7QUFBQTtBQUMzQixrQkFEMkIsNkJBQ1Q7QUFDaEIsWUFBTztBQUNMLGlCQUFVO0FBREwsTUFBUDtBQUdELElBTDBCO0FBTzNCLGNBUDJCLHlCQU9iO0FBQ1osVUFBSyxRQUFMLENBQWM7QUFDWixpQkFBVSxDQUFDLEtBQUssS0FBTCxDQUFXO0FBRFYsTUFBZDtBQUdELElBWDBCOzs7QUFhM0IsV0FBUSxrQkFBVztBQUNqQixZQUVFO0FBQUE7T0FBQSxFQUFLLFdBQU0sS0FBWDtPQUNFO0FBQUE7U0FBQSxFQUFLLFdBQU0sb0JBQVg7U0FDRTtBQUFBO1dBQUE7V0FBQTtBQUFBLFVBREY7U0FFSTtBQUFBO1dBQUEsRUFBUSxXQUFNLDZCQUFkLEVBQTRDLFNBQVMsS0FBSyxXQUExRDtXQUFBO0FBQUE7QUFGSixRQURGO09BUUU7QUFBQTtTQUFBLEVBQUssV0FBTSxxQkFBWDtTQUNFLDRDQURGO1NBS0U7QUFBQTtXQUFBLEVBQUssSUFBRyxxQkFBUjtXQUNJO0FBQUE7YUFBQSxFQUFLLElBQUcsWUFBUixFQUFxQixXQUFNLGdCQUEzQixFQUE0QyxhQUFVLFVBQXREO2FBQ0U7QUFBQTtlQUFBLEVBQUssV0FBTSxnQkFBWDtlQUNFLHVDQUFLLFdBQU0sYUFBWCxFQUF5QixPQUFNLHFEQUEvQixHQURGO2VBRUUsdUNBQUssV0FBTSxNQUFYLEVBQWtCLE9BQU0scURBQXhCLEdBRkY7ZUFHRSx1Q0FBSyxXQUFNLE1BQVgsRUFBa0IsT0FBTSxxREFBeEI7QUFIRjtBQURGO0FBREosVUFMRjtTQWdCRTtBQUFBO1dBQUEsRUFBSyxJQUFHLGlCQUFSO1dBRUM7QUFBQTthQUFBLEVBQUssV0FBTSxXQUFYO2FBQ087QUFBQTtlQUFBLEVBQUssV0FBTSxhQUFYO2VBQXlCO0FBQUE7aUJBQUE7aUJBQUE7QUFBQTtBQUF6QixjQURQO2FBRU87QUFBQTtlQUFBLEVBQUssV0FBTSxNQUFYLEVBQWtCLE9BQU0sY0FBeEI7ZUFBdUM7QUFBQTtpQkFBQTtpQkFBQTtBQUFBO0FBQXZDO0FBRlA7QUFGRCxVQWhCRjtTQXlCRSwwQ0FBUSxLQUFJLG1EQUFaLEdBekJGO1NBMEJFLDBDQUFRLEtBQUksK0RBQVosR0ExQkY7U0EyQkU7QUFBQTtXQUFBO1dBQUE7V0FHQyxFQUFFLGFBQUYsRUFBaUIsUUFBakIsQ0FBMEI7QUFDekIsb0JBQU87QUFEa0IsWUFBMUIsQ0FIRDtXQUFBO0FBQUE7QUEzQkY7QUFSRixNQUZGO0FBbUREO0FBakUwQixFQUFsQixDQUFYOzttQkFvRWUsSSIsImZpbGUiOiIwLjI5NTg1ZTlmNTc0YWQyMTk5OTcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9OZXdQcm9qZWN0L0Zvcm1cIjtcbmltcG9ydCBUb2dnbGVEaXNwbGF5IGZyb20gJ3JlYWN0LXRvZ2dsZS1kaXNwbGF5JztcblxudmFyIE1haW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd0Zvcm06IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBfdG9nZ2xlRm9ybSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dGb3JtOiAhdGhpcy5zdGF0ZS5zaG93Rm9ybVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTMgbWFpbi1sZWZ0XCI+XG4gICAgICAgICAgPHA+IHNhZGtzamFrZGhzYWprZGhoYXNqayA8L3A+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHNob3dGb3JtQnRuXCIgb25DbGljaz17dGhpcy5fdG9nZ2xlRm9ybX0gPlxuICAgICAgICAgICAgICBUb2dnbGUgRm9ybVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOSBtYWluLXJpZ2h0XCI+XG4gICAgICAgICAgPHN0eWxlPlxuXG4gICAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICAgIDxkaXYgaWQ9XCJiYWNrZ3JvdW5kLWNhcm91c2VsXCI+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJteUNhcm91c2VsXCIgY2xhc3M9XCJjYXJvdXNlbCBzbGlkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbSBhY3RpdmVcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHA6Ly9wbGFjZWhvbGQuaXQvMTYwMHg4MDAvKVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHA6Ly9wbGFjZWhvbGQuaXQvMTYwMHg4MDAvKVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHA6Ly9wbGFjZWhvbGQuaXQvMTYwMHg4MDAvKVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnQtd3JhcHBlclwiPlxuXG4gICAgICAgICAgXHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXJcIj48aDM+QmFja2dyb3VuZCBDYXJvdXNlbDwvaDM+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2VsbFwiIHN0eWxlPVwib3BhY2l0eTowLjY7XCI+PHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwgc2VkIGRpYW0gbm9udW15IGVpcm1vZCB0ZW1wb3IgaW52aWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdXlhbSBlcmF0LCBzZWQgZGlhbSB2b2x1cHR1YS4gQXQgdmVybyBlb3MgZXQgYWNjdXNhbSBldCBqdXN0byBkdW8gZG9sb3JlcyBldCBlYSByZWJ1bS4gU3RldCBjbGl0YSBrYXNkIGd1YmVyZ3Jlbiwgbm8gc2VhIHRha2ltYXRhIHNhbmN0dXMgZXN0IExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2V0ZXR1ciBzYWRpcHNjaW5nIGVsaXRyLCBzZWQgZGlhbSBub251bXkgZWlybW9kIHRlbXBvciBpbnZpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1eWFtIGVyYXQsIHNlZCBkaWFtIHZvbHVwdHVhLiBBdCB2ZXJvIGVvcyBldCBhY2N1c2FtIGV0IGp1c3RvIGR1byBkb2xvcmVzIGV0IGVhIHJlYnVtLiBTdGV0IGNsaXRhIGthc2QgZ3ViZXJncmVuLCBubyBzZWEgdGFraW1hdGEgc2FuY3R1cyBlc3QgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteSBlaXJtb2QgdGVtcG9yIGludmlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXV5YW0gZXJhdCwgc2VkIGRpYW0gdm9sdXB0dWEuIEF0IHZlcm8gZW9zIGV0IGFjY3VzYW0gZXQganVzdG8gZHVvIGRvbG9yZXMgZXQgZWEgcmVidW0uIFN0ZXQgY2xpdGEga2FzZCBndWJlcmdyZW4sIG5vIHNlYSB0YWtpbWF0YSBzYW5jdHVzIGVzdCBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC48L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHA6Ly9jb2Rlb3JpZ2luLmpxdWVyeS5jb20vanF1ZXJ5LTEuMTAuMi5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi8vbmV0ZG5hLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMC4zL2pzL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgXHQkKCcjbXlDYXJvdXNlbCcpLmNhcm91c2VsKHtcbiAgICAgICAgICBcdFx0cGF1c2U6ICdub25lJ1xuICAgICAgICAgIFx0fSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgICA8L3NjcmlwdD5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vanMvY29tcG9uZW50cy9NYWluLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==