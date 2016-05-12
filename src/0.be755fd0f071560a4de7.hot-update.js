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
	          _reactToggleDisplay2.default,
	          { hide: this.state.showForm },
	          _react2.default.createElement(
	            "button",
	            { className: "btn btn-default showFormBtn", onClick: this._toggleForm },
	            "Close Form"
	          )
	        ),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL01haW4uanM/YzEzYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBSSxPQUFPLGdCQUFNLFdBQU4sQ0FBa0I7QUFBQTtBQUMzQixrQkFEMkIsNkJBQ1Q7QUFDaEIsWUFBTztBQUNMLGlCQUFVO0FBREwsTUFBUDtBQUdELElBTDBCO0FBTzNCLGNBUDJCLHlCQU9iO0FBQ1osVUFBSyxRQUFMLENBQWM7QUFDWixpQkFBVSxDQUFDLEtBQUssS0FBTCxDQUFXO0FBRFYsTUFBZDtBQUdELElBWDBCOzs7QUFhM0IsV0FBUSxrQkFBVztBQUNqQixZQUVFO0FBQUE7T0FBQSxFQUFLLFdBQU0sS0FBWDtPQUNFO0FBQUE7U0FBQSxFQUFLLFdBQU0sb0JBQVg7U0FDRTtBQUFBO1dBQUE7V0FBQTtBQUFBO0FBREYsUUFERjtPQU1FO0FBQUE7U0FBQSxFQUFLLFdBQU0scUJBQVg7U0FDRTtBQUFBO1dBQUEsRUFBZSxNQUFNLEtBQUssS0FBTCxDQUFXLFFBQWhDO1dBQ0E7QUFBQTthQUFBLEVBQVEsV0FBTSw2QkFBZCxFQUE0QyxTQUFTLEtBQUssV0FBMUQ7YUFBQTtBQUFBO0FBREEsVUFERjtTQU9FO0FBQUE7V0FBQSxFQUFLLElBQUcscUJBQVI7V0FDSTtBQUFBO2FBQUEsRUFBSyxJQUFHLFlBQVIsRUFBcUIsV0FBTSxnQkFBM0IsRUFBNEMsYUFBVSxVQUF0RDthQUNFO0FBQUE7ZUFBQSxFQUFLLFdBQU0sZ0JBQVg7ZUFDRSx1Q0FBSyxXQUFNLGFBQVgsRUFBeUIsT0FBTyxFQUFDLGlCQUFpQiwrSkFBbEIsRUFBaEMsR0FERjtlQUVFLHVDQUFLLFdBQU0sTUFBWCxFQUFrQixPQUFPLEVBQUMsaUJBQWlCLHVJQUFsQixFQUF6QixHQUZGO2VBR0UsdUNBQUssV0FBTSxNQUFYLEVBQWtCLE9BQU8sRUFBQyxpQkFBaUIscUZBQWxCLEVBQXpCO0FBSEY7QUFERjtBQURKLFVBUEY7U0FrQkU7QUFBQTtXQUFBLEVBQUssSUFBRyxpQkFBUjtXQUVDO0FBQUE7YUFBQSxFQUFLLFdBQU0sV0FBWDthQUNPO0FBQUE7ZUFBQSxFQUFLLFdBQU0sYUFBWDtlQUF5QjtBQUFBO2lCQUFBO2lCQUFBO0FBQUE7QUFBekIsY0FEUDthQUVPO0FBQUE7ZUFBQTtlQUNFO0FBQUE7aUJBQUEsRUFBZSxNQUFNLEtBQUssS0FBTCxDQUFXLFFBQWhDO2lCQUNFO0FBREY7QUFERixjQUZQO2FBUU87QUFBQTtlQUFBLEVBQWUsTUFBTSxLQUFLLEtBQUwsQ0FBVyxRQUFoQztlQUNBO0FBQUE7aUJBQUEsRUFBUSxXQUFNLDZCQUFkLEVBQTRDLFNBQVMsS0FBSyxXQUExRDtpQkFBQTtBQUFBO0FBREE7QUFSUDtBQUZELFVBbEJGO1NBb0NFO0FBQUE7V0FBQTtXQUFBO1dBR0MsRUFBRSxhQUFGLEVBQWlCLFFBQWpCLENBQTBCO0FBQ3pCLG9CQUFPO0FBRGtCLFlBQTFCLENBSEQ7V0FBQTtBQUFBO0FBcENGO0FBTkYsTUFGRjtBQTBERDtBQXhFMEIsRUFBbEIsQ0FBWDs7bUJBMkVlLEkiLCJmaWxlIjoiMC5iZTc1NWZkMGYwNzE1NjBhNGRlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vTmV3UHJvamVjdC9Gb3JtXCI7XG5pbXBvcnQgVG9nZ2xlRGlzcGxheSBmcm9tICdyZWFjdC10b2dnbGUtZGlzcGxheSc7XG5cbnZhciBNYWluID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3dGb3JtOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgX3RvZ2dsZUZvcm0oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93Rm9ybTogIXRoaXMuc3RhdGUuc2hvd0Zvcm1cbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zIG1haW4tbGVmdFwiPlxuICAgICAgICAgIDxwPiBzYWRrc2pha2Roc2Fqa2RoaGFzamsgPC9wPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOSBtYWluLXJpZ2h0XCI+XG4gICAgICAgICAgPFRvZ2dsZURpc3BsYXkgaGlkZT17dGhpcy5zdGF0ZS5zaG93Rm9ybX0+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBzaG93Rm9ybUJ0blwiIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZUZvcm19ID5cbiAgICAgICAgICAgIENsb3NlIEZvcm1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9Ub2dnbGVEaXNwbGF5PlxuXG4gICAgICAgICAgPGRpdiBpZD1cImJhY2tncm91bmQtY2Fyb3VzZWxcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm15Q2Fyb3VzZWxcIiBjbGFzcz1cImNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIGFjdGl2ZVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybChodHRwOi8vd3d3My5oaWx0b24uY29tL3Jlc291cmNlcy9tZWRpYS9oaS9NU1lOSEhIL2VuX1VTL2ltZy9zaGFyZWQvZnVsbF9wYWdlX2ltYWdlX2dhbGxlcnkvbWFpbi9ISF93ZWxjb21lXzQ5XzEyNzB4NTYwX0ZpdFRvQm94U21hbGxEaW1lbnNpb25fQ2VudGVyLmpwZylcIn19PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoaHR0cHM6Ly9hc3NldHMzLnRocmlsbGlzdC5jb20vdjEvaW1hZ2UvMTQ0NTUwMy9zaXplL3RsLWhvcml6b250YWxfbWFpbi93aGVyZS10by1maW5kLXRoZS1iZXN0LWJvaWxlZC1jcmF3ZmlzaC1pbi1uZXctb3JsZWFucy5qcGcpXCJ9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHBzOi8vc3RhdGljLWJsb2cucmVzdHBsYXR6Ym9lcnNlLmF0L2ZpbGVzLzIwMTQvMDEvc2h1dHRlcnN0b2NrXzY2OTI2ODE4LmpwZylcIn19PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnQtd3JhcHBlclwiPlxuXG4gICAgICAgICAgXHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXJcIj48aDM+RGV2IE5vbGE8L2gzPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZURpc3BsYXkgc2hvdz17dGhpcy5zdGF0ZS5zaG93Rm9ybX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Ub2dnbGVEaXNwbGF5PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxUb2dnbGVEaXNwbGF5IGhpZGU9e3RoaXMuc3RhdGUuc2hvd0Zvcm19PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBzaG93Rm9ybUJ0blwiIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZUZvcm19ID5cbiAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIGEgbmV3IHByb2plY3QhXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L1RvZ2dsZURpc3BsYXk+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAgICAgICAgIFx0JCgnI215Q2Fyb3VzZWwnKS5jYXJvdXNlbCh7XG4gICAgICAgICAgXHRcdHBhdXNlOiAnbm9uZSdcbiAgICAgICAgICBcdH0pXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgPC9zY3JpcHQ+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2pzL2NvbXBvbmVudHMvTWFpbi5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=