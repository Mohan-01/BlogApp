import React from 'react';

function Title(props) {
  return (
    <h3 className="title">
      {props.title
        .split(' ')
        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase() + ' ')}
    </h3>
  );
}

export default Title;
