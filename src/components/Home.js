import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { } from '../actions';
import { browserHistory } from 'react-router';


import '../App.css';


class Home extends Component {

  componentDidMount() {


  }





  render() {
    console.log('passivescroll', this.props.passiveScroll);
    return (
      <div>
      <div className="App">

        <div className="App-header">
          <div className="header-image">
            Backend
          </div>


          <div className="header-buttons">
            Buttons
          </div>
        </div>

        <div className="App-main">


        </div>


      </div>
      <div className="under-Div">
        <h1>About us</h1>
      </div>
    </div>
    );
  }
  }


export default connect(null, {  })(Home);
