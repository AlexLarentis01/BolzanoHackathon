import React, { Component } from 'react';
import '../style.css';
export default class componentName extends Component {
  render() {
    return (
      <div className="forecast-table">
      <div className="container">
        <div className="forecast-container">
          <div className="today forecast">
            <div className="forecast-header">
              <div className="day">Monday</div>
              <div className="date">6 Oct</div>
            </div> {/* .forecast-header */}
            <div className="forecast-content">
              <div className="location">Bolzano</div>
              <div className="degree">
                <div className="num" style={{fontSize:50}}>23<sup>o</sup>C</div>
                <div className="forecast-icon">
                  <img src={require('../images/icons/icon-1.svg')} alt="" width={100} />
                </div>	
              </div>
              <span><img src={require('../images/icon-umberella.png')}  alt="" />20%</span>
              <span><img src={require('../images/icon-wind.png')} alt="" />18km/h</span>
              <span><img src={require('../images/icon-compass.png')}  alt="" />East</span>
            </div>
          </div>
          </div>
          </div>
          </div>
    
    );
  }
}


