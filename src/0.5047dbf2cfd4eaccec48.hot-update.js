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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL05ld1Byb2plY3QvRm9ybS5qcz8yMmNlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFJQSxLQUFJLE9BQU8sZ0JBQU0sV0FBTixDQUFrQjtBQUFBOztBQUMzQixvQkFBaUIsMkJBQVc7QUFDMUIsWUFBTztBQUNMLGNBQU8sRUFERjtBQUVMLGFBQU0sRUFGRDtBQUdMLGNBQU8sRUFIRjtBQUlMLGdCQUFTLEVBSko7QUFLTCxnQkFBUyxFQUxKO0FBTUwsaUJBQVUsRUFOTDtBQU9MLGVBQVEsRUFQSDtBQVFMLGFBQU07QUFSRCxNQUFQO0FBVUQsSUFaMEI7O0FBYzNCLGtCQWQyQiwyQkFjWCxDQWRXLEVBY1I7QUFDakIsT0FBRSxjQUFGO0FBQ0EsU0FBSSxhQUFhLEtBQUssYUFBTCxDQUFtQixLQUFLLEtBQUwsQ0FBVyxLQUE5QixLQUF3QyxDQUFDLGlCQUFFLE9BQUYsQ0FBVSxLQUFLLEtBQUwsQ0FBVyxJQUFyQixDQUF6QyxJQUF1RSxDQUFDLGlCQUFFLE9BQUYsQ0FBVSxLQUFLLEtBQUwsQ0FBVyxLQUFyQixDQUF6Rjs7QUFFQSxTQUFJLFVBQUosRUFBZ0I7QUFDZCxXQUFJLFVBQVU7QUFDWixnQkFBTyxLQUFLLEtBQUwsQ0FBVyxLQUROO0FBRVosZUFBTSxLQUFLLEtBQUwsQ0FBVyxJQUZMO0FBR1osa0JBQVMsS0FBSyxLQUFMLENBQVcsT0FIUjtBQUlaLGdCQUFPLEtBQUssS0FBTCxDQUFXLEtBSk47QUFLWixtQkFBVSxLQUFLLEtBQUwsQ0FBVyxRQUxUO0FBTVosaUJBQVEsS0FBSyxLQUFMLENBQVcsTUFOUDtBQU9aLGVBQU0sS0FBSyxLQUFMLENBQVc7QUFQTCxRQUFkO0FBU0EsWUFBSyxRQUFMLENBQWM7QUFDWixnQkFBTyxFQURLO0FBRVosZUFBTSxFQUZNO0FBR1osa0JBQVMsRUFIRztBQUlaLGdCQUFPLEVBSks7QUFL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T0Usa0JBQ0UsS0FBSyxLQUFMLENBQVcsS0FSZjtBQVVFLHFCQUNFLEtBQUssZ0JBWFQ7QUFhRSx5QkFBZSx1QkFiakIsR0EzQ047U0EyRE07QUFDRSxpQkFBTyxTQURUO0FBRUUsaUJBQU8sTUFGVDtBQUdFLGdCQUFNLFNBSFI7QUFJRSxrQkFDRSxLQUFLLEtBQUwsQ0FBVyxPQUxmO0FBT0UscUJBQ0UsS0FBSztBQVJULFdBM0ROO1NBdUVJO0FBQ0UsaUJBQU8sU0FEVDtBQUVFLGlCQUFPLE1BRlQ7QUFHRSxnQkFBTSxTQUhSO0FBSUUsa0JBQ0UsS0FBSyxLQUFMLENBQVcsT0FMZjtBQU9FLHFCQUNFLEtBQUs7QUFSVCxXQXZFSjtTQW1GSTtBQUNFLGlCQUFPLHNCQURUO0FBRUUsZ0JBQU0sVUFGUjtBQUdFLGlCQUFPLE1BSFQ7QUFJRSxrQkFDRSxLQUFLLEtBQUwsQ0FBVyxRQUxmO0FBT0UscUJBQ0UsS0FBSztBQVJULFdBbkZKO1NBK0ZNO0FBQ0UsaUJBQU8sUUFEVDtBQUVFLGdCQUFNLFFBRlI7QUFHRSxpQkFBTyxNQUhUO0FBSUUsa0JBQ0UsS0FBSyxLQUFMLENBQVcsTUFMZjtBQU9FLHFCQUNFLEtBQUs7QUFSVCxXQS9GTjtTQTJHQTtBQUFBO1dBQUE7QUFDRSxtQkFBTyxRQURUO0FBRUUsd0JBQVEsMEJBRlY7V0FBQTtBQUFBLFVBM0dBO1NBK0dBO0FBL0dBO0FBWE4sTUFERjtBQWlJSztBQXJPb0IsRUFBbEIsQ0FBWDttQkF1T3FCLEkiLCJmaWxlIjoiMC41MDQ3ZGJmMmNmZDRlYWNjZWM0OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dC5qcyc7XG5pbXBvcnQge1xuICBoYXNoSGlzdG9yeVxufSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG52YXIgRm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZW1haWw6IFwiXCIsXG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgcGhvbmU6IFwiXCIsXG4gICAgICBjb21wYW55OiBcIlwiLFxuICAgICAgd2Vic2l0ZTogXCJcIixcbiAgICAgIGRlYWRsaW5lOiBcIlwiLFxuICAgICAgYnVkZ2V0OiBcIlwiLFxuICAgICAgZGVzYzogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHNhdmVBbmRDb250aW51ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBjYW5Qcm9jZWVkID0gdGhpcy52YWxpZGF0ZUVtYWlsKHRoaXMuc3RhdGUuZW1haWwpICYmICFfLmlzRW1wdHkodGhpcy5zdGF0ZS5uYW1lKSAmJiAhXy5pc0VtcHR5KHRoaXMuc3RhdGUucGhvbmUpO1xuXG4gICAgaWYgKGNhblByb2NlZWQpIHtcbiAgICAgIHZhciBuZXdVc2VyID0ge1xuICAgICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcbiAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5uYW1lLFxuICAgICAgICBjb21wYW55OiB0aGlzLnN0YXRlLmNvbXBhbnksXG4gICAgICAgIHBob25lOiB0aGlzLnN0YXRlLnBob25lLFxuICAgICAgICBkZWFkbGluZTogdGhpcy5zdGF0ZS5kZWFkbGluZSxcbiAgICAgICAgYnVkZ2V0OiB0aGlzLnN0YXRlLmJ1ZGdldCxcbiAgICAgICAgZGVzYzogdGhpcy5zdGF0ZS5kZXNjLFxuICAgICAgfTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBlbWFpbDogXCJcIixcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgY29tcGFueTogXCJcIixcbiAgICAgICAgcGhvbmU6IFwiXCIsXG4gICAgICAgIGRlYWRsaW5lOiBcIlwiLFxuICAgICAgICBidWRnZXQ6IFwiXCIsXG4gICAgICAgIGRlc2M6IFwiXCIsXG4gICAgICB9KTtcblxuICAgICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgIHVybDogJy9zaWdudXAnLFxuICAgICAgICBkYXRhOiBuZXdVc2VyLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihpbmZvKSB7XG4gICAgICAgICAgaGFzaEhpc3RvcnkucHVzaCgnLycpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZnMuZW1haWwuaXNWYWxpZCgpO1xuICAgICAgdGhpcy5yZWZzLm5hbWUuaXNWYWxpZCgpO1xuICAgICAgdGhpcy5yZWZzLnBob25lLmlzVmFsaWQoKTtcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlTmFtZUlucHV0KGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBuYW1lOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfSxcblxuICBoYW5kbGVDb21wYW55SW5wdXQoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbXBhbnk6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9LFxuXG4gIGhhbmRsZVBob25lSW5wdXQoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBob25lOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfSxcblxuICBoYW5kbGVFbWFpbElucHV0KGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlbWFpbDogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH0sXG5cbiAgaGFuZGxlRGVhZGxpbmVJbnB1dChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGVhZGxpbmU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9LFxuICBoYW5kbGVCdWRnZXRJbnB1dChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYnVkZ2V0OiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfSxcblxuICB2YWxpZGF0ZUVtYWlsOiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgcmV0dXJuIHJlLnRlc3QoZXZlbnQpO1xuICB9LFxuXG4gIGlzRW1wdHk6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuICFfLmlzRW1wdHkodmFsdWUpO1xuICB9LFxuXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIm5ld19wcm9qZWN0X3NjcmVlblwiID5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxoMlxuICAgICAgICAgIGNsYXNzTmFtZSA9IFwiZm9ybVRpdGxlXCJcbiAgICAgICAgICBhbGlnbiA9IFwiY2VudGVyXCIgPiBOZXcgUHJvamVjdCA8IC9oMj5cblxuXG4gICAgICAgICAgPHAgY2xhc3MgPSBcImZvcm1UaXRsZVwiID5cbiAgICAgICAgICAgIFdlIHdpbGwgY29udGFjdCB5b3UgYXNhcCA8IC9wPlxuXG5cbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiY3JlYXRlX2FjY291bnRfZm9ybVwiXG4gICAgICAgICAgICAgIG5hbWUgPSBcInJlZ0Zvcm1cIlxuICAgICAgICAgICAgICBvblN1Ym1pdCA9IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVBbmRDb250aW51ZVxuICAgICAgICAgICAgICB9ID5cblxuXG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHRleHQgPSBcIk5hbWVcIlxuICAgICAgICAgICAgICAgIHR5cGUgPSBcInRleHRcIlxuICAgICAgICAgICAgICAgIHJlZiA9IFwibmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsaWRhdGUgPSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmlzRW1wdHlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm5hbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZU5hbWVJbnB1dFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbXB0eU1lc3NhZ2UgPSBcIk5hbWUgY2FuJ3QgYmUgZW1wdHlcIiAvPlxuXG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICB0ZXh0ID0gXCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgIHJlZiA9IFwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgdHlwZSA9IFwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWxpZGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUVtYWlsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5lbWFpbFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRW1haWxJbnB1dFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gXCJFbWFpbCBpcyBpbnZhbGlkXCJcbiAgICAgICAgICAgICAgICAgIGVtcHR5TWVzc2FnZSA9IFwiRW1haWwgY2FuJ3QgYmUgZW1wdHlcIlxuICAgICAgICAgICAgICAgICAgZXJyb3JWaXNpYmxlID0ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dFbWFpbEVycm9yXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA9IFwiUGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgcmVmID0gXCJwaG9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlID0ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNFbXB0eVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucGhvbmVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVBob25lSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbXB0eU1lc3NhZ2UgPSBcIlBob25lIGNhbid0IGJlIGVtcHR5XCIgLz5cblxuXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA9IFwiQ29tcGFueVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInRleHRcIlxuICAgICAgICAgICAgICAgICAgICByZWYgPSBcImNvbXBhbnlcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbXBhbnlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNvbXBhbnlJbnB1dFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHRleHQgPSBcIldlYnNpdGVcIlxuICAgICAgICAgICAgICAgICAgdHlwZSA9IFwidGV4dFwiXG4gICAgICAgICAgICAgICAgICByZWYgPSBcIndlYnNpdGVcIlxuICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2Vic2l0ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlV2Vic2l0ZUlucHV0XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgdGV4dCA9IFwiQXBwcm94aW1hdGUgRGVhZGxpbmVcIlxuICAgICAgICAgICAgICAgICAgcmVmID0gXCJkZWFkbGluZVwiXG4gICAgICAgICAgICAgICAgICB0eXBlID0gXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRlYWRsaW5lXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVEZWFkbGluZUlucHV0XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA9IFwiQnVkZ2V0XCJcbiAgICAgICAgICAgICAgICAgICAgcmVmID0gXCJidWRnZXRcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5idWRnZXRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUJ1ZGdldElucHV0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlID0gXCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzcyA9IFwiYnRuIGJ0bi1jdXN0b20gYnRuLWJsb2NrXCIgPiBTdWJtaXQgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxiciAvPlxuXG5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZXhwb3J0IGRlZmF1bHQgRm9ybTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vanMvY29tcG9uZW50cy9OZXdQcm9qZWN0L0Zvcm0uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9