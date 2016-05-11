import React from 'react';
import _ from 'lodash';
import Input from './Input.js';
import { hashHistory} from 'react-router';

var Form = React.createClass({
  getInitialState: function() {
    return {
      email: "",
      name: "",
      phone: "",
      company: "",
      website: "",
      deadline: "",
      budget: "",
      desc: "",
    }
  },

  saveAndContinue(e) {
    e.preventDefault();
    var canProceed = this.validateEmail(this.state.email) && !_.isEmpty(this.state.name) && !_.isEmpty(this.state.phone)

    if (canProceed) {
      var newUser = {
        email: this.state.email,
        name: this.state.name,
        company: this.state.company,
        phone: this.state.phone,
        deadline: this.state.deadline,
        budget: this.state.budget,
      };
      this.setState({
        email: "",
        name: "",
        company: "",
        phone: "",
        deadline: "",
        budget: "",
      });

      $.ajax({
        type: "POST",
        url: '/signup',
        data: newUser,
        success: function(info) {
          hashHistory.push('/profile');
        }
      });

    } else {
      this.refs.email.isValid();
      this.refs.name.isValid();
      this.refs.phone.isValid();
    }
  },

  handleNameInput(event) {
    this.setState({
      name: event.target.value
    })
  },

  handleCompanyInput(event) {
    this.setState({
      company: event.target.value
    })
  },

  handlePhoneInput(event) {
    this.setState({
      phone: event.target.value
    })
  },

  handleEmailInput(event) {
    this.setState({
      email: event.target.value
    });
  },

  handleDeadlineInput(event) {
    this.setState({
      deadline: event.target.value
    });
  },
  handleBudgetInput(event) {
    this.setState({
      budget: event.target.value
    });
  },

  validateEmail: function(event) {
    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(event);
  },

  isEmpty: function(value) {
    return !_.isEmpty(value);
  },


  render: function() {
    return (
      < div className="new_project_screen" >
      < br / >
      < h2
      className="formTitle"
      align = "center" > Thesis Project < /h2>


      < p class = "formTitle" >
      Sign up to check - in and chat with others. < /p>


      < form
      className = "create_account_form"
      name = "regForm"
      onSubmit = {
        this.saveAndContinue
      } >


      < Input
      text = "First Name"
      type = "text"
      ref = "nameFirst"
      validate = {
        this.isEmpty
      }
      value = {
        this.state.nameFirst
      }
      onChange = {
        this.handleNameFirstInput
      }
      emptyMessage = "First name can't be empty" / >


      < Input
      text = "Last Name"
      type = "text"
      ref = "nameLast"
      validate = {
        this.isEmpty
      }
      value = {
        this.state.nameLast
      }
      onChange = {
        this.handleNameLastInput
      }
      emptyMessage = "Last name can't be empty" / >


      < Input
      text = "Username"
      type = "text"
      ref = "username"
      validate = {
        this.isEmpty
      }
      value = {
        this.state.username
      }
      onChange = {
        this.handleUsernameInput
      }
      emptyMessage = "Username can't be empty" / >



      < div class = "form-group" >


      < Input
      text = "Email Address"
      ref = "email"
      type = "text"
      validate = {
        this.validateEmail
      }
      value = {
        this.state.email
      }
      onChange = {
        this.handleEmailInput
      }
      errorMessage = "Email is invalid"
      emptyMessage = "Email can't be empty"
      errorVisible = {
        this.state.showEmailError
      }
      />


    < /div>


    < div class = "form-group" >


    < Input
    text = "Password"
    type = "password"
    ref = "password"
    validator = "true"
    minCharacters = "8"
    requireCapitals = "1"
    requireNumbers = "1"
    forbiddenWords = {
      this.state.forbiddenWords
    }
    value = {
      this.state.passsword
    }
    emptyMessage = "Password is invalid"
    onChange = {
      this.handlePasswordInput
    }
    class = "form-control" / >



    < Input
    class = "form-control"
    text = "Confirm password"
    ref = "passwordConfirm"
    type = "password"
    validate = {
      this.isConfirmedPassword
    }
    value = {
      this.state.confirmPassword
    }
    onChange = {
      this.handleConfirmPasswordInput
    }
    emptyMessage = "Please confirm your password"
    errorMessage = "Passwords don't match" / >


    Already have a account ? < a href = "#/login" > Login < /a>

    < /div>


    < button
    type = "submit"
    class = "btn btn-custom btn-block" > Register < /button>


    < br / >


    < /form>


    < /div>
  )
}
});
export default Form;
