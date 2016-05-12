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
	                "h3",
	                null,
	                "Dev Nola"
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              null,
	              _react2.default.createElement(
	                _reactToggleDisplay2.default,
	                { show: this.state.showForm },
	                _react2.default.createElement(_Form2.default, null)
	              )
	            ),
	            _react2.default.createElement(
	              _reactToggleDisplay2.default,
	              { show: !this.state.showForm },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL01haW4uanM/YzEzYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBSSxPQUFPLGdCQUFNLFdBQU4sQ0FBa0I7QUFBQTtBQUMzQixrQkFEMkIsNkJBQ1Q7QUFDaEIsWUFBTztBQUNMLGlCQUFVO0FBREwsTUFBUDtBQUdELElBTDBCO0FBTzNCLGNBUDJCLHlCQU9iO0FBQ1osVUFBSyxRQUFMLENBQWM7QUFDWixpQkFBVSxDQUFDLEtBQUssS0FBTCxDQUFXO0FBRFYsTUFBZDtBQUdELElBWDBCOzs7QUFhM0IsV0FBUSxrQkFBVztBQUNqQixZQUVFO0FBQUE7T0FBQSxFQUFLLFdBQU0sS0FBWDtPQUNFO0FBQUE7U0FBQSxFQUFLLFdBQU0sb0JBQVg7U0FDRTtBQUFBO1dBQUE7V0FBQTtBQUFBO0FBREYsUUFERjtPQU1FO0FBQUE7U0FBQSxFQUFLLFdBQU0scUJBQVg7U0FHRTtBQUFBO1dBQUEsRUFBSyxJQUFHLHFCQUFSO1dBQ0k7QUFBQTthQUFBLEVBQUssSUFBRyxZQUFSLEVBQXFCLFdBQU0sZ0JBQTNCLEVBQTRDLGFBQVUsVUFBdEQ7YUFDRTtBQUFBO2VBQUEsRUFBSyxXQUFNLGdCQUFYO2VBQ0UsdUNBQUssV0FBTSxhQUFYLEVBQXlCLE9BQU8sRUFBQyxpQkFBaUIsK0pBQWxCLEVBQWhDLEdBREY7ZUFFRSx1Q0FBSyxXQUFNLE1BQVgsRUFBa0IsT0FBTyxFQUFDLGlCQUFpQix1SUFBbEIsRUFBekIsR0FGRjtlQUdFLHVDQUFLLFdBQU0sTUFBWCxFQUFrQixPQUFPLEVBQUMsaUJBQWlCLHFGQUFsQixFQUF6QjtBQUhGO0FBREY7QUFESixVQUhGO1NBY0U7QUFBQTtXQUFBLEVBQUssSUFBRyxpQkFBUjtXQUVDO0FBQUE7YUFBQSxFQUFLLFdBQU0sV0FBWDthQUNPO0FBQUE7ZUFBQSxFQUFLLFdBQU0sYUFBWDtlQUF5QjtBQUFBO2lCQUFBO2lCQUFBO0FBQUE7QUFBekIsY0FEUDthQUVPO0FBQUE7ZUFBQTtlQUNFO0FBQUE7aUJBQUEsRUFBZSxNQUFNLEtBQUssS0FBTCxDQUFXLFFBQWhDO2lCQUNFO0FBREY7QUFERixjQUZQO2FBUU87QUFBQTtlQUFBLEVBQWUsTUFBTSxDQUFDLEtBQUssS0FBTCxDQUFXLFFBQWpDO2VBQ0E7QUFBQTtpQkFBQSxFQUFRLFdBQU0sNkJBQWQsRUFBNEMsU0FBUyxLQUFLLFdBQTFEO2lCQUFBO0FBQUE7QUFEQTtBQVJQO0FBRkQsVUFkRjtTQWdDRTtBQUFBO1dBQUE7V0FBQTtXQUdDLEVBQUUsYUFBRixFQUFpQixRQUFqQixDQUEwQjtBQUN6QixvQkFBTztBQURrQixZQUExQixDQUhEO1dBQUE7QUFBQTtBQWhDRjtBQU5GLE1BRkY7QUFzREQ7QUFwRTBCLEVBQWxCLENBQVg7O21CQXVFZSxJIiwiZmlsZSI6IjAuNjkwOGQ1N2I3Yjk3N2MxYTIwZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL05ld1Byb2plY3QvRm9ybVwiO1xuaW1wb3J0IFRvZ2dsZURpc3BsYXkgZnJvbSAncmVhY3QtdG9nZ2xlLWRpc3BsYXknO1xuXG52YXIgTWFpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93Rm9ybTogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIF90b2dnbGVGb3JtKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd0Zvcm06ICF0aGlzLnN0YXRlLnNob3dGb3JtXG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBtYWluLWxlZnRcIj5cbiAgICAgICAgICA8cD4gc2Fka3NqYWtkaHNhamtkaGhhc2prIDwvcD5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTkgbWFpbi1yaWdodFwiPlxuXG5cbiAgICAgICAgICA8ZGl2IGlkPVwiYmFja2dyb3VuZC1jYXJvdXNlbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwibXlDYXJvdXNlbFwiIGNsYXNzPVwiY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0gYWN0aXZlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHA6Ly93d3czLmhpbHRvbi5jb20vcmVzb3VyY2VzL21lZGlhL2hpL01TWU5ISEgvZW5fVVMvaW1nL3NoYXJlZC9mdWxsX3BhZ2VfaW1hZ2VfZ2FsbGVyeS9tYWluL0hIX3dlbGNvbWVfNDlfMTI3MHg1NjBfRml0VG9Cb3hTbWFsbERpbWVuc2lvbl9DZW50ZXIuanBnKVwifX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybChodHRwczovL2Fzc2V0czMudGhyaWxsaXN0LmNvbS92MS9pbWFnZS8xNDQ1NTAzL3NpemUvdGwtaG9yaXpvbnRhbF9tYWluL3doZXJlLXRvLWZpbmQtdGhlLWJlc3QtYm9pbGVkLWNyYXdmaXNoLWluLW5ldy1vcmxlYW5zLmpwZylcIn19PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoaHR0cHM6Ly9zdGF0aWMtYmxvZy5yZXN0cGxhdHpib2Vyc2UuYXQvZmlsZXMvMjAxNC8wMS9zaHV0dGVyc3RvY2tfNjY5MjY4MTguanBnKVwifX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudC13cmFwcGVyXCI+XG5cbiAgICAgICAgICBcdDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlclwiPjxoMz5EZXYgTm9sYTwvaDM+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlRGlzcGxheSBzaG93PXt0aGlzLnN0YXRlLnNob3dGb3JtfT5cbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1RvZ2dsZURpc3BsYXk+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPFRvZ2dsZURpc3BsYXkgc2hvdz17IXRoaXMuc3RhdGUuc2hvd0Zvcm19PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBzaG93Rm9ybUJ0blwiIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZUZvcm19ID5cbiAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIGEgbmV3IHByb2plY3QhXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L1RvZ2dsZURpc3BsYXk+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAgICAgICAgIFx0JCgnI215Q2Fyb3VzZWwnKS5jYXJvdXNlbCh7XG4gICAgICAgICAgXHRcdHBhdXNlOiAnbm9uZSdcbiAgICAgICAgICBcdH0pXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgPC9zY3JpcHQ+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2pzL2NvbXBvbmVudHMvTWFpbi5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=