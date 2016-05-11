import React from 'react';
import _ from 'lodash';
import Input from './Input.js';
import {
  hashHistory
} from 'react-router';

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
    };
  },

  saveAndContinue(e) {
    e.preventDefault();
    var canProceed = this.validateEmail(this.state.email) && !_.isEmpty(this.state.name) && !_.isEmpty(this.state.phone);

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
          hashHistory.push('/');
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
    });
  },

  handleCompanyInput(event) {
    this.setState({
      company: event.target.value
    });
  },

  handlePhoneInput(event) {
    this.setState({
      phone: event.target.value
    });
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
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(event);
  },

  isEmpty: function(value) {
    return !_.isEmpty(value);
  },


  render: function() {
    return (
      <div className = "new_project_screen" >
        <br />
        <h2
          className = "formTitle"
          align = "center" > Thesis Project < /h2>


          <p class = "formTitle" >
            Sign up to check - in and chat with others. < /p>


            <form
              className = "create_account_form"
              name = "regForm"
              onSubmit = {
                this.saveAndContinue
              } >


              <Input
                text = "Name"
                type = "text"
                ref = "name"
                validate = {
                  this.isEmpty
                }
                value = {
                  this.state.name
                }
                onChange = {
                  this.handleNameInput
                }
                emptyMessage = "Name can't be empty" />

                <Input
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

                  <Input
                    text = "Phone"
                    type = "text"
                    ref = "phone"
                    validate = {
                      this.isEmpty
                    }
                    value = {
                      this.state.phone
                    }
                    onChange = {
                      this.handlePhoneInput
                    }
                    emptyMessage = "Phone can't be empty" />


                  <Input
                    text = "Company"
                    type = "text"
                    ref = "company"
                    value = {
                      this.state.company
                    }
                    onChange = {
                      this.handleCompanyInput
                    }
                    />

                <Input
                  text = "Website"
                  type = "text"
                  ref = "website"
                  value = {
                    this.state.website
                  }
                  onChange = {
                    this.handleWebsiteInput
                  }
                   />

                <Input
                  text = "Approximate Deadline"
                  ref = "deadline"
                  type = "text"
                  value = {
                    this.state.deadline
                  }
                  onChange = {
                    this.handleDeadlineInput
                  }
                  />

            <button
              type = "submit"
              class = "btn btn-custom btn-block" > Submit </button>

            <br />


            </form>
            </div>
          );
        }
      });
      export default Form;
