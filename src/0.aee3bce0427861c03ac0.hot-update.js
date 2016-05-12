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
	      _react2.default.createElement('br', null),
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
	            className: 'btn btn-custom btn-block newProjInput' },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL05ld1Byb2plY3QvRm9ybS5qcz8yMmNlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFJQSxLQUFJLE9BQU8sZ0JBQU0sV0FBTixDQUFrQjtBQUFBOztBQUMzQixvQkFBaUIsMkJBQVc7QUFDMUIsWUFBTztBQUNMLGNBQU8sRUFERjtBQUVMLGFBQU0sRUFGRDtBQUdMLGNBQU8sRUFIRjtBQUlMLGdCQUFTLEVBSko7QUFLTCxnQkFBUyxFQUxKO0FBTUwsaUJBQVUsRUFOTDtBQU9MLGVBQVEsRUFQSDtBQVFMLGFBQU07QUFSRCxNQUFQO0FBVUQsSUFaMEI7O0FBYzNCLGtCQWQyQiwyQkFjWCxDQWRXLEVBY1I7QUFDakIsT0FBRSxjQUFGO0FBQ0EsU0FBSSxhQUFhLEtBQUssYUFBTCxDQUFtQixLQUFLLEtBQUwsQ0FBVyxLQUE5QixLQUF3QyxDQUFDLGlCQUFFLE9BQUYsQ0FBVSxLQUFLLEtBQUwsQ0FBVyxJQUFyQixDQUF6QyxJQUF1RSxDQUFDLGlCQUFFLE9BQUYsQ0FBVSxLQUFLLEtBQUwsQ0FBVyxLQUFyQixDQUF6Rjs7QUFFQSxTQUFJLFVBQUosRUFBZ0I7QUFDZCxXQUFJLFVBQVU7QUFDWixnQkFBTyxLQUFLLEtBQUwsQ0FBVyxLQUROO0FBRVosZUFBTSxLQUFLLEtBQUwsQ0FBVyxJQUZMO0FBR1osa0JBQVMsS0FBSyxLQUFMLENBQVcsT0FIUjtBQUlaLGdCQUFPLEtBQUssS0FBTCxDQUFXLEtBSk47QUFLWixtQkFBVSxLQUFLLEtBQUwsQ0FBVyxRQUxUO0FBTVosaUJBQVEsS0FBSyxLQUFMLENBQVcsTUFOUDtBQU9aLGVBQU0sS0FBSyxLQUFMLENBQVc7QUFQTCxRQUFkO0FBU0EsWUFBSyxRQUFMLENBQWM7QUFDWixnQkFBTyxFQURLO0FBRVosZUFBTSxFQUZNO0FBR1osa0JBQVMsRUFIRztBQUlaLGdCQUFPLEVBSks7QUFL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SFI7QUFJRSxzQkFBTSxjQUpSO0FBS0UscUJBQ0UsS0FBSyxPQU5UO0FBUUUsa0JBQ0UsS0FBSyxLQUFMLENBQVcsS0FUZjtBQVdFLHFCQUNFLEtBQUssZ0JBWlQ7QUFjRSx5QkFBZSx1QkFkakIsR0E1Q047U0E2RE07QUFDRSxpQkFBTyxTQURUO0FBRUUsaUJBQU8sTUFGVDtBQUdFLGdCQUFNLFNBSFI7QUFJRSxzQkFBTSxjQUpSO0FBS0Usa0JBQ0UsS0FBSyxLQUFMLENBQVcsT0FOZjtBQVFFLHFCQUNFLEtBQUs7QUFUVCxXQTdETjtTQTBFSTtBQUNFLGlCQUFPLFNBRFQ7QUFFRSxpQkFBTyxNQUZUO0FBR0Usc0JBQU0sY0FIUjtBQUlFLGdCQUFNLFNBSlI7QUFLRSxrQkFDRSxLQUFLLEtBQUwsQ0FBVyxPQU5mO0FBUUUscUJBQ0UsS0FBSztBQVRULFdBMUVKO1NBdUZJO0FBQ0UsaUJBQU8sc0JBRFQ7QUFFRSxnQkFBTSxVQUZSO0FBR0UsaUJBQU8sTUFIVDtBQUlFLHNCQUFNLGNBSlI7QUFLRSxrQkFDRSxLQUFLLEtBQUwsQ0FBVyxRQU5mO0FBUUUscUJBQ0UsS0FBSztBQVRULFdBdkZKO1NBb0dNO0FBQ0UsaUJBQU8sUUFEVDtBQUVFLGdCQUFNLFFBRlI7QUFHRSxzQkFBTSxjQUhSO0FBSUUsaUJBQU8sTUFKVDtBQUtFLGtCQUNFLEtBQUssS0FBTCxDQUFXLE1BTmY7QUFRRSxxQkFDRSxLQUFLO0FBVFQsV0FwR047U0FpSEE7QUFBQTtXQUFBO0FBQ0UsbUJBQU8sUUFEVDtBQUVFLHdCQUFRLHVDQUZWO1dBQUE7QUFBQSxVQWpIQTtTQXFIQTtBQXJIQTtBQVhOLE1BREY7QUF1SUs7QUEzT29CLEVBQWxCLENBQVg7bUJBNk9xQixJIiwiZmlsZSI6IjAuYWVlM2JjZTA0Mjc4NjFjMDNhYzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQuanMnO1xuaW1wb3J0IHtcbiAgaGFzaEhpc3Rvcnlcbn0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxudmFyIEZvcm0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgbmFtZTogXCJcIixcbiAgICAgIHBob25lOiBcIlwiLFxuICAgICAgY29tcGFueTogXCJcIixcbiAgICAgIHdlYnNpdGU6IFwiXCIsXG4gICAgICBkZWFkbGluZTogXCJcIixcbiAgICAgIGJ1ZGdldDogXCJcIixcbiAgICAgIGRlc2M6IFwiXCIsXG4gICAgfTtcbiAgfSxcblxuICBzYXZlQW5kQ29udGludWUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgY2FuUHJvY2VlZCA9IHRoaXMudmFsaWRhdGVFbWFpbCh0aGlzLnN0YXRlLmVtYWlsKSAmJiAhXy5pc0VtcHR5KHRoaXMuc3RhdGUubmFtZSkgJiYgIV8uaXNFbXB0eSh0aGlzLnN0YXRlLnBob25lKTtcblxuICAgIGlmIChjYW5Qcm9jZWVkKSB7XG4gICAgICB2YXIgbmV3VXNlciA9IHtcbiAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcbiAgICAgICAgY29tcGFueTogdGhpcy5zdGF0ZS5jb21wYW55LFxuICAgICAgICBwaG9uZTogdGhpcy5zdGF0ZS5waG9uZSxcbiAgICAgICAgZGVhZGxpbmU6IHRoaXMuc3RhdGUuZGVhZGxpbmUsXG4gICAgICAgIGJ1ZGdldDogdGhpcy5zdGF0ZS5idWRnZXQsXG4gICAgICAgIGRlc2M6IHRoaXMuc3RhdGUuZGVzYyxcbiAgICAgIH07XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIGNvbXBhbnk6IFwiXCIsXG4gICAgICAgIHBob25lOiBcIlwiLFxuICAgICAgICBkZWFkbGluZTogXCJcIixcbiAgICAgICAgYnVkZ2V0OiBcIlwiLFxuICAgICAgICBkZXNjOiBcIlwiLFxuICAgICAgfSk7XG5cbiAgICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICB1cmw6ICcvc2lnbnVwJyxcbiAgICAgICAgZGF0YTogbmV3VXNlcixcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oaW5mbykge1xuICAgICAgICAgIGhhc2hIaXN0b3J5LnB1c2goJy8nKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWZzLmVtYWlsLmlzVmFsaWQoKTtcbiAgICAgIHRoaXMucmVmcy5uYW1lLmlzVmFsaWQoKTtcbiAgICAgIHRoaXMucmVmcy5waG9uZS5pc1ZhbGlkKCk7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZU5hbWVJbnB1dChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH0sXG5cbiAgaGFuZGxlQ29tcGFueUlucHV0KGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb21wYW55OiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfSxcblxuICBoYW5kbGVQaG9uZUlucHV0KGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwaG9uZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH0sXG5cbiAgaGFuZGxlRW1haWxJbnB1dChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9LFxuXG4gIGhhbmRsZURlYWRsaW5lSW5wdXQoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRlYWRsaW5lOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfSxcbiAgaGFuZGxlQnVkZ2V0SW5wdXQoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGJ1ZGdldDogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH0sXG5cbiAgdmFsaWRhdGVFbWFpbDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgIHJldHVybiByZS50ZXN0KGV2ZW50KTtcbiAgfSxcblxuICBpc0VtcHR5OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiAhXy5pc0VtcHR5KHZhbHVlKTtcbiAgfSxcblxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9XCJuZXdfcHJvamVjdF9zY3JlZW5cIiA+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8aDJcbiAgICAgICAgICBjbGFzc05hbWUgPSBcImZvcm1UaXRsZVwiXG4gICAgICAgICAgYWxpZ24gPSBcImNlbnRlclwiID4gTmV3IFByb2plY3QgPCAvaDI+XG48YnIgLz5cblxuICAgICAgICAgIDxwIGNsYXNzID0gXCJmb3JtVGl0bGVcIiA+XG4gICAgICAgICAgICBXZSB3aWxsIGNvbnRhY3QgeW91IGFzYXAgPCAvcD5cblxuXG4gICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImNyZWF0ZV9hY2NvdW50X2Zvcm1cIlxuICAgICAgICAgICAgICBuYW1lID0gXCJyZWdGb3JtXCJcbiAgICAgICAgICAgICAgb25TdWJtaXQgPSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlQW5kQ29udGludWVcbiAgICAgICAgICAgICAgfSA+XG5cblxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICB0ZXh0ID0gXCJOYW1lXCJcbiAgICAgICAgICAgICAgICB0eXBlID0gXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICByZWYgPSBcIm5hbWVcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibmV3UHJvaklucHV0XCJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaXNFbXB0eVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTmFtZUlucHV0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVtcHR5TWVzc2FnZSA9IFwiTmFtZSBjYW4ndCBiZSBlbXB0eVwiIC8+XG5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHRleHQgPSBcIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgcmVmID0gXCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlID0gXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRlID0ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlRW1haWxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlID0ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmVtYWlsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFbWFpbElucHV0XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBcIkVtYWlsIGlzIGludmFsaWRcIlxuICAgICAgICAgICAgICAgICAgZW1wdHlNZXNzYWdlID0gXCJFbWFpbCBjYW4ndCBiZSBlbXB0eVwiXG4gICAgICAgICAgICAgICAgICBlcnJvclZpc2libGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0VtYWlsRXJyb3JcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gXCJQaG9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInRleHRcIlxuICAgICAgICAgICAgICAgICAgICByZWYgPSBcInBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuZXdQcm9qSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRW1wdHlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBob25lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVQaG9uZUlucHV0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZW1wdHlNZXNzYWdlID0gXCJQaG9uZSBjYW4ndCBiZSBlbXB0eVwiIC8+XG5cblxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIHRleHQgPSBcIkNvbXBhbnlcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgcmVmID0gXCJjb21wYW55XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuZXdQcm9qSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbXBhbnlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNvbXBhbnlJbnB1dFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHRleHQgPSBcIldlYnNpdGVcIlxuICAgICAgICAgICAgICAgICAgdHlwZSA9IFwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cIm5ld1Byb2pJbnB1dFwiXG4gICAgICAgICAgICAgICAgICByZWYgPSBcIndlYnNpdGVcIlxuICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2Vic2l0ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlV2Vic2l0ZUlucHV0XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgdGV4dCA9IFwiQXBwcm94aW1hdGUgRGVhZGxpbmVcIlxuICAgICAgICAgICAgICAgICAgcmVmID0gXCJkZWFkbGluZVwiXG4gICAgICAgICAgICAgICAgICB0eXBlID0gXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmV3UHJvaklucHV0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRlYWRsaW5lXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVEZWFkbGluZUlucHV0XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA9IFwiQnVkZ2V0XCJcbiAgICAgICAgICAgICAgICAgICAgcmVmID0gXCJidWRnZXRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5ld1Byb2pJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJ1ZGdldFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQnVkZ2V0SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGUgPSBcInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNsYXNzID0gXCJidG4gYnRuLWN1c3RvbSBidG4tYmxvY2sgbmV3UHJvaklucHV0XCIgPiBTdWJtaXQgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxiciAvPlxuXG5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZXhwb3J0IGRlZmF1bHQgRm9ybTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vanMvY29tcG9uZW50cy9OZXdQcm9qZWN0L0Zvcm0uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9