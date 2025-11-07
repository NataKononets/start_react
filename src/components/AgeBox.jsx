import React, { Component } from 'react';

class AgeBox extends Component {
  render() {
    const { value = "16+" } = this.props;
    return (
      <div className="age-box position-absolute d-flex align-items-center">
        <div className="bar" />
        <div className="age-text ms-3">{value}</div>
      </div>
    );
  }
}

export default AgeBox;