import React from 'react';

const CharComponent = ({ text, click }) => {
  return (
    <div className="char-item" onClick={click}>
      <div>{text}</div>
    </div>
  );
};

export default CharComponent;
