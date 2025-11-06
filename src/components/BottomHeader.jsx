import React, { Component } from 'react';

class BottomHeader extends Component {
  render() {
    return (
      <div className="bottom-header d-flex align-items-center justify-content-between mt-5">
        <h2 className="m-0 fw-bold">Popular this week</h2>

        <div className="nav-buttons d-flex align-items-center">
          <button type="button" aria-label="Previous">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button type="button" aria-label="Next">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default BottomHeader;