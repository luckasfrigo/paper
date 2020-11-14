import React from 'react';
import './Paper.css';

function Paper() {
  return (
    <div className="paper">
      <h1 contentEditable="true">Add your title here</h1>
      <p contentEditable="true">Add your text here</p>
    </div>
  );
}

export default Paper;
