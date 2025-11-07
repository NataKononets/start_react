import React, { Component } from 'react';

class BottomHeader extends Component {
  render() {
    const { title, onPrev, onNext } = this.props;
    return (
      <div className="bottom-header d-flex align-items-center justify-content-between mt-4">
        <h2 className="m-0 fw-bold text-uppercase">{title}</h2>
        <div className="nav-buttons d-flex align-items-center gap-2">
          <button type="button" className="nav-btn" aria-label="Previous" onClick={onPrev}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button type="button" className="nav-btn" aria-label="Next" onClick={onNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default BottomHeader;