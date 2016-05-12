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
	          " We are dev nola. We are dev nola. We are dev nola. We are dev nola. We are dev nola. We are dev nola. We are dev nola. We are dev nola. We are dev nola. We are dev nola. We are dev nola. We are dev nola. We are dev nola. "
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "col-md-9 main-right" },
	        _react2.default.createElement(
	          "div",
	          { id: "background-carousel" },
	          _react2.default.createElement(
	            "div",
	            { id: "myCarousel", className: "carousel slide", "data-ride": "carousel" },
	            _react2.default.createElement(
	              "div",
	              { className: "carousel-inner" },
	              _react2.default.createElement("div", { className: "item active", style: { backgroundImage: "url(http://www3.hilton.com/resources/media/hi/MSYNHHH/en_US/img/shared/full_page_image_gallery/main/HH_welcome_49_1270x560_FitToBoxSmallDimension_Center.jpg)" } }),
	              _react2.default.createElement("div", { className: "item", style: { backgroundImage: "url(https://assets3.thrillist.com/v1/image/1445503/size/tl-horizontal_main/where-to-find-the-best-boiled-crawfish-in-new-orleans.jpg)" } }),
	              _react2.default.createElement("div", { className: "item", style: { backgroundImage: "url(https://static-blog.restplatzboerse.at/files/2014/01/shutterstock_66926818.jpg)" } })
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
	                "h1",
	                { className: "titleh1" },
	                "Dev Nola"
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              null,
	              _react2.default.createElement(
	                _reactToggleDisplay2.default,
	                { show: this.state.showForm },
	                _react2.default.createElement(
	                  "button",
	                  { className: "btn btn-default closeForm", onClick: this._toggleForm },
	                  "Close Form"
	                ),
	                _react2.default.createElement(_Form2.default, null)
	              )
	            ),
	            _react2.default.createElement(
	              _reactToggleDisplay2.default,
	              { hide: this.state.showForm },
	              _react2.default.createElement(
	                "button",
	                { className: "btn btn-default showFormBtn", onClick: this._toggleForm },
	                "Create a new project!"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL01haW4uanM/YzEzYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBSSxPQUFPLGdCQUFNLFdBQU4sQ0FBa0I7QUFBQTtBQUMzQixrQkFEMkIsNkJBQ1Q7QUFDaEIsWUFBTztBQUNMLGlCQUFVO0FBREwsTUFBUDtBQUdELElBTDBCO0FBTzNCLGNBUDJCLHlCQU9iO0FBQ1osVUFBSyxRQUFMLENBQWM7QUFDWixpQkFBVSxDQUFDLEtBQUssS0FBTCxDQUFXO0FBRFYsTUFBZDtBQUdELElBWDBCOzs7QUFhM0IsV0FBUSxrQkFBVztBQUNqQixZQUVFO0FBQUE7T0FBQSxFQUFLLFdBQU0sS0FBWDtPQUNFO0FBQUE7U0FBQSxFQUFLLFdBQU0sb0JBQVg7U0FDRTtBQUFBO1dBQUE7V0FBQTtBQUFBO0FBREYsUUFERjtPQU1FO0FBQUE7U0FBQSxFQUFLLFdBQU0scUJBQVg7U0FFRTtBQUFBO1dBQUEsRUFBSyxJQUFHLHFCQUFSO1dBQ0k7QUFBQTthQUFBLEVBQUssSUFBRyxZQUFSLEVBQXFCLFdBQU0sZ0JBQTNCLEVBQTRDLGFBQVUsVUFBdEQ7YUFDRTtBQUFBO2VBQUEsRUFBSyxXQUFNLGdCQUFYO2VBQ0UsdUNBQUssV0FBTSxhQUFYLEVBQXlCLE9BQU8sRUFBQyxpQkFBaUIsK0pBQWxCLEVBQWhDLEdBREY7ZUFFRSx1Q0FBSyxXQUFNLE1BQVgsRUFBa0IsT0FBTyxFQUFDLGlCQUFpQix1SUFBbEIsRUFBekIsR0FGRjtlQUdFLHVDQUFLLFdBQU0sTUFBWCxFQUFrQixPQUFPLEVBQUMsaUJBQWlCLHFGQUFsQixFQUF6QjtBQUhGO0FBREY7QUFESixVQUZGO1NBYUU7QUFBQTtXQUFBLEVBQUssSUFBRyxpQkFBUjtXQUVDO0FBQUE7YUFBQSxFQUFLLFdBQU0sV0FBWDthQUNPO0FBQUE7ZUFBQSxFQUFLLFdBQU0sYUFBWDtlQUF5QjtBQUFBO2lCQUFBLEVBQUksV0FBTSxTQUFWO2lCQUFBO0FBQUE7QUFBekIsY0FEUDthQUVPO0FBQUE7ZUFBQTtlQUNFO0FBQUE7aUJBQUEsRUFBZSxNQUFNLEtBQUssS0FBTCxDQUFXLFFBQWhDO2lCQUNFO0FBQUE7bUJBQUEsRUFBUSxXQUFNLDJCQUFkLEVBQTBDLFNBQVMsS0FBSyxXQUF4RDttQkFBQTtBQUFBLGtCQURGO2lCQUlFO0FBSkY7QUFERixjQUZQO2FBV087QUFBQTtlQUFBLEVBQWUsTUFBTSxLQUFLLEtBQUwsQ0FBVyxRQUFoQztlQUNBO0FBQUE7aUJBQUEsRUFBUSxXQUFNLDZCQUFkLEVBQTRDLFNBQVMsS0FBSyxXQUExRDtpQkFBQTtBQUFBO0FBREE7QUFYUDtBQUZELFVBYkY7U0FrQ0U7QUFBQTtXQUFBO1dBQUE7V0FHQyxFQUFFLGFBQUYsRUFBaUIsUUFBakIsQ0FBMEI7QUFDekIsb0JBQU87QUFEa0IsWUFBMUIsQ0FIRDtXQUFBO0FBQUE7QUFsQ0Y7QUFORixNQUZGO0FBd0REO0FBdEUwQixFQUFsQixDQUFYOzttQkF5RWUsSSIsImZpbGUiOiIwLmYwMzJjMzI0YTVhYWU5MGRhN2I4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9OZXdQcm9qZWN0L0Zvcm1cIjtcbmltcG9ydCBUb2dnbGVEaXNwbGF5IGZyb20gJ3JlYWN0LXRvZ2dsZS1kaXNwbGF5JztcblxudmFyIE1haW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd0Zvcm06IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBfdG9nZ2xlRm9ybSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dGb3JtOiAhdGhpcy5zdGF0ZS5zaG93Rm9ybVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTMgbWFpbi1sZWZ0XCI+XG4gICAgICAgICAgPHA+IFdlIGFyZSBkZXYgbm9sYS4gV2UgYXJlIGRldiBub2xhLiBXZSBhcmUgZGV2IG5vbGEuIFdlIGFyZSBkZXYgbm9sYS4gV2UgYXJlIGRldiBub2xhLiBXZSBhcmUgZGV2IG5vbGEuIFdlIGFyZSBkZXYgbm9sYS4gV2UgYXJlIGRldiBub2xhLiBXZSBhcmUgZGV2IG5vbGEuIFdlIGFyZSBkZXYgbm9sYS4gV2UgYXJlIGRldiBub2xhLiBXZSBhcmUgZGV2IG5vbGEuIFdlIGFyZSBkZXYgbm9sYS4gPC9wPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOSBtYWluLXJpZ2h0XCI+XG5cbiAgICAgICAgICA8ZGl2IGlkPVwiYmFja2dyb3VuZC1jYXJvdXNlbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwibXlDYXJvdXNlbFwiIGNsYXNzPVwiY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0gYWN0aXZlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHA6Ly93d3czLmhpbHRvbi5jb20vcmVzb3VyY2VzL21lZGlhL2hpL01TWU5ISEgvZW5fVVMvaW1nL3NoYXJlZC9mdWxsX3BhZ2VfaW1hZ2VfZ2FsbGVyeS9tYWluL0hIX3dlbGNvbWVfNDlfMTI3MHg1NjBfRml0VG9Cb3hTbWFsbERpbWVuc2lvbl9DZW50ZXIuanBnKVwifX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybChodHRwczovL2Fzc2V0czMudGhyaWxsaXN0LmNvbS92MS9pbWFnZS8xNDQ1NTAzL3NpemUvdGwtaG9yaXpvbnRhbF9tYWluL3doZXJlLXRvLWZpbmQtdGhlLWJlc3QtYm9pbGVkLWNyYXdmaXNoLWluLW5ldy1vcmxlYW5zLmpwZylcIn19PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoaHR0cHM6Ly9zdGF0aWMtYmxvZy5yZXN0cGxhdHpib2Vyc2UuYXQvZmlsZXMvMjAxNC8wMS9zaHV0dGVyc3RvY2tfNjY5MjY4MTguanBnKVwifX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudC13cmFwcGVyXCI+XG5cbiAgICAgICAgICBcdDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlclwiPjxoMSBjbGFzcz1cInRpdGxlaDFcIj5EZXYgTm9sYTwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlRGlzcGxheSBzaG93PXt0aGlzLnN0YXRlLnNob3dGb3JtfT5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGNsb3NlRm9ybVwiIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZUZvcm19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlIEZvcm1cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1RvZ2dsZURpc3BsYXk+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPFRvZ2dsZURpc3BsYXkgaGlkZT17dGhpcy5zdGF0ZS5zaG93Rm9ybX0+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHNob3dGb3JtQnRuXCIgb25DbGljaz17dGhpcy5fdG9nZ2xlRm9ybX0gPlxuICAgICAgICAgICAgICAgICAgICBDcmVhdGUgYSBuZXcgcHJvamVjdCFcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvVG9nZ2xlRGlzcGxheT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgXHQkKCcjbXlDYXJvdXNlbCcpLmNhcm91c2VsKHtcbiAgICAgICAgICBcdFx0cGF1c2U6ICdub25lJ1xuICAgICAgICAgIFx0fSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgICA8L3NjcmlwdD5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vanMvY29tcG9uZW50cy9NYWluLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==