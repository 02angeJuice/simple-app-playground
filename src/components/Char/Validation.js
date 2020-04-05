import React from 'react';

const Validation = ({ textLength }) => {
  const renderCondition = (textLength) => {
    if (textLength && textLength <= 5) {
      return <div>Text too short</div>;
    } else if (textLength && textLength > 10) {
      return <div>Text long enough</div>;
    }

    return null;
  };

  return <>{renderCondition(textLength)}</>;
};

export default Validation;
