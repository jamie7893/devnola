webpackHotUpdate(0,{

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(232);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Input = __webpack_require__(234);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _reactRouter = __webpack_require__(168);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Form = _react2.default.createClass({
	  displayName: 'Form',
	
	  getInitialState: function getInitialState() {
	    return {
	      email: "",
	      name: "",
	      phone: "",
	      company: "",
	      website: "",
	      deadline: "",
	      budget: "",
	      desc: ""
	    };
	  },
	
	  saveAndContinue: function saveAndContinue(e) {
	    e.preventDefault();
	    var canProceed = this.validateEmail(this.state.email) && !_lodash2.default.isEmpty(this.state.name) && !_lodash2.default.isEmpty(this.state.phone);
	
	    if (canProceed) {
	      var newUser = {
	        email: this.state.email,
	        name: this.state.name,
	        company: this.state.company,
	        phone: this.state.phone,
	        deadline: this.state.deadline,
	        budget: this.state.budget,
	        desc: this.state.desc
	      };
	      this.setState({
	        email: "",
	        name: "",
	        company: "",
	        phone: "",
	        deadline: "",
	        budget: "",
	        desc: ""
	      });
	
	      $.ajax({
	        type: "POST",
	        url: '/signup',
	        data: newUser,
	        success: function success(info) {
	          _reactRouter.hashHistory.push('/');
	        }
	      });
	    } else {
	      this.refs.email.isValid();
	      this.refs.name.isValid();
	      this.refs.phone.isValid();
	    }
	  },
	  handleNameInput: function handleNameInput(event) {
	    this.setState({
	      name: event.target.value
	    });
	  },
	  handleCompanyInput: function handleCompanyInput(event) {
	    this.setState({
	      company: event.target.value
	    });
	  },
	  handlePhoneInput: function handlePhoneInput(event) {
	    this.setState({
	      phone: event.target.value
	    });
	  },
	  handleEmailInput: function handleEmailInput(event) {
	    this.setState({
	      email: event.target.value
	    });
	  },
	  handleDeadlineInput: function handleDeadlineInput(event) {
	    this.setState({
	      deadline: event.target.value
	    });
	  },
	  handleBudgetInput: function handleBudgetInput(event) {
	    this.setState({
	      budget: event.target.value
	    });
	  },
	
	
	  validateEmail: function validateEmail(event) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(event);
	  },
	
	  isEmpty: function isEmpty(value) {
	    return !_lodash2.default.isEmpty(value);
	  },
	
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'new_project_screen' },
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(
	        'h2',
	        {
	          className: 'formTitle',
	          align: 'center' },
	        ' New Project '
	      ),
	      _react2.default.createElement(
	        'p',
	        { className: 'formTitle' },
	        'We will contact you asap '
	      ),
	      _react2.default.createElement(
	        'form',
	        {
	          className: 'create_account_form',
	          name: 'regForm',
	          onSubmit: this.saveAndContinue },
	        _react2.default.createElement(_Input2.default, {
	          text: 'Name',
	          type: 'text',
	          ref: 'name',
	          className: 'newProjInput',
	          validate: this.isEmpty,
	          value: this.state.name,
	          onChange: this.handleNameInput,
	          emptyMessage: 'Name can\'t be empty' }),
	        _react2.default.createElement(_Input2.default, {
	          text: 'Email Address',
	          ref: 'email',
	          type: 'text',
	          validate: this.validateEmail,
	          value: this.state.email,
	          onChange: this.handleEmailInput,
	          errorMessage: 'Email is invalid',
	          emptyMessage: 'Email can\'t be empty',
	          errorVisible: this.state.showEmailError
	        }),
	        _react2.default.createElement(_Input2.default, {
	          text: 'Phone',
	          type: 'text',
	          ref: 'phone',
	          className: 'newProjInput',
	          validate: this.isEmpty,
	          value: this.state.phone,
	          onChange: this.handlePhoneInput,
	          emptyMessage: 'Phone can\'t be empty' }),
	        _react2.default.createElement(_Input2.default, {
	          text: 'Company',
	          type: 'text',
	          ref: 'company',
	          className: 'newProjInput',
	          value: this.state.company,
	          onChange: this.handleCompanyInput
	        }),
	        _react2.default.createElement(_Input2.default, {
	          text: 'Website',
	          type: 'text',
	          className: 'newProjInput',
	          ref: 'website',
	          value: this.state.website,
	          onChange: this.handleWebsiteInput
	        }),
	        _react2.default.createElement(_Input2.default, {
	          text: 'Approximate Deadline',
	          ref: 'deadline',
	          type: 'text',
	          className: 'newProjInput',
	          value: this.state.deadline,
	          onChange: this.handleDeadlineInput
	        }),
	        _react2.default.createElement(_Input2.default, {
	          text: 'Budget',
	          ref: 'budget',
	          className: 'newProjInput',
	          type: 'text',
	          value: this.state.budget,
	          onChange: this.handleBudgetInput
	        }),
	        _react2.default.createElement(
	          'button',
	          {
	            type: 'submit',
	            className: 'btn btn-custom btn-block' },
	          ' Submit '
	        ),
	        _react2.default.createElement('br', null)
	      )
	    );
	  }
	});
	exports.default = Form;

/***/ }

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL05ld1Byb2plY3QvRm9ybS5qcz8yMmNlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFJQSxLQUFJLE9BQU8sZ0JBQU0sV0FBTixDQUFrQjtBQUFBOztBQUMzQixvQkFBaUIsMkJBQVc7QUFDMUIsWUFBTztBQUNMLGNBQU8sRUFERjtBQUVMLGFBQU0sRUFGRDtBQUdMLGNBQU8sRUFIRjtBQUlMLGdCQUFTLEVBSko7QUFLTCxnQkFBUyxFQUxKO0FBTUwsaUJBQVUsRUFOTDtBQU9MLGVBQVEsRUFQSDtBQVFMLGFBQU07QUFSRCxNQUFQO0FBVUQsSUFaMEI7O0FBYzNCLGtCQWQyQiwyQkFjWCxDQWRXLEVBY1I7QUFDakIsT0FBRSxjQUFGO0FBQ0EsU0FBSSxhQUFhLEtBQUssYUFBTCxDQUFtQixLQUFLLEtBQUwsQ0FBVyxLQUE5QixLQUF3QyxDQUFDLGlCQUFFLE9BQUYsQ0FBVSxLQUFLLEtBQUwsQ0FBVyxJQUFyQixDQUF6QyxJQUF1RSxDQUFDLGlCQUFFLE9BQUYsQ0FBVSxLQUFLLEtBQUwsQ0FBVyxLQUFyQixDQUF6Rjs7QUFFQSxTQUFJLFVBQUosRUFBZ0I7QUFDZCxXQUFJLFVBQVU7QUFDWixnQkFBTyxLQUFLLEtBQUwsQ0FBVyxLQUROO0FBRVosZUFBTSxLQUFLLEtBQUwsQ0FBVyxJQUZMO0FBR1osa0JBQVMsS0FBSyxLQUFMLENBQVcsT0FIUjtBQUlaLGdCQUFPLEtBQUssS0FBTCxDQUFXLEtBSk47QUFLWixtQkFBVSxLQUFLLEtBQUwsQ0FBVyxRQUxUO0FBTVosaUJBQVEsS0FBSyxLQUFMLENBQVcsTUFOUDtBQU9aLGVBQU0sS0FBSyxLQUFMLENBQVc7QUFQTCxRQUFkO0FBU0EsWUFBSyxRQUFMLENBQWM7QUFDWixnQkFBTyxFQURLO0FBRVosZUFBTSxFQUZNO0FBR1osa0JBQVMsRUFIRztBQUlaLGdCQUFPLEVBSks7QUFL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QU0sY0FKUjtBQUtFLHFCQUNFLEtBQUssT0FOVDtBQVFFLGtCQUNFLEtBQUssS0FBTCxDQUFXLEtBVGY7QUFXRSxxQkFDRSxLQUFLLGdCQVpUO0FBY0UseUJBQWUsdUJBZGpCLEdBNUNOO1NBNkRNO0FBQ0UsaUJBQU8sU0FEVDtBQUVFLGlCQUFPLE1BRlQ7QUFHRSxnQkFBTSxTQUhSO0FBSUUsc0JBQU0sY0FKUjtBQUtFLGtCQUNFLEtBQUssS0FBTCxDQUFXLE9BTmY7QUFRRSxxQkFDRSxLQUFLO0FBVFQsV0E3RE47U0EwRUk7QUFDRSxpQkFBTyxTQURUO0FBRUUsaUJBQU8sTUFGVDtBQUdFLHNCQUFNLGNBSFI7QUFJRSxnQkFBTSxTQUpSO0FBS0Usa0JBQ0UsS0FBSyxLQUFMLENBQVcsT0FOZjtBQVFFLHFCQUNFLEtBQUs7QUFUVCxXQTFFSjtTQXVGSTtBQUNFLGlCQUFPLHNCQURUO0FBRUUsZ0JBQU0sVUFGUjtBQUdFLGlCQUFPLE1BSFQ7QUFJRSxzQkFBTSxjQUpSO0FBS0Usa0JBQ0UsS0FBSyxLQUFMLENBQVcsUUFOZjtBQVFFLHFCQUNFLEtBQUs7QUFUVCxXQXZGSjtTQW9HTTtBQUNFLGlCQUFPLFFBRFQ7QUFFRSxnQkFBTSxRQUZSO0FBR0Usc0JBQU0sY0FIUjtBQUlFLGlCQUFPLE1BSlQ7QUFLRSxrQkFDRSxLQUFLLEtBQUwsQ0FBVyxNQU5mO0FBUUUscUJBQ0UsS0FBSztBQVRULFdBcEdOO1NBaUhBO0FBQUE7V0FBQTtBQUNFLG1CQUFPLFFBRFQ7QUFFRSx3QkFBUSwwQkFGVjtXQUFBO0FBQUEsVUFqSEE7U0FxSEE7QUFySEE7QUFYTixNQURGO0FBdUlLO0FBM09vQixFQUFsQixDQUFYO21CQTZPcUIsSSIsImZpbGUiOiIwLmIwNzgzMTI4Yjk4N2ZiZDBmNTVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0LmpzJztcbmltcG9ydCB7XG4gIGhhc2hIaXN0b3J5XG59IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbnZhciBGb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlbWFpbDogXCJcIixcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBwaG9uZTogXCJcIixcbiAgICAgIGNvbXBhbnk6IFwiXCIsXG4gICAgICB3ZWJzaXRlOiBcIlwiLFxuICAgICAgZGVhZGxpbmU6IFwiXCIsXG4gICAgICBidWRnZXQ6IFwiXCIsXG4gICAgICBkZXNjOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgc2F2ZUFuZENvbnRpbnVlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGNhblByb2NlZWQgPSB0aGlzLnZhbGlkYXRlRW1haWwodGhpcy5zdGF0ZS5lbWFpbCkgJiYgIV8uaXNFbXB0eSh0aGlzLnN0YXRlLm5hbWUpICYmICFfLmlzRW1wdHkodGhpcy5zdGF0ZS5waG9uZSk7XG5cbiAgICBpZiAoY2FuUHJvY2VlZCkge1xuICAgICAgdmFyIG5ld1VzZXIgPSB7XG4gICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLm5hbWUsXG4gICAgICAgIGNvbXBhbnk6IHRoaXMuc3RhdGUuY29tcGFueSxcbiAgICAgICAgcGhvbmU6IHRoaXMuc3RhdGUucGhvbmUsXG4gICAgICAgIGRlYWRsaW5lOiB0aGlzLnN0YXRlLmRlYWRsaW5lLFxuICAgICAgICBidWRnZXQ6IHRoaXMuc3RhdGUuYnVkZ2V0LFxuICAgICAgICBkZXNjOiB0aGlzLnN0YXRlLmRlc2MsXG4gICAgICB9O1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICBjb21wYW55OiBcIlwiLFxuICAgICAgICBwaG9uZTogXCJcIixcbiAgICAgICAgZGVhZGxpbmU6IFwiXCIsXG4gICAgICAgIGJ1ZGdldDogXCJcIixcbiAgICAgICAgZGVzYzogXCJcIixcbiAgICAgIH0pO1xuXG4gICAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgdXJsOiAnL3NpZ251cCcsXG4gICAgICAgIGRhdGE6IG5ld1VzZXIsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGluZm8pIHtcbiAgICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKCcvJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVmcy5lbWFpbC5pc1ZhbGlkKCk7XG4gICAgICB0aGlzLnJlZnMubmFtZS5pc1ZhbGlkKCk7XG4gICAgICB0aGlzLnJlZnMucGhvbmUuaXNWYWxpZCgpO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVOYW1lSW5wdXQoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9LFxuXG4gIGhhbmRsZUNvbXBhbnlJbnB1dChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29tcGFueTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH0sXG5cbiAgaGFuZGxlUGhvbmVJbnB1dChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcGhvbmU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9LFxuXG4gIGhhbmRsZUVtYWlsSW5wdXQoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVtYWlsOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfSxcblxuICBoYW5kbGVEZWFkbGluZUlucHV0KGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkZWFkbGluZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH0sXG4gIGhhbmRsZUJ1ZGdldElucHV0KGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBidWRnZXQ6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9LFxuXG4gIHZhbGlkYXRlRW1haWw6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gICByZXR1cm4gcmUudGVzdChldmVudCk7XG4gIH0sXG5cbiAgaXNFbXB0eTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gIV8uaXNFbXB0eSh2YWx1ZSk7XG4gIH0sXG5cblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPVwibmV3X3Byb2plY3Rfc2NyZWVuXCIgPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGgyXG4gICAgICAgICAgY2xhc3NOYW1lID0gXCJmb3JtVGl0bGVcIlxuICAgICAgICAgIGFsaWduID0gXCJjZW50ZXJcIiA+IE5ldyBQcm9qZWN0IDwgL2gyPlxuXG5cbiAgICAgICAgICA8cCBjbGFzcyA9IFwiZm9ybVRpdGxlXCIgPlxuICAgICAgICAgICAgV2Ugd2lsbCBjb250YWN0IHlvdSBhc2FwIDwgL3A+XG5cblxuICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJjcmVhdGVfYWNjb3VudF9mb3JtXCJcbiAgICAgICAgICAgICAgbmFtZSA9IFwicmVnRm9ybVwiXG4gICAgICAgICAgICAgIG9uU3VibWl0ID0ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUFuZENvbnRpbnVlXG4gICAgICAgICAgICAgIH0gPlxuXG5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdGV4dCA9IFwiTmFtZVwiXG4gICAgICAgICAgICAgICAgdHlwZSA9IFwidGV4dFwiXG4gICAgICAgICAgICAgICAgcmVmID0gXCJuYW1lXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm5ld1Byb2pJbnB1dFwiXG4gICAgICAgICAgICAgICAgdmFsaWRhdGUgPSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmlzRW1wdHlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm5hbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZU5hbWVJbnB1dFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbXB0eU1lc3NhZ2UgPSBcIk5hbWUgY2FuJ3QgYmUgZW1wdHlcIiAvPlxuXG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICB0ZXh0ID0gXCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgIHJlZiA9IFwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgdHlwZSA9IFwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWxpZGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUVtYWlsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5lbWFpbFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRW1haWxJbnB1dFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gXCJFbWFpbCBpcyBpbnZhbGlkXCJcbiAgICAgICAgICAgICAgICAgIGVtcHR5TWVzc2FnZSA9IFwiRW1haWwgY2FuJ3QgYmUgZW1wdHlcIlxuICAgICAgICAgICAgICAgICAgZXJyb3JWaXNpYmxlID0ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dFbWFpbEVycm9yXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA9IFwiUGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgcmVmID0gXCJwaG9uZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmV3UHJvaklucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0VtcHR5XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5waG9uZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUGhvbmVJbnB1dFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVtcHR5TWVzc2FnZSA9IFwiUGhvbmUgY2FuJ3QgYmUgZW1wdHlcIiAvPlxuXG5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gXCJDb21wYW55XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHJlZiA9IFwiY29tcGFueVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmV3UHJvaklucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb21wYW55XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDb21wYW55SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICB0ZXh0ID0gXCJXZWJzaXRlXCJcbiAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInRleHRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuZXdQcm9qSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgcmVmID0gXCJ3ZWJzaXRlXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndlYnNpdGVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVdlYnNpdGVJbnB1dFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHRleHQgPSBcIkFwcHJveGltYXRlIERlYWRsaW5lXCJcbiAgICAgICAgICAgICAgICAgIHJlZiA9IFwiZGVhZGxpbmVcIlxuICAgICAgICAgICAgICAgICAgdHlwZSA9IFwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cIm5ld1Byb2pJbnB1dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kZWFkbGluZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRGVhZGxpbmVJbnB1dFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIHRleHQgPSBcIkJ1ZGdldFwiXG4gICAgICAgICAgICAgICAgICAgIHJlZiA9IFwiYnVkZ2V0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuZXdQcm9qSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5idWRnZXRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUJ1ZGdldElucHV0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlID0gXCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzcyA9IFwiYnRuIGJ0bi1jdXN0b20gYnRuLWJsb2NrXCIgPiBTdWJtaXQgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxiciAvPlxuXG5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZXhwb3J0IGRlZmF1bHQgRm9ybTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vanMvY29tcG9uZW50cy9OZXdQcm9qZWN0L0Zvcm0uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9