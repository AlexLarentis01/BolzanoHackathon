import React, { Component } from 'react';
import Home from '../components/Home'
export default class componentName extends Component {
  render() {
    return (
     <div style={{}}>
       <div>
       <h2 style={{color:'white', textAlign:'center'}}>Weather</h2>
       </div>
       <div style={{marginTop:180}}>
       <Home/>
       </div>
     </div>
    );
  }
}
