import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { } from '../actions';
import { browserHistory } from 'react-router';


import '../App.css';


class Home extends Component {

  componentDidMount() {


  }


  renderList() {
    let list=[];


      list=[1,2,3,4,5,6]


  const listItems =list.map((subject) =>
    <Link
      style={{ listStyleType: 'none', width: '100%', textDecoration: 'none'}}
      onClick={() => console.log("hei");}
      key={subject.uid} >
      <div className="listItem">
        <div className="list-main">
          <div className="list-image">
            <img className="media-object" src={require('./images/delete.png')} style={{ heigh: 40, width: 40}}/>
          </div>
          <div className="list-text">
            <h3>{subject.emnenavn}</h3>
            <h5>{subject.emnekode}</h5>
          </div>
        </div>
        </div>
    </Link>

    );
    return (
      <ul className="col-md-4 list-group" style={{ width: '100%'}}>
        {listItems}
      </ul>
   );
  }



  render() {
    console.log('passivescroll', this.props.passiveScroll);
    return (
      <div style={{ backgroundColor: 'black'}}>
      <div className="App">

        <div className="App-header" style={{backgroundColor: 'black'}}>

        </div>

        <div className="App-main" id="map">


        </div>


      </div>

    </div>
    );
  }
  }


export default connect(null, {  })(Home);
