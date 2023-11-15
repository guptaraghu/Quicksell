import React from 'react';
import './single.css'

const Single = ({ id, title, tag, userId, status, priority }) => {
  return (
    <div>
      <div className="Tasks">
        <p>{id}</p>
        <h3>{title}</h3>
        <span>... Feature Request</span>
      </div>
    </div>
  );
};

export default Single;
