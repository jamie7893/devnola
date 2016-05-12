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
	              "button",
	              { className: "btn btn-default showFormBtn", onClick: this._toggleForm },
	              "Create a new project!"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL01haW4uanM/YzEzYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBSSxPQUFPLGdCQUFNLFdBQU4sQ0FBa0I7QUFBQTtBQUMzQixrQkFEMkIsNkJBQ1Q7QUFDaEIsWUFBTztBQUNMLGlCQUFVO0FBREwsTUFBUDtBQUdELElBTDBCO0FBTzNCLGNBUDJCLHlCQU9iO0FBQ1osVUFBSyxRQUFMLENBQWM7QUFDWixpQkFBVSxDQUFDLEtBQUssS0FBTCxDQUFXO0FBRFYsTUFBZDtBQUdELElBWDBCOzs7QUFhM0IsV0FBUSxrQkFBVztBQUNqQixZQUVFO0FBQUE7T0FBQSxFQUFLLFdBQU0sS0FBWDtPQUNFO0FBQUE7U0FBQSxFQUFLLFdBQU0sb0JBQVg7U0FDRTtBQUFBO1dBQUE7V0FBQTtBQUFBO0FBREYsUUFERjtPQU1FO0FBQUE7U0FBQSxFQUFLLFdBQU0scUJBQVg7U0FHRTtBQUFBO1dBQUEsRUFBSyxJQUFHLHFCQUFSO1dBQ0k7QUFBQTthQUFBLEVBQUssSUFBRyxZQUFSLEVBQXFCLFdBQU0sZ0JBQTNCLEVBQTRDLGFBQVUsVUFBdEQ7YUFDRTtBQUFBO2VBQUEsRUFBSyxXQUFNLGdCQUFYO2VBQ0UsdUNBQUssV0FBTSxhQUFYLEVBQXlCLE9BQU8sRUFBQyxpQkFBaUIsK0pBQWxCLEVBQWhDLEdBREY7ZUFFRSx1Q0FBSyxXQUFNLE1BQVgsRUFBa0IsT0FBTyxFQUFDLGlCQUFpQix1SUFBbEIsRUFBekIsR0FGRjtlQUdFLHVDQUFLLFdBQU0sTUFBWCxFQUFrQixPQUFPLEVBQUMsaUJBQWlCLHFGQUFsQixFQUF6QjtBQUhGO0FBREY7QUFESixVQUhGO1NBY0U7QUFBQTtXQUFBLEVBQUssSUFBRyxpQkFBUjtXQUVDO0FBQUE7YUFBQSxFQUFLLFdBQU0sV0FBWDthQUNPO0FBQUE7ZUFBQSxFQUFLLFdBQU0sYUFBWDtlQUF5QjtBQUFBO2lCQUFBO2lCQUFBO0FBQUE7QUFBekIsY0FEUDthQUVPO0FBQUE7ZUFBQTtlQUNFO0FBQUE7aUJBQUEsRUFBZSxNQUFNLEtBQUssS0FBTCxDQUFXLFFBQWhDO2lCQUNFO0FBREY7QUFERixjQUZQO2FBT087QUFBQTtlQUFBLEVBQVEsV0FBTSw2QkFBZCxFQUE0QyxTQUFTLEtBQUssV0FBMUQ7ZUFBQTtBQUFBO0FBUFA7QUFGRCxVQWRGO1NBNkJFO0FBQUE7V0FBQTtXQUFBO1dBR0MsRUFBRSxhQUFGLEVBQWlCLFFBQWpCLENBQTBCO0FBQ3pCLG9CQUFPO0FBRGtCLFlBQTFCLENBSEQ7V0FBQTtBQUFBO0FBN0JGO0FBTkYsTUFGRjtBQW1ERDtBQWpFMEIsRUFBbEIsQ0FBWDs7bUJBb0VlLEkiLCJmaWxlIjoiMC5jNDI4ZjM2YWU5ODJkZDJhMmRlZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vTmV3UHJvamVjdC9Gb3JtXCI7XG5pbXBvcnQgVG9nZ2xlRGlzcGxheSBmcm9tICdyZWFjdC10b2dnbGUtZGlzcGxheSc7XG5cbnZhciBNYWluID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3dGb3JtOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgX3RvZ2dsZUZvcm0oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93Rm9ybTogIXRoaXMuc3RhdGUuc2hvd0Zvcm1cbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zIG1haW4tbGVmdFwiPlxuICAgICAgICAgIDxwPiBzYWRrc2pha2Roc2Fqa2RoaGFzamsgPC9wPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOSBtYWluLXJpZ2h0XCI+XG5cblxuICAgICAgICAgIDxkaXYgaWQ9XCJiYWNrZ3JvdW5kLWNhcm91c2VsXCI+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJteUNhcm91c2VsXCIgY2xhc3M9XCJjYXJvdXNlbCBzbGlkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbSBhY3RpdmVcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoaHR0cDovL3d3dzMuaGlsdG9uLmNvbS9yZXNvdXJjZXMvbWVkaWEvaGkvTVNZTkhISC9lbl9VUy9pbWcvc2hhcmVkL2Z1bGxfcGFnZV9pbWFnZV9nYWxsZXJ5L21haW4vSEhfd2VsY29tZV80OV8xMjcweDU2MF9GaXRUb0JveFNtYWxsRGltZW5zaW9uX0NlbnRlci5qcGcpXCJ9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHBzOi8vYXNzZXRzMy50aHJpbGxpc3QuY29tL3YxL2ltYWdlLzE0NDU1MDMvc2l6ZS90bC1ob3Jpem9udGFsX21haW4vd2hlcmUtdG8tZmluZC10aGUtYmVzdC1ib2lsZWQtY3Jhd2Zpc2gtaW4tbmV3LW9ybGVhbnMuanBnKVwifX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybChodHRwczovL3N0YXRpYy1ibG9nLnJlc3RwbGF0emJvZXJzZS5hdC9maWxlcy8yMDE0LzAxL3NodXR0ZXJzdG9ja182NjkyNjgxOC5qcGcpXCJ9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50LXdyYXBwZXJcIj5cblxuICAgICAgICAgIFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyXCI+PGgzPkRldiBOb2xhPC9oMz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxUb2dnbGVEaXNwbGF5IHNob3c9e3RoaXMuc3RhdGUuc2hvd0Zvcm19PlxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9nZ2xlRGlzcGxheT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBzaG93Rm9ybUJ0blwiIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZUZvcm19ID5cbiAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIGEgbmV3IHByb2plY3QhXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgXHQkKCcjbXlDYXJvdXNlbCcpLmNhcm91c2VsKHtcbiAgICAgICAgICBcdFx0cGF1c2U6ICdub25lJ1xuICAgICAgICAgIFx0fSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgICA8L3NjcmlwdD5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vanMvY29tcG9uZW50cy9NYWluLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==