import React, { Component } from 'react';
import logo from './logo.svg';
import firebase from 'firebase';
import { connect } from 'react-redux'; //to get acces to the actioncreater
import { emailChanged } from './actions'; //all the actions in the actioncreator
import './App.css';
import { browserHistory } from 'react-router';
import './newApp.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0', modalOpen: false};

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

onEmailChange(text) {
    this.props.emailChanged(text);
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
console.log(this.props.id);
    return (
      <div>
      <div className="App">

        <div className="App-header" style={{backgroundColor:'#e74c3c'}}>
          <div className="header-image">
            <img src={require('./components/images/accenture.png')} style={{height: '80%'}} alt="logo" />
          </div>


          <div className="header-buttons">
            <button className="btn header-button" onClick={this.onLocation.bind(this)}>
              HJELP
            </button>

          </div>
        </div>

        <div className="App-main" style={{backgroundColor: 'white'}}>
          <div style={{ textAlign: 'center'}}>




            <div className="home-info">
              <div className="home-buttons"></div>




              <div className="home-buttons">

                <div className="auth-form" >
                  <div className="auth-input">
                    <img  src={require('./components/images/uka2.jpg')}  style={{width: 300 }} alt="logo" />


                    <input
                      className="form-control"

                      placeholder="Din vennskapsid"
                      style={{ marginBottom: 5 }}
                      onChange={event => this.onEmailChange(event.target.value)}


                    />

                  </div>
                  <button onClick={this.onBackendPress.bind(this)}
                    className="btn btn button"
                    style={{backgroundColor: '#e74c3c'}}
                  >
                    Match me
                  </button>


                </div>
              </div>

              <div className="home-buttons"></div>

          </div>

          </div>
        </div>


      </div>
      <div className="AppColor">
        <h1>Help</h1>
        <img src={require('./components/images/divider.png')} style={{height: 30}} alt="logo" />

        <div className="info">
          <div className="underInfo"><h3>Enter id and get matched with Uka</h3></div>
          <div className="underInfo"><img src={require('./components/images/uka.jpg')} className="info-image-location" alt="logo" /></div>
        </div>



      </div>

    </div>
    );
  }
}



const mapStateToProps = (state) => {
  const { id } = state.red;

  //createQueue is from the reducer/index and is the reucer!
  return { id };
};
export default connect(mapStateToProps, { emailChanged })(App);
