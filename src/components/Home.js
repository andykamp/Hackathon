import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { } from '../actions';
import { browserHistory } from 'react-router';


import '../App.css';


class Home extends Component {

  componentDidMount() {

    console.log(this.props.id);
  }

getMyScore () {
  var a = { '1091874697609583': [['Kulinarisk Mordhistorie', 98.0],
                      ['Jubileums kavalkade', 94.0],
                      ['Pirum OldBoys', 90.0],
                      ['Martin Garrix', 80.0],
                      ['Chillspising', 67.0]],
 '1121223008012341': [['Martin Garrix', 97.0],
                      ['Chillspising', 90.0],
                      ['Kulinarisk Mordhistorie', 83.0],
                      ['Pirum OldBoys', 83.0],
                      ['Jubileums kavalkade', 79.0]],
 '115755242470386': [['Kulinarisk Mordhistorie', 96.0],
                     ['Jubileums kavalkade', 90.0],
                     ['Pirum OldBoys', 86.0],
                     ['Martin Garrix', 85.0],
                     ['Chillspising', 74.0]],
 '116101802412382': [['Kulinarisk Mordhistorie', 98.0],
                     ['Jubileums kavalkade', 96.0],
                     ['Pirum OldBoys', 92.0],
                     ['Martin Garrix', 78.0],
                     ['Chillspising', 63.0]],
 '116770799021337': [['Martin Garrix', 94.0],
                     ['Kulinarisk Mordhistorie', 88.0],
                     ['Chillspising', 86.0],
                     ['Jubileums kavalkade', 85.0],
                     ['Pirum OldBoys', 85.0]],
 '117617038932852': [['Martin Garrix', 95.0],
                     ['Chillspising', 91.0],
                     ['Kulinarisk Mordhistorie', 81.0],
                     ['Pirum OldBoys', 74.0],
                     ['Jubileums kavalkade', 72.0]],
 '118056842207313': [['Kulinarisk Mordhistorie', 98.0],
                     ['Jubileums kavalkade', 91.0],
                     ['Pirum OldBoys', 86.0],
                     ['Martin Garrix', 74.0],
                     ['Chillspising', 61.0]],
 '118289742175239': [['Kulinarisk Mordhistorie', 90.0],
                     ['Martin Garrix', 89.0],
                     ['Jubileums kavalkade', 82.0],
                     ['Pirum OldBoys', 82.0],
                     ['Chillspising', 81.0]],
 '118830638812958': [['Kulinarisk Mordhistorie', 94.0],
                     ['Jubileums kavalkade', 90.0],
                     ['Pirum OldBoys', 88.0],
                     ['Martin Garrix', 88.0],
                     ['Chillspising', 77.0]],
 '119739632022284': [['Kulinarisk Mordhistorie', 98.0],
                     ['Jubileums kavalkade', 91.0],
                     ['Pirum OldBoys', 86.0],
                     ['Martin Garrix', 70.0],
                     ['Chillspising', 55.0]],
 '120648078609927': [['Kulinarisk Mordhistorie', 98.0],
                     ['Jubileums kavalkade', 90.0],
                     ['Pirum OldBoys', 81.0],
                     ['Martin Garrix', 74.0],
                     ['Chillspising', 62.0]],
 '120656438604625': [['Kulinarisk Mordhistorie', 99.0],
                     ['Jubileums kavalkade', 93.0],
                     ['Pirum OldBoys', 85.0],
                     ['Martin Garrix', 64.0],
                     ['Chillspising', 48.0]],
 '121879821897638': [['Kulinarisk Mordhistorie', 98.0],
                     ['Jubileums kavalkade', 94.0],
                     ['Pirum OldBoys', 90.0],
                     ['Martin Garrix', 80.0],
                     ['Chillspising', 67.0]],
 '123355928387168': [['Kulinarisk Mordhistorie', 94.0],
                     ['Jubileums kavalkade', 90.0],
                     ['Pirum OldBoys', 88.0],
                     ['Martin Garrix', 88.0],
                     ['Chillspising', 77.0]],
 '124485444962465': [['Martin Garrix', 93.0],
                     ['Kulinarisk Mordhistorie', 88.0],
                     ['Chillspising', 85.0],
                     ['Pirum OldBoys', 85.0],
                     ['Jubileums kavalkade', 83.0]],
 '125490464775053': [['Martin Garrix', 93.0],
                     ['Chillspising', 89.0],
                     ['Kulinarisk Mordhistorie', 83.0],
                     ['Jubileums kavalkade', 73.0],
                     ['Pirum OldBoys', 72.0]],
 '131240974267778': [['Martin Garrix', 91.0],
                     ['Kulinarisk Mordhistorie', 91.0],
                     ['Jubileums kavalkade', 84.0],
                     ['Chillspising', 83.0],
                     ['Pirum OldBoys', 83.0]],
 '131731220811247': [['Kulinarisk Mordhistorie', 91.0],
                     ['Martin Garrix', 90.0],
                     ['Jubileums kavalkade', 89.0],
                     ['Pirum OldBoys', 85.0],
                     ['Chillspising', 81.0]],
 '1322247351217382': [['Kulinarisk Mordhistorie', 97.0],
                      ['Jubileums kavalkade', 91.0],
                      ['Pirum OldBoys', 88.0],
                      ['Martin Garrix', 82.0],
                      ['Chillspising', 70.0]],
 '135883837034657': [['Kulinarisk Mordhistorie', 94.0],
                     ['Jubileums kavalkade', 90.0],
                     ['Pirum OldBoys', 88.0],
                     ['Martin Garrix', 88.0],
                     ['Chillspising', 77.0]],
 '136146103672456': [['Kulinarisk Mordhistorie', 93.0],
                     ['Jubileums kavalkade', 87.0],
                     ['Pirum OldBoys', 87.0],
                     ['Martin Garrix', 86.0],
                     ['Chillspising', 75.0]],
 '136396657001349': [['Kulinarisk Mordhistorie', 92.0],
                     ['Martin Garrix', 90.0],
                     ['Jubileums kavalkade', 88.0],
                     ['Pirum OldBoys', 86.0],
                     ['Chillspising', 81.0]],
 '137007970269932': [['Kulinarisk Mordhistorie', 99.0],
                     ['Jubileums kavalkade', 94.0],
                     ['Pirum OldBoys', 88.0],
                     ['Martin Garrix', 73.0],
                     ['Chillspising', 58.0]],
 '1396979797066244': [['Kulinarisk Mordhistorie', 93.0],
                      ['Pirum OldBoys', 92.0],
                      ['Jubileums kavalkade', 92.0],
                      ['Martin Garrix', 88.0],
                      ['Chillspising', 76.0]],
 '1451207721640500': [['Martin Garrix', 93.0],
                      ['Kulinarisk Mordhistorie', 88.0],
                      ['Chillspising', 85.0],
                      ['Pirum OldBoys', 85.0],
                      ['Jubileums kavalkade', 83.0]],
 '1458290774257846': [['Kulinarisk Mordhistorie', 96.0],
                      ['Jubileums kavalkade', 90.0],
                      ['Pirum OldBoys', 86.0],
                      ['Martin Garrix', 85.0],
                      ['Chillspising', 74.0]],
 '1486975168063102': [['Kulinarisk Mordhistorie', 98.0],
                      ['Jubileums kavalkade', 91.0],
                      ['Pirum OldBoys', 86.0],
                      ['Martin Garrix', 74.0],
                      ['Chillspising', 61.0]],
 '1488603141206763': [['Kulinarisk Mordhistorie', 97.0],
                      ['Jubileums kavalkade', 91.0],
                      ['Pirum OldBoys', 89.0],
                      ['Martin Garrix', 78.0],
                      ['Chillspising', 65.0]],
 '1509252535821277': [['Kulinarisk Mordhistorie', 99.0],
                      ['Jubileums kavalkade', 94.0],
                      ['Pirum OldBoys', 88.0],
                      ['Martin Garrix', 68.0],
                      ['Chillspising', 52.0]],
 '155299561725076': [['Martin Garrix', 91.0],
                     ['Kulinarisk Mordhistorie', 91.0],
                     ['Jubileums kavalkade', 84.0],
                     ['Chillspising', 83.0],
                     ['Pirum OldBoys', 83.0]],
 '1564301523625935': [['Martin Garrix', 97.0],
                      ['Chillspising', 92.0],
                      ['Kulinarisk Mordhistorie', 81.0],
                      ['Pirum OldBoys', 79.0],
                      ['Jubileums kavalkade', 75.0]],
 '1574729569216017': [['Kulinarisk Mordhistorie', 92.0],
                      ['Martin Garrix', 89.0],
                      ['Jubileums kavalkade', 86.0],
                      ['Pirum OldBoys', 85.0],
                      ['Chillspising', 79.0]],
 '157887968140456': [['Kulinarisk Mordhistorie', 97.0],
                     ['Jubileums kavalkade', 91.0],
                     ['Pirum OldBoys', 88.0],
                     ['Martin Garrix', 82.0],
                     ['Chillspising', 70.0]],
 '1585442358190409': [['Pirum OldBoys', 93.0],
                      ['Jubileums kavalkade', 91.0],
                      ['Martin Garrix', 90.0],
                      ['Kulinarisk Mordhistorie', 88.0],
                      ['Chillspising', 78.0]],
 '160877887827026': [['Kulinarisk Mordhistorie', 95.0],
                     ['Jubileums kavalkade', 88.0],
                     ['Pirum OldBoys', 86.0],
                     ['Martin Garrix', 79.0],
                     ['Chillspising', 67.0]],
 '161547697757517': [['Kulinarisk Mordhistorie', 98.0],
                     ['Jubileums kavalkade', 90.0],
                     ['Pirum OldBoys', 81.0],
                     ['Martin Garrix', 74.0],
                     ['Chillspising', 62.0]],
 '1655576954498711': [['Martin Garrix', 99.0],
                      ['Chillspising', 94.0],
                      ['Pirum OldBoys', 79.0],
                      ['Kulinarisk Mordhistorie', 72.0],
                      ['Jubileums kavalkade', 71.0]],
 '165741387314403': [['Kulinarisk Mordhistorie', 92.0],
                     ['Martin Garrix', 90.0],
                     ['Jubileums kavalkade', 88.0],
                     ['Pirum OldBoys', 86.0],
                     ['Chillspising', 81.0]],
 '1684267091592980': [['Kulinarisk Mordhistorie', 98.0],
                      ['Jubileums kavalkade', 94.0],
                      ['Pirum OldBoys', 90.0],
                      ['Martin Garrix', 80.0],
                      ['Chillspising', 67.0]],
 '1690626804315721': [['Kulinarisk Mordhistorie', 92.0],
                      ['Martin Garrix', 89.0],
                      ['Jubileums kavalkade', 86.0],
                      ['Pirum OldBoys', 85.0],
                      ['Chillspising', 79.0]],
 '1704521382952019': [['Martin Garrix', 92.0],
                      ['Kulinarisk Mordhistorie', 90.0],
                      ['Jubileums kavalkade', 86.0],
                      ['Chillspising', 84.0],
                      ['Pirum OldBoys', 83.0]],
 '1704758103166066': [['Martin Garrix', 96.0],
                      ['Chillspising', 88.0],
                      ['Pirum OldBoys', 86.0],
                      ['Kulinarisk Mordhistorie', 85.0],
                      ['Jubileums kavalkade', 83.0]],
 '171532673424184': [['Kulinarisk Mordhistorie', 98.0],
                     ['Jubileums kavalkade', 91.0],
                     ['Pirum OldBoys', 85.0],
                     ['Martin Garrix', 78.0],
                     ['Chillspising', 66.0]],
 '1716341158673881': [['Kulinarisk Mordhistorie', 98.0],
                      ['Jubileums kavalkade', 90.0],
                      ['Pirum OldBoys', 81.0],
                      ['Martin Garrix', 74.0],
                      ['Chillspising', 62.0]],
 '1739792706314815': [['Kulinarisk Mordhistorie', 93.0],
                      ['Martin Garrix', 82.0],
                      ['Jubileums kavalkade', 82.0],
                      ['Pirum OldBoys', 76.0],
                      ['Chillspising', 74.0]],
 '176484119563868': [['Kulinarisk Mordhistorie', 90.0],
                     ['Martin Garrix', 89.0],
                     ['Jubileums kavalkade', 82.0],
                     ['Pirum OldBoys', 82.0],
                     ['Chillspising', 81.0]],
 '1805244169518106': [['Kulinarisk Mordhistorie', 98.0],
                      ['Jubileums kavalkade', 91.0],
                      ['Pirum OldBoys', 85.0],
                      ['Martin Garrix', 78.0],
                      ['Chillspising', 66.0]],
 '180546299181198': [['Kulinarisk Mordhistorie', 96.0],
                     ['Jubileums kavalkade', 90.0],
                     ['Pirum OldBoys', 86.0],
                     ['Martin Garrix', 85.0],
                     ['Chillspising', 74.0]],
 '1807281369287606': [['Kulinarisk Mordhistorie', 97.0],
                      ['Jubileums kavalkade', 91.0],
                      ['Pirum OldBoys', 88.0],
                      ['Martin Garrix', 82.0],
                      ['Chillspising', 70.0]],
 '1883980075200577': [['Kulinarisk Mordhistorie', 95.0],
                      ['Jubileums kavalkade', 86.0],
                      ['Martin Garrix', 82.0],
                      ['Pirum OldBoys', 80.0],
                      ['Chillspising', 73.0]],
 '1893651537556228': [['Kulinarisk Mordhistorie', 95.0],
                      ['Jubileums kavalkade', 93.0],
                      ['Pirum OldBoys', 91.0],
                      ['Martin Garrix', 86.0],
                      ['Chillspising', 74.0]],
 '1903329163264819': [['Kulinarisk Mordhistorie', 93.0],
                      ['Jubileums kavalkade', 87.0],
                      ['Pirum OldBoys', 87.0],
                      ['Martin Garrix', 86.0],
                      ['Chillspising', 75.0]],
 '1915114832070940': [['Kulinarisk Mordhistorie', 92.0],
                      ['Martin Garrix', 90.0],
                      ['Jubileums kavalkade', 88.0],
                      ['Pirum OldBoys', 86.0],
                      ['Chillspising', 81.0]],
 '1923997317626749': [['Kulinarisk Mordhistorie', 98.0],
                      ['Jubileums kavalkade', 94.0],
                      ['Pirum OldBoys', 90.0],
                      ['Martin Garrix', 80.0],
                      ['Chillspising', 67.0]],
 '1930033057321453': [['Kulinarisk Mordhistorie', 95.0],
                      ['Jubileums kavalkade', 91.0],
                      ['Pirum OldBoys', 91.0],
                      ['Martin Garrix', 81.0],
                      ['Chillspising', 68.0]],
 '1935927113345845': [['Martin Garrix', 91.0],
                      ['Chillspising', 86.0],
                      ['Kulinarisk Mordhistorie', 85.0],
                      ['Jubileums kavalkade', 75.0],
                      ['Pirum OldBoys', 75.0]],
 '1991240197827958': [['Kulinarisk Mordhistorie', 96.0],
                      ['Jubileums kavalkade', 87.0],
                      ['Pirum OldBoys', 82.0],
                      ['Martin Garrix', 79.0],
                      ['Chillspising', 68.0]],
 '1991564317795359': [['Kulinarisk Mordhistorie', 94.0],
                      ['Jubileums kavalkade', 90.0],
                      ['Pirum OldBoys', 88.0],
                      ['Martin Garrix', 88.0],
                      ['Chillspising', 77.0]],
 '201595780379126': [['Martin Garrix', 97.0],
                     ['Chillspising', 93.0],
                     ['Kulinarisk Mordhistorie', 78.0],
                     ['Pirum OldBoys', 75.0],
                     ['Jubileums kavalkade', 70.0]],
 '2031735000391542': [['Martin Garrix', 95.0],
                      ['Chillspising', 87.0],
                      ['Pirum OldBoys', 86.0],
                      ['Kulinarisk Mordhistorie', 85.0],
                      ['Jubileums kavalkade', 82.0]],
 '2047064265307554': [['Kulinarisk Mordhistorie', 95.0],
                      ['Jubileums kavalkade', 87.0],
                      ['Pirum OldBoys', 85.0],
                      ['Martin Garrix', 83.0],
                      ['Chillspising', 72.0]],
 '2064915427128109': [['Kulinarisk Mordhistorie', 92.0],
                      ['Martin Garrix', 90.0],
                      ['Pirum OldBoys', 90.0],
                      ['Jubileums kavalkade', 89.0],
                      ['Chillspising', 79.0]],
 '216617185537644': [['Kulinarisk Mordhistorie', 97.0],
                     ['Jubileums kavalkade', 91.0],
                     ['Pirum OldBoys', 88.0],
                     ['Martin Garrix', 82.0],
                     ['Chillspising', 70.0]],
 '247876935734298': [['Martin Garrix', 94.0],
                     ['Pirum OldBoys', 89.0],
                     ['Kulinarisk Mordhistorie', 87.0],
                     ['Jubileums kavalkade', 85.0],
                     ['Chillspising', 85.0]],
 '272470123244790': [['Kulinarisk Mordhistorie', 98.0],
                     ['Jubileums kavalkade', 94.0],
                     ['Pirum OldBoys', 90.0],
                     ['Martin Garrix', 80.0],
                     ['Chillspising', 67.0]],
 '282717415551057': [['Kulinarisk Mordhistorie', 98.0],
                     ['Jubileums kavalkade', 94.0],
                     ['Pirum OldBoys', 90.0],
                     ['Martin Garrix', 80.0],
                     ['Chillspising', 67.0]],
 '288081731677230': [['Kulinarisk Mordhistorie', 98.0],
                     ['Jubileums kavalkade', 91.0],
                     ['Pirum OldBoys', 85.0],
                     ['Martin Garrix', 78.0],
                     ['Chillspising', 66.0]],
 '295342420945785': [['Kulinarisk Mordhistorie', 97.0],
                     ['Jubileums kavalkade', 93.0],
                     ['Pirum OldBoys', 88.0],
                     ['Martin Garrix', 83.0],
                     ['Chillspising', 71.0]],
 '303522013458283': [['Martin Garrix', 91.0],
                     ['Kulinarisk Mordhistorie', 88.0],
                     ['Chillspising', 85.0],
                     ['Jubileums kavalkade', 80.0],
                     ['Pirum OldBoys', 79.0]],
 '317518602051182': [['Kulinarisk Mordhistorie', 95.0],
                     ['Jubileums kavalkade', 91.0],
                     ['Pirum OldBoys', 86.0],
                     ['Martin Garrix', 85.0],
                     ['Chillspising', 75.0]],
 '317810415349962': [['Martin Garrix', 95.0],
                     ['Chillspising', 90.0],
                     ['Kulinarisk Mordhistorie', 80.0],
                     ['Pirum OldBoys', 78.0],
                     ['Jubileums kavalkade', 72.0]],
 '336576913436276': [['Kulinarisk Mordhistorie', 95.0],
                     ['Jubileums kavalkade', 87.0],
                     ['Pirum OldBoys', 85.0],
                     ['Martin Garrix', 83.0],
                     ['Chillspising', 72.0]],
 '340044813122723': [['Martin Garrix', 91.0],
                     ['Kulinarisk Mordhistorie', 88.0],
                     ['Chillspising', 85.0],
                     ['Jubileums kavalkade', 80.0],
                     ['Pirum OldBoys', 79.0]],
 '348300055629039': [['Martin Garrix', 75.0],
                     ['Pirum OldBoys', 71.0],
                     ['Chillspising', 66.0],
                     ['Kulinarisk Mordhistorie', 61.0],
                     ['Jubileums kavalkade', 53.0]],
 '353453295109424': [['Kulinarisk Mordhistorie', 96.0],
                     ['Jubileums kavalkade', 87.0],
                     ['Pirum OldBoys', 82.0],
                     ['Martin Garrix', 79.0],
                     ['Chillspising', 68.0]],
 '358104827957120': [['Kulinarisk Mordhistorie', 95.0],
                     ['Jubileums kavalkade', 87.0],
                     ['Pirum OldBoys', 85.0],
                     ['Martin Garrix', 83.0],
                     ['Chillspising', 72.0]],
 '361043450992924': [['Kulinarisk Mordhistorie', 93.0],
                     ['Martin Garrix', 83.0],
                     ['Jubileums kavalkade', 83.0],
                     ['Pirum OldBoys', 81.0],
                     ['Chillspising', 74.0]],
 '373001819786035': [['Kulinarisk Mordhistorie', 97.0],
                     ['Jubileums kavalkade', 91.0],
                     ['Pirum OldBoys', 89.0],
                     ['Martin Garrix', 78.0],
                     ['Chillspising', 65.0]],
 '383163532114003': [['Kulinarisk Mordhistorie', 90.0],
                     ['Martin Garrix', 89.0],
                     ['Jubileums kavalkade', 82.0],
                     ['Pirum OldBoys', 82.0],
                     ['Chillspising', 81.0]],
 '387728038297018': [['Martin Garrix', 95.0],
                     ['Chillspising', 88.0],
                     ['Kulinarisk Mordhistorie', 86.0],
                     ['Pirum OldBoys', 82.0],
                     ['Jubileums kavalkade', 81.0]],
 '412011569195628': [['Kulinarisk Mordhistorie', 94.0],
                     ['Jubileums kavalkade', 83.0],
                     ['Martin Garrix', 79.0],
                     ['Pirum OldBoys', 78.0],
                     ['Chillspising', 70.0]],
 '416076452122399': [['Martin Garrix', 91.0],
                     ['Kulinarisk Mordhistorie', 90.0],
                     ['Pirum OldBoys', 87.0],
                     ['Jubileums kavalkade', 85.0],
                     ['Chillspising', 82.0]],
 '471715326540611': [['Kulinarisk Mordhistorie', 96.0],
                     ['Jubileums kavalkade', 90.0],
                     ['Pirum OldBoys', 86.0],
                     ['Martin Garrix', 85.0],
                     ['Chillspising', 74.0]],
 '485132711870093': [['Kulinarisk Mordhistorie', 92.0],
                     ['Martin Garrix', 86.0],
                     ['Jubileums kavalkade', 82.0],
                     ['Pirum OldBoys', 79.0],
                     ['Chillspising', 78.0]],
 '486411305056731': [['Martin Garrix', 88.0],
                     ['Kulinarisk Mordhistorie', 87.0],
                     ['Chillspising', 83.0],
                     ['Jubileums kavalkade', 75.0],
                     ['Pirum OldBoys', 73.0]],
 '493606137667925': [['Martin Garrix', 92.0],
                     ['Kulinarisk Mordhistorie', 90.0],
                     ['Jubileums kavalkade', 86.0],
                     ['Chillspising', 84.0],
                     ['Pirum OldBoys', 83.0]],
 '495188770867374': [['Kulinarisk Mordhistorie', 98.0],
                     ['Jubileums kavalkade', 91.0],
                     ['Pirum OldBoys', 85.0],
                     ['Martin Garrix', 78.0],
                     ['Chillspising', 66.0]],
 '516114338727313': [['Jubileums kavalkade', 97.0],
                     ['Pirum OldBoys', 97.0],
                     ['Kulinarisk Mordhistorie', 94.0],
                     ['Martin Garrix', 80.0],
                     ['Chillspising', 64.0]],
 '533131530357182': [['Martin Garrix', 91.0],
                     ['Kulinarisk Mordhistorie', 88.0],
                     ['Chillspising', 85.0],
                     ['Jubileums kavalkade', 80.0],
                     ['Pirum OldBoys', 79.0]],
 '580427142081476': [['Martin Garrix', 97.0],
                     ['Chillspising', 90.0],
                     ['Kulinarisk Mordhistorie', 83.0],
                     ['Pirum OldBoys', 83.0],
                     ['Jubileums kavalkade', 79.0]],
 '629292447270918': [['Martin Garrix', 95.0],
                     ['Chillspising', 88.0],
                     ['Kulinarisk Mordhistorie', 86.0],
                     ['Pirum OldBoys', 82.0],
                     ['Jubileums kavalkade', 81.0]],
 '649662322088231': [['Martin Garrix', 98.0],
                     ['Chillspising', 96.0],
                     ['Kulinarisk Mordhistorie', 74.0],
                     ['Pirum OldBoys', 71.0],
                     ['Jubileums kavalkade', 68.0]],
 '706911806173009': [['Kulinarisk Mordhistorie', 92.0],
                     ['Martin Garrix', 90.0],
                     ['Jubileums kavalkade', 88.0],
                     ['Pirum OldBoys', 86.0],
                     ['Chillspising', 81.0]],
 '740992852776089': [['Kulinarisk Mordhistorie', 96.0],
                     ['Jubileums kavalkade', 90.0],
                     ['Pirum OldBoys', 86.0],
                     ['Martin Garrix', 85.0],
                     ['Chillspising', 74.0]],
 '750342525169527': [['Martin Garrix', 91.0],
                     ['Kulinarisk Mordhistorie', 88.0],
                     ['Chillspising', 85.0],
                     ['Jubileums kavalkade', 80.0],
                     ['Pirum OldBoys', 79.0]],
 '814600625385165': [['Martin Garrix', 94.0],
                     ['Kulinarisk Mordhistorie', 88.0],
                     ['Chillspising', 86.0],
                     ['Jubileums kavalkade', 85.0],
                     ['Pirum OldBoys', 85.0]],
 '832815503556701': [['Kulinarisk Mordhistorie', 94.0],
                     ['Jubileums kavalkade', 86.0],
                     ['Martin Garrix', 86.0],
                     ['Pirum OldBoys', 83.0],
                     ['Chillspising', 76.0]],
 '868970116599441': [['Kulinarisk Mordhistorie', 96.0],
                     ['Jubileums kavalkade', 90.0],
                     ['Pirum OldBoys', 86.0],
                     ['Martin Garrix', 85.0],
                     ['Chillspising', 74.0]],
 '874839929351361': [['Martin Garrix', 98.0],
                     ['Chillspising', 95.0],
                     ['Kulinarisk Mordhistorie', 75.0],
                     ['Pirum OldBoys', 71.0],
                     ['Jubileums kavalkade', 67.0]],
 'bobby': [['Kulinarisk Mordhistorie', 99.0],
           ['Jubileums kavalkade', 94.0],
           ['Pirum OldBoys', 88.0],
           ['Martin Garrix', 73.0],
           ['Chillspising', 58.0]]}


const list= [{name:a[this.props.id][0][0] , prosent: a[this.props.id][0][1]}, {name:a[this.props.id][1][0] , prosent: a[this.props.id][1][1]},
{name:a[this.props.id][2][0] , prosent: a[this.props.id][2][1]}, {name:a[this.props.id][3][0] , prosent: a[this.props.id][3][1]},
{name:a[this.props.id][4][0] , prosent: a[this.props.id][4][1]}];
return list;
}



  renderList() {
  const list = this.getMyScore();




  const listItems =list.map((subject) =>
    <Link
      style={{ listStyleType: 'none', width: '100%', textDecoration: 'none'}}
      onClick={() => console.log("hei")}
      key={subject.name} >
      <div className="listItem">
        <div className="list-main">
          <div className="list-image">
            <img className="media-object" src={require('./images/UKElogo.png')} style={{ heigh: 80, width:80}}/>

          </div>
          <div className="list-text">
            <h3>{subject.name}</h3>
            <h3>Prosent match: {subject.prosent}</h3>


          </div>

        </div>
        </div>
    </Link>

    );
    return (
      <ul style={{ marginLeft: 200, marginRight: 200}}>
        {listItems}
      </ul>
   );
  }

  render() {
    console.log(this.getMyScore());
    return (
      <div>
      <div className="App">

        <div className="App-header" style={{backgroundColor:'#e74c3c'}}>
          <div className="header-image">
            <img src={require('./images/accenture.png')} style={{height: '80%'}} alt="logo" />
          </div>


          <div className="header-buttons">


          </div>
        </div>

        <div className="home-buttons">

            <h1 className="header-textphoto" style={{ width: '100%'}}>Basert på din profil anbefaler vi:</h1>
            {this.renderList()}



        </div>


      </div>
      <div className="AppColor">
        <h1>Help</h1>
        <div className="info">
          <div className="underInfo"><h3>Enter id and get matched with Uka</h3></div>
          <div className="underInfo"><img src={require('./images/uka.jpg')} className="info-image-location" alt="logo" /></div>
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

export default connect(mapStateToProps, {  })(Home);
