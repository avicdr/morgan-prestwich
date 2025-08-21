import React from 'react';

const PercentageBar = ({ percentage }) => {
  const loaderStyle = {
    width: '100%',
    height: '2px',
    backgroundColor: '#f0f0f0',
    position: 'relative',
    overflow: 'hidden',
  };

  const loaderBarStyle = {
    content: '',
    display: 'block',
    position: 'absolute',
    top: '0',
    width: `${percentage}%`, // Adjust width based on percentage prop
    height: '100%',
    backgroundColor: '#000',
    animation: 'loader 2s infinite',
  };

  return (
    <div style={loaderStyle}>
      <div style={loaderBarStyle}></div>
    </div>
  );
};

export default PercentageBar;
