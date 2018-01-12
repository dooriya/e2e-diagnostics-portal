import React, { Component } from 'react';
import './dashboard.scss';
import Device from './device';
import { TransitionMotion, spring, presets } from 'react-motion';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
      connectedDevices: undefined,
      registeredDevices: undefined,
      records: [],
      devices: [],
    }
  }

  componentDidMount() {
  }

  componentDidUpdate() {
    console.log(this.mmore.clientHeight);
  }

  toggleExpand = () => {
    this.setState(prev => {
      let devices;
      if (prev.expand) {
        devices = [];
      } else {
        devices = [
          {
            name: "Node",
            avg: 234,
            max: 423,
          },
          {
            name: "C#",
            avg: 234,
            max: 453,
          },
          {
            name: "Java",
            avg: 134,
            max: 463,
          },
          {
            name: "C",
            avg: 111,
            max: 423,
          }, {
            name: "C1",
            avg: 111,
            max: 423,
            },{
              name: "C2",
              avg: 111,
              max: 423,
          },
        ]
      }
      return {
        expand: !prev.expand,
        devices
      }
    });
  }

  getDefaultStyles = () => {
    return this.state.devices.map(d => ({ data: { ...d }, key: d.name, style: { height: 0, opacity: 1, padding: 0, containerMaxHeight: 0 } }));
  };

  getStyles = () => {
    return this.state.devices.map(d => ({
      data: { ...d }, key: d.name, style: {
        height: spring(75, presets.gentle),
        opacity: spring(1, presets.gentle),
        padding: spring(20, presets.gentle),
        containerMaxHeight: spring(480, presets.gentle),
      }
    }));
  };

  willLeave = () => {
    return {
      height: spring(0),
      opacity: spring(0),
      padding: spring(0),
      containerMaxHeight: spring(0),
    };
  };

  willEnter = () => {
    return {
      height: 0,
      opacity: 1,
      padding: 0,
      containerMaxHeight: 0,
    };
  };

  render() {
    return <div className='dashboard'>
      {/* <div className="title">Diagnostic dashboard</div> */}
      <div className="content">
        <div className="device">
          <div className={`block device-main ${this.state.expand ? 'device-expand' : ''}`}>
            <div className="logo">
              <i className="fa fa-microchip" aria-hidden="true"></i>
            </div>
            <div className="info">
              <div className="name">Ingress Latency</div>
              <div className="aggregation">
                <div className="avg">Avg: 220ms</div>
                <div className="max">Max: 555ms</div>
              </div>
            </div>
            <div className="operation">
              <span className={`expand ${this.state.expand ? 'rotate' : ''}`} onClick={this.toggleExpand}>
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <TransitionMotion
            defaultStyles={this.getDefaultStyles()}
            styles={this.getStyles()}
            willLeave={this.willLeave}
            willEnter={this.willEnter}>

            {
              styles => <div className="block device-more" style={{maxHeight: styles.length !== 0 ? styles[0].style.containerMaxHeight : 0}} xxxx={this.mmore && console.log(this.mmore.clientHeight)} ref={input => { this.mmore = input; }}>
                {styles.map(({ style:{containerMaxHeight, innerStyle}, data }) => 
                <div className="block" style={innerStyle}>
                  <div className="logo">
                    <i className="fa fa-microchip" aria-hidden="true"></i>
                  </div>
                  <div className="info">
                    <div className="name">{data.name}</div>
                    <div className="aggregation">
                      <div className="avg">Avg: {data.avg}ms</div>
                      <div className="max">Max: {data.max}ms</div>
                    </div>
                  </div>
                </div>)}
              </div>
            }

          </TransitionMotion>


        </div>


        <div className="line"></div>

        <div className="iothub">
          <div className="block iothub-main">
            <div className="logo">
              <svg id="svg-iot-hub" viewBox="0 0 32 32" width="100%" height="100%"> <circle fill="#0072c6" cx="13.4" cy="4.9" r="3.1"></circle> <circle fill="#0072c6" cx="20.5" cy="14.9" r="3.7"></circle> <circle fill="#0072c6" cx="26.7" cy="25.9" r="2.9"></circle> <circle fill="#0072c6" cx="15.2" cy="23.9" r="2.5"></circle> <circle fill="#0072c6" cx="5.1" cy="16.3" r="2.5"></circle> <rect fill="#0072c6" x="10.7" y="9" transform="matrix(0.5751 0.8181 -0.8181 0.5751 15.1512 -9.6241)" width="12.3" height="1.6"></rect> <rect fill="#0072c6" x="17.2" y="19.4" transform="matrix(0.4968 0.8679 -0.8679 0.4968 29.4089 -10.1933)" width="12.6" height="1.6"></rect> <rect fill="#0072c6" x="11.9" y="7.9" transform="matrix(8.274771e-002 0.9966 -0.9966 8.274771e-002 27.1578 1.5262)" width="1.6" height="15.3"></rect> <rect fill="#0072c6" x="16.9" y="14.1" transform="matrix(0.8565 0.5161 -0.5161 0.8565 12.5121 -6.3586)" width="1.6" height="10.4"></rect> <path fill="#0072c6" d="M31.5,0h-8.1c-0.3,0-0.5,0.2-0.5,0.6v2.9c0,0.3,0.2,0.5,0.5,0.5H28v4.5C28,8.8,28.2,9,28.6,9h2.9 C31.8,9,32,8.8,32,8.5v-8C32,0.2,31.8,0,31.5,0z"></path> <path fill="#0072c6" d="M0.5,31.9h8.1c0.3,0,0.5-0.2,0.5-0.6v-2.9c0-0.3-0.2-0.5-0.5-0.5H4v-4.5c0-0.3-0.2-0.5-0.6-0.5H0.5 c-0.3,0-0.5,0.2-0.5,0.5l0,8C0,31.7,0.2,31.9,0.5,31.9z"></path> </svg>
            </div>
            <div className="info">
              <div className="name">Egress Latency</div>
              <div className="aggregation">
                <div className="avg">Avg: 220ms</div>
                <div className="max">Max: 555ms</div>
              </div>
            </div>
          </div>
          <div className="block iothub-more">
            <div className="aggregation">
              <div>Device connected: 2</div>
              <div>Device registered: 6</div>
              <div>Unmatched messages: 10</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Dashboard;