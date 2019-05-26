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
              <div >
              </div>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
        <div>
        <ul>
          <li> <FacebookShareButton url = {link} >
          <FacebookIcon size = {34} round = {true} />
                </FacebookShareButton> </li>
          <div />
          <li> <WhatsappShareButton url = {link} >
          <WhatsappIcon size = {34} round = {true} />
                </WhatsappShareButton> </li>

        </ul>
        </div>
	      <Routes/>


      </div>
    );
  }
}

export default withRouter(App);
