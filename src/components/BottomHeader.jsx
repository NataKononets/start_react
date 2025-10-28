import React, { Component } from 'react';

class BottomHeader extends Component {
    render() {
        return (
    <div className="bottom-header">
          <h2>POPULAR THIS WEEK</h2>
          <div className="nav-buttons">
            <button className="nav-prev" aria-label="Previous">&lt;</button>
            <button className="nav-next" aria-label="Next">&gt;
              </button>
          </div>
        </div>
        );
    }
}

export default BottomHeader;