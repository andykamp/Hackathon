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
      <div style={{ backgroundColor: 'black'}}>
      <div className="App">

        <div className="App-header" style={{backgroundColor: 'black'}}>




            <button className="change btn button">Klasserom</button>
            <button className="changeUtesteder btn button">Utesteder</button>
            <button className="changeToalett btn button">Toalett</button>
            <button className="BI btn button">BI</button>





        </div>

        <div className="App-main" id="map">


        </div>


      </div>

    </div>
    );
  }
  }


export default connect(null, {  })(Home);
