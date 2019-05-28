import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import Routes from "./Routes";
import { Link, withRouter } from "react-router-dom";
import "./App.css";
import {
  FacebookShareButton,
  WhatsappShareButton,
} from 'react-share';

import {
  FacebookIcon,
  WhatsappIcon,
} from 'react-share';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      shareLink: "",
    };

  }

  async componentDidMount(){
    this.setState({
      shareLink: window.location.href}
    );
  }

  render() {

    const link = this.state.shareLink;
    console.log(link);
    return (

      <div>
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
            <Link to="/">Icons</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
       <ul >
          <div className = "divider">
          <li> <FacebookShareButton url = {link} >
            <FacebookIcon size = {30} round = {true} />
              </FacebookShareButton> </li>
         </div>
         <div className = "divider">
          <li> <WhatsappShareButton url = {link} >
          <WhatsappIcon size = {30} round = {true} />
              </WhatsappShareButton> </li>
          </div>
        </ul>
	<Routes/>


      </div>
    );
  }
}

export default withRouter(App);
