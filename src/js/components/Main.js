import React from "react";
import Form from "./NewProject/Form";
import ToggleDisplay from 'react-toggle-display';

var Main = React.createClass({
  getInitialState() {
    return {
      showForm: false
    };
  },

  _toggleForm() {
    this.setState({
      showForm: !this.state.showForm
    });
  },

  render: function() {
    return (

      <div class="row">
        <div class="col-md-3 main-left">
          <p class="leftText"> We are dev nola. We are dev nola. We are dev nola. We are dev nola. We are dev nola. We are dev nola. We are dev nola. We are dev nola. We are dev nola. We are dev nola. We are dev nola. We are dev nola. We are dev nola. </p>

        </div>

        <div class="col-md-9 main-right">

          <div id="background-carousel">
              <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="item active" style={{backgroundImage: "url(http://www3.hilton.com/resources/media/hi/MSYNHHH/en_US/img/shared/full_page_image_gallery/main/HH_welcome_49_1270x560_FitToBoxSmallDimension_Center.jpg)"}}></div>
                  <div class="item" style={{backgroundImage: "url(https://assets3.thrillist.com/v1/image/1445503/size/tl-horizontal_main/where-to-find-the-best-boiled-crawfish-in-new-orleans.jpg)"}}></div>
                  <div class="item" style={{backgroundImage: "url(https://static-blog.restplatzboerse.at/files/2014/01/shutterstock_66926818.jpg)"}}></div>
                </div>
              </div>
          </div>


          <div id="content-wrapper">

          	<div class="container">
                  <div class="page-header"><h1 class="titleh1">Dev Nola</h1></div>
                  <div>
                    <ToggleDisplay show={this.state.showForm}>
                      <button class="btn btn-default closeForm" onClick={this._toggleForm} >
                        Close Form
                      </button>
                      <Form />
                    </ToggleDisplay>
                  </div>

                  <ToggleDisplay hide={this.state.showForm}>
                  <button class="btn btn-default showFormBtn" onClick={this._toggleForm} >
                    Create a new project!
                  </button>
                </ToggleDisplay>
              </div>
          </div>

          <script>
          $(document).ready(function() {

          	$('#myCarousel').carousel({
          		pause: 'none'
          	})
          });
          </script>

        </div>

      </div>

    );
  }
});

export default Main;
