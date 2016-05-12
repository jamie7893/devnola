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
	          validate: this.isEmpty,
	          value: this.state.phone,
	          onChange: this.handlePhoneInput,
	          emptyMessage: 'Phone can\'t be empty' }),
	        _react2.default.createElement(_Input2.default, {
	          text: 'Company',
	          type: 'text',
	          ref: 'company',
	          value: this.state.company,
	          onChange: this.handleCompanyInput
	        }),
	        _react2.default.createElement(_Input2.default, {
	          text: 'Website',
	          type: 'text',
	          ref: 'website',
	          value: this.state.website,
	          onChange: this.handleWebsiteInput
	        }),
	        _react2.default.createElement(_Input2.default, {
	          text: 'Approximate Deadline',
	          ref: 'deadline',
	          type: 'text',
	          value: this.state.deadline,
	          onChange: this.handleDeadlineInput
	        }),
	        _react2.default.createElement(_Input2.default, {
	          text: 'Budget',
	          ref: 'budget',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL05ld1Byb2plY3QvRm9ybS5qcz8yMmNlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFJQSxLQUFJLE9BQU8sZ0JBQU0sV0FBTixDQUFrQjtBQUFBOztBQUMzQixvQkFBaUIsMkJBQVc7QUFDMUIsWUFBTztBQUNMLGNBQU8sRUFERjtBQUVMLGFBQU0sRUFGRDtBQUdMLGNBQU8sRUFIRjtBQUlMLGdCQUFTLEVBSko7QUFLTCxnQkFBUyxFQUxKO0FBTUwsaUJBQVUsRUFOTDtBQU9MLGVBQVEsRUFQSDtBQVFMLGFBQU07QUFSRCxNQUFQO0FBVUQsSUFaMEI7O0FBYzNCLGtCQWQyQiwyQkFjWCxDQWRXLEVBY1I7QUFDakIsT0FBRSxjQUFGO0FBQ0EsU0FBSSxhQUFhLEtBQUssYUFBTCxDQUFtQixLQUFLLEtBQUwsQ0FBVyxLQUE5QixLQUF3QyxDQUFDLGlCQUFFLE9BQUYsQ0FBVSxLQUFLLEtBQUwsQ0FBVyxJQUFyQixDQUF6QyxJQUF1RSxDQUFDLGlCQUFFLE9BQUYsQ0FBVSxLQUFLLEtBQUwsQ0FBVyxLQUFyQixDQUF6Rjs7QUFFQSxTQUFJLFVBQUosRUFBZ0I7QUFDZCxXQUFJLFVBQVU7QUFDWixnQkFBTyxLQUFLLEtBQUwsQ0FBVyxLQUROO0FBRVosZUFBTSxLQUFLLEtBQUwsQ0FBVyxJQUZMO0FBR1osa0JBQVMsS0FBSyxLQUFMLENBQVcsT0FIUjtBQUlaLGdCQUFPLEtBQUssS0FBTCxDQUFXLEtBSk47QUFLWixtQkFBVSxLQUFLLEtBQUwsQ0FBVyxRQUxUO0FBTVosaUJBQVEsS0FBSyxLQUFMLENBQVcsTUFOUDtBQU9aLGVBQU0sS0FBSyxLQUFMLENBQVc7QUFQTCxRQUFkO0FBU0EsWUFBSyxRQUFMLENBQWM7QUFDWixnQkFBTyxFQURLO0FBRVosZUFBTSxFQUZNO0FBR1osa0JBQVMsRUFIRztBQUlaLGdCQUFPLEVBSks7QUFL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RSxrQkFDRSxLQUFLLEtBQUwsQ0FBVyxLQVJmO0FBVUUscUJBQ0UsS0FBSyxnQkFYVDtBQWFFLHlCQUFlLHVCQWJqQixHQTNDTjtTQTJETTtBQUNFLGlCQUFPLFNBRFQ7QUFFRSxpQkFBTyxNQUZUO0FBR0UsZ0JBQU0sU0FIUjtBQUlFLGtCQUNFLEtBQUssS0FBTCxDQUFXLE9BTGY7QUFPRSxxQkFDRSxLQUFLO0FBUlQsV0EzRE47U0F1RUk7QUFDRSxpQkFBTyxTQURUO0FBRUUsaUJBQU8sTUFGVDtBQUdFLGdCQUFNLFNBSFI7QUFJRSxrQkFDRSxLQUFLLEtBQUwsQ0FBVyxPQUxmO0FBT0UscUJBQ0UsS0FBSztBQVJULFdBdkVKO1NBbUZJO0FBQ0UsaUJBQU8sc0JBRFQ7QUFFRSxnQkFBTSxVQUZSO0FBR0UsaUJBQU8sTUFIVDtBQUlFLGtCQUNFLEtBQUssS0FBTCxDQUFXLFFBTGY7QUFPRSxxQkFDRSxLQUFLO0FBUlQsV0FuRko7U0ErRk07QUFDRSxpQkFBTyxRQURUO0FBRUUsZ0JBQU0sUUFGUjtBQUdFLGlCQUFPLE1BSFQ7QUFJRSxrQkFDRSxLQUFLLEtBQUwsQ0FBVyxNQUxmO0FBT0UscUJBQ0UsS0FBSztBQVJULFdBL0ZOO1NBMkdBO0FBQUE7V0FBQTtBQUNFLG1CQUFPLFFBRFQ7QUFFRSx3QkFBUSwwQkFGVjtXQUFBO0FBQUEsVUEzR0E7U0ErR0E7QUEvR0E7QUFYTixNQURGO0FBaUlLO0FBck9vQixFQUFsQixDQUFYO21CQXVPcUIsSSIsImZpbGUiOiIwLmQ3MGE5NzRmNjQwODZlMDUzODYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0LmpzJztcbmltcG9ydCB7XG4gIGhhc2hIaXN0b3J5XG59IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbnZhciBGb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlbWFpbDogXCJcIixcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBwaG9uZTogXCJcIixcbiAgICAgIGNvbXBhbnk6IFwiXCIsXG4gICAgICB3ZWJzaXRlOiBcIlwiLFxuICAgICAgZGVhZGxpbmU6IFwiXCIsXG4gICAgICBidWRnZXQ6IFwiXCIsXG4gICAgICBkZXNjOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgc2F2ZUFuZENvbnRpbnVlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGNhblByb2NlZWQgPSB0aGlzLnZhbGlkYXRlRW1haWwodGhpcy5zdGF0ZS5lbWFpbCkgJiYgIV8uaXNFbXB0eSh0aGlzLnN0YXRlLm5hbWUpICYmICFfLmlzRW1wdHkodGhpcy5zdGF0ZS5waG9uZSk7XG5cbiAgICBpZiAoY2FuUHJvY2VlZCkge1xuICAgICAgdmFyIG5ld1VzZXIgPSB7XG4gICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLm5hbWUsXG4gICAgICAgIGNvbXBhbnk6IHRoaXMuc3RhdGUuY29tcGFueSxcbiAgICAgICAgcGhvbmU6IHRoaXMuc3RhdGUucGhvbmUsXG4gICAgICAgIGRlYWRsaW5lOiB0aGlzLnN0YXRlLmRlYWRsaW5lLFxuICAgICAgICBidWRnZXQ6IHRoaXMuc3RhdGUuYnVkZ2V0LFxuICAgICAgICBkZXNjOiB0aGlzLnN0YXRlLmRlc2MsXG4gICAgICB9O1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICBjb21wYW55OiBcIlwiLFxuICAgICAgICBwaG9uZTogXCJcIixcbiAgICAgICAgZGVhZGxpbmU6IFwiXCIsXG4gICAgICAgIGJ1ZGdldDogXCJcIixcbiAgICAgICAgZGVzYzogXCJcIixcbiAgICAgIH0pO1xuXG4gICAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgdXJsOiAnL3NpZ251cCcsXG4gICAgICAgIGRhdGE6IG5ld1VzZXIsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGluZm8pIHtcbiAgICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKCcvJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVmcy5lbWFpbC5pc1ZhbGlkKCk7XG4gICAgICB0aGlzLnJlZnMubmFtZS5pc1ZhbGlkKCk7XG4gICAgICB0aGlzLnJlZnMucGhvbmUuaXNWYWxpZCgpO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVOYW1lSW5wdXQoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9LFxuXG4gIGhhbmRsZUNvbXBhbnlJbnB1dChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29tcGFueTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH0sXG5cbiAgaGFuZGxlUGhvbmVJbnB1dChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcGhvbmU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9LFxuXG4gIGhhbmRsZUVtYWlsSW5wdXQoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVtYWlsOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfSxcblxuICBoYW5kbGVEZWFkbGluZUlucHV0KGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkZWFkbGluZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH0sXG4gIGhhbmRsZUJ1ZGdldElucHV0KGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBidWRnZXQ6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9LFxuXG4gIHZhbGlkYXRlRW1haWw6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gICByZXR1cm4gcmUudGVzdChldmVudCk7XG4gIH0sXG5cbiAgaXNFbXB0eTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gIV8uaXNFbXB0eSh2YWx1ZSk7XG4gIH0sXG5cblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPVwibmV3X3Byb2plY3Rfc2NyZWVuXCIgPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGgyXG4gICAgICAgICAgY2xhc3NOYW1lID0gXCJmb3JtVGl0bGVcIlxuICAgICAgICAgIGFsaWduID0gXCJjZW50ZXJcIiA+IE5ldyBQcm9qZWN0IDwgL2gyPlxuXG5cbiAgICAgICAgICA8cCBjbGFzcyA9IFwiZm9ybVRpdGxlXCIgPlxuICAgICAgICAgICAgV2Ugd2lsbCBjb250YWN0IHlvdSBhc2FwIDwgL3A+XG5cblxuICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJjcmVhdGVfYWNjb3VudF9mb3JtXCJcbiAgICAgICAgICAgICAgbmFtZSA9IFwicmVnRm9ybVwiXG4gICAgICAgICAgICAgIG9uU3VibWl0ID0ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUFuZENvbnRpbnVlXG4gICAgICAgICAgICAgIH0gPlxuXG5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdGV4dCA9IFwiTmFtZVwiXG4gICAgICAgICAgICAgICAgdHlwZSA9IFwidGV4dFwiXG4gICAgICAgICAgICAgICAgcmVmID0gXCJuYW1lXCJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaXNFbXB0eVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTmFtZUlucHV0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVtcHR5TWVzc2FnZSA9IFwiTmFtZSBjYW4ndCBiZSBlbXB0eVwiIC8+XG5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHRleHQgPSBcIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgcmVmID0gXCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlID0gXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRlID0ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlRW1haWxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlID0ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmVtYWlsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFbWFpbElucHV0XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBcIkVtYWlsIGlzIGludmFsaWRcIlxuICAgICAgICAgICAgICAgICAgZW1wdHlNZXNzYWdlID0gXCJFbWFpbCBjYW4ndCBiZSBlbXB0eVwiXG4gICAgICAgICAgICAgICAgICBlcnJvclZpc2libGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0VtYWlsRXJyb3JcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gXCJQaG9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInRleHRcIlxuICAgICAgICAgICAgICAgICAgICByZWYgPSBcInBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0VtcHR5XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5waG9uZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUGhvbmVJbnB1dFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVtcHR5TWVzc2FnZSA9IFwiUGhvbmUgY2FuJ3QgYmUgZW1wdHlcIiAvPlxuXG5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gXCJDb21wYW55XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHJlZiA9IFwiY29tcGFueVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29tcGFueVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ29tcGFueUlucHV0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgdGV4dCA9IFwiV2Vic2l0ZVwiXG4gICAgICAgICAgICAgICAgICB0eXBlID0gXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHJlZiA9IFwid2Vic2l0ZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53ZWJzaXRlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVXZWJzaXRlSW5wdXRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICB0ZXh0ID0gXCJBcHByb3hpbWF0ZSBEZWFkbGluZVwiXG4gICAgICAgICAgICAgICAgICByZWYgPSBcImRlYWRsaW5lXCJcbiAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInRleHRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGVhZGxpbmVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZURlYWRsaW5lSW5wdXRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gXCJCdWRnZXRcIlxuICAgICAgICAgICAgICAgICAgICByZWYgPSBcImJ1ZGdldFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJ1ZGdldFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQnVkZ2V0SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGUgPSBcInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNsYXNzID0gXCJidG4gYnRuLWN1c3RvbSBidG4tYmxvY2tcIiA+IFN1Ym1pdCA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGJyIC8+XG5cblxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBleHBvcnQgZGVmYXVsdCBGb3JtO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9qcy9jb21wb25lbnRzL05ld1Byb2plY3QvRm9ybS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=