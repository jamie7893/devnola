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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL01haW4uanM/YzEzYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBSSxPQUFPLGdCQUFNLFdBQU4sQ0FBa0I7QUFBQTtBQUMzQixrQkFEMkIsNkJBQ1Q7QUFDaEIsWUFBTztBQUNMLGlCQUFVO0FBREwsTUFBUDtBQUdELElBTDBCO0FBTzNCLGNBUDJCLHlCQU9iO0FBQ1osVUFBSyxRQUFMLENBQWM7QUFDWixpQkFBVSxDQUFDLEtBQUssS0FBTCxDQUFXO0FBRFYsTUFBZDtBQUdELElBWDBCOzs7QUFhM0IsV0FBUSxrQkFBVztBQUNqQixZQUVFO0FBQUE7T0FBQSxFQUFLLFdBQU0sS0FBWDtPQUNFO0FBQUE7U0FBQSxFQUFLLFdBQU0sb0JBQVg7U0FDRTtBQUFBO1dBQUE7V0FBQTtBQUFBLFVBREY7U0FFSTtBQUFBO1dBQUEsRUFBUSxXQUFNLDZCQUFkLEVBQTRDLFNBQVMsS0FBSyxXQUExRDtXQUFBO0FBQUE7QUFGSixRQURGO09BUUU7QUFBQTtTQUFBLEVBQUssV0FBTSxxQkFBWDtTQUNFLDRDQURGO1NBS0U7QUFBQTtXQUFBLEVBQUssSUFBRyxxQkFBUjtXQUNJO0FBQUE7YUFBQSxFQUFLLElBQUcsWUFBUixFQUFxQixXQUFNLGdCQUEzQixFQUE0QyxhQUFVLFVBQXREO2FBQ0U7QUFBQTtlQUFBLEVBQUssV0FBTSxnQkFBWDtlQUNFLHVDQUFLLFdBQU0sYUFBWCxFQUF5QixPQUFNLHFEQUEvQixHQURGO2VBRUUsdUNBQUssV0FBTSxNQUFYLEVBQWtCLE9BQU0scURBQXhCLEdBRkY7ZUFHRSx1Q0FBSyxXQUFNLE1BQVgsRUFBa0IsT0FBTSxxREFBeEI7QUFIRjtBQURGO0FBREosVUFMRjtTQWdCRTtBQUFBO1dBQUEsRUFBSyxJQUFHLGlCQUFSO1dBRUM7QUFBQTthQUFBLEVBQUssV0FBTSxXQUFYO2FBQ087QUFBQTtlQUFBLEVBQUssV0FBTSxhQUFYO2VBQXlCO0FBQUE7aUJBQUE7aUJBQUE7QUFBQTtBQUF6QixjQURQO2FBRU87QUFBQTtlQUFBLEVBQUssV0FBTSxNQUFYLEVBQWtCLE9BQU0sY0FBeEI7ZUFBdUM7QUFBQTtpQkFBQTtpQkFBQTtBQUFBO0FBQXZDO0FBRlA7QUFGRCxVQWhCRjtTQXlCRTtBQUFBO1dBQUE7V0FBQTtXQUdDLEVBQUUsYUFBRixFQUFpQixRQUFqQixDQUEwQjtBQUN6QixvQkFBTztBQURrQixZQUExQixDQUhEO1dBQUE7QUFBQTtBQXpCRjtBQVJGLE1BRkY7QUFpREQ7QUEvRDBCLEVBQWxCLENBQVg7O21CQWtFZSxJIiwiZmlsZSI6IjAuMjg3YWQ4YzYzMmRiMzc5MTY0ODMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL05ld1Byb2plY3QvRm9ybVwiO1xuaW1wb3J0IFRvZ2dsZURpc3BsYXkgZnJvbSAncmVhY3QtdG9nZ2xlLWRpc3BsYXknO1xuXG52YXIgTWFpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93Rm9ybTogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIF90b2dnbGVGb3JtKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd0Zvcm06ICF0aGlzLnN0YXRlLnNob3dGb3JtXG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBtYWluLWxlZnRcIj5cbiAgICAgICAgICA8cD4gc2Fka3NqYWtkaHNhamtkaGhhc2prIDwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgc2hvd0Zvcm1CdG5cIiBvbkNsaWNrPXt0aGlzLl90b2dnbGVGb3JtfSA+XG4gICAgICAgICAgICAgIFRvZ2dsZSBGb3JtXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC05IG1haW4tcmlnaHRcIj5cbiAgICAgICAgICA8c3R5bGU+XG5cbiAgICAgICAgICA8L3N0eWxlPlxuXG4gICAgICAgICAgPGRpdiBpZD1cImJhY2tncm91bmQtY2Fyb3VzZWxcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm15Q2Fyb3VzZWxcIiBjbGFzcz1cImNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIGFjdGl2ZVwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cDovL3BsYWNlaG9sZC5pdC8xNjAweDgwMC8pXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cDovL3BsYWNlaG9sZC5pdC8xNjAweDgwMC8pXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cDovL3BsYWNlaG9sZC5pdC8xNjAweDgwMC8pXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudC13cmFwcGVyXCI+XG5cbiAgICAgICAgICBcdDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlclwiPjxoMz5CYWNrZ3JvdW5kIENhcm91c2VsPC9oMz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWxsXCIgc3R5bGU9XCJvcGFjaXR5OjAuNjtcIj48cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2V0ZXR1ciBzYWRpcHNjaW5nIGVsaXRyLCBzZWQgZGlhbSBub251bXkgZWlybW9kIHRlbXBvciBpbnZpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1eWFtIGVyYXQsIHNlZCBkaWFtIHZvbHVwdHVhLiBBdCB2ZXJvIGVvcyBldCBhY2N1c2FtIGV0IGp1c3RvIGR1byBkb2xvcmVzIGV0IGVhIHJlYnVtLiBTdGV0IGNsaXRhIGthc2QgZ3ViZXJncmVuLCBubyBzZWEgdGFraW1hdGEgc2FuY3R1cyBlc3QgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteSBlaXJtb2QgdGVtcG9yIGludmlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXV5YW0gZXJhdCwgc2VkIGRpYW0gdm9sdXB0dWEuIEF0IHZlcm8gZW9zIGV0IGFjY3VzYW0gZXQganVzdG8gZHVvIGRvbG9yZXMgZXQgZWEgcmVidW0uIFN0ZXQgY2xpdGEga2FzZCBndWJlcmdyZW4sIG5vIHNlYSB0YWtpbWF0YSBzYW5jdHVzIGVzdCBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwgc2VkIGRpYW0gbm9udW15IGVpcm1vZCB0ZW1wb3IgaW52aWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdXlhbSBlcmF0LCBzZWQgZGlhbSB2b2x1cHR1YS4gQXQgdmVybyBlb3MgZXQgYWNjdXNhbSBldCBqdXN0byBkdW8gZG9sb3JlcyBldCBlYSByZWJ1bS4gU3RldCBjbGl0YSBrYXNkIGd1YmVyZ3Jlbiwgbm8gc2VhIHRha2ltYXRhIHNhbmN0dXMgZXN0IExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LjwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICBcdCQoJyNteUNhcm91c2VsJykuY2Fyb3VzZWwoe1xuICAgICAgICAgIFx0XHRwYXVzZTogJ25vbmUnXG4gICAgICAgICAgXHR9KVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIDwvc2NyaXB0PlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9qcy9jb21wb25lbnRzL01haW4uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9