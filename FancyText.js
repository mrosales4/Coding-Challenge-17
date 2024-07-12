//U22978120

import React from 'react';

const FancyText = ({ title, text }) => {
  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  const textStyle = {
    fontSize: '1rem',
  };

  return (
    <div>
      {title && <h1 style={titleStyle}>{title}</h1>}
      <p style={textStyle}>{text}</p>
    </div>
  );
};

export default FancyText;
