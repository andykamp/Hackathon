import React, { Component } from 'react';
import logo from './logo.svg';
import firebase from 'firebase';
import { connect } from 'react-redux'; //to get acces to the actioncreater
import {  } from './actions'; //all the actions in the actioncreator
import './App.css';
import { browserHistory } from 'react-router';
import './newApp.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0' };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

handleScroll(event) {
  /*let  intElemScrollTop = Math.round(window.scrollY);
        //console.log('scrollTop', window.scrollY);
      const yscroll= intElemScrollTop;
      //writes pixels to database
      if (this.props.passiveScroll === false ){
        this.props.writeScrollToDatabase({ yscroll });
      }

      //window.scrollTo(0,500);
      this.props.activateScroll();*/


}

onLocation() {
window.scrollTo(0,this.state.height);
}
onInfo () {
  window.scrollTo(0,(this.state.height)*2);

}
onBackendPress() {
  browserHistory.push('/Overlevelsesguide');

}


  render() {

    return (
      <div>
      <div className="App">

        <div className="App-header" style={{backgroundColor:'black'}}>
          <div className="header-image">
            Norkart
          </div>


          <div className="header-buttons">
            <button className="btn header-button" onClick={this.onLocation.bind(this)}>
              Location
            </button>
          
          </div>
        </div>

        <div className="App-main" style={{backgroundColor: 'black'}}>
          <div style={{ textAlign: 'center'}}>



            <div className="home-info">
              <div className="home-buttons"></div>




              <div className="home-buttons">
                <div>
                  <h1 className="header-textphoto" style={{ fontSize: 60}}>NORKART</h1>
                  <div style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <button onClick={this.onBackendPress.bind(this)}
                      className="btn btn button"

                    >
                      GO TO MAP
                    </button>

                  </div>
                </div>
              </div>

              <div className="home-buttons"></div>

          </div>

          </div>
        </div>


      </div>
      <div className="AppColor">
        <h1>Location</h1>
        <div className="info">
          <div className="underInfo"><h3>We are located at folloveien 41</h3></div>
          <div className="underInfo"><img src={require('./components/images/map icon.png')} className="info-image-location" alt="logo" /></div>
        </div>



      </div>

    </div>
    );
  }
}



const mapStateToProps = (state) => {
  const {  } = state.scroll;

  //createQueue is from the reducer/index and is the reucer!
  return { };
};
export default connect(null, {  })(App);
