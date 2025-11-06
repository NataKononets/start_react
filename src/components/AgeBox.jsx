import React, { Component } from 'react';

class AgeBox extends Component {
    render() {
        return (
     <div className="age-box position-absolute d-flex align-items-center">
      <div className="bar"></div>
      <div className="age-text ms-3">16+</div>
            </div>
        );
    }
}

export default AgeBox;