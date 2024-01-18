import React from 'react';

function Button(props) {
  return (
    <React.Fragment>
      <button
        className="btn"
        onClick={() => {
          props.remaining.map(fn => fn(false));
          props.handle(value => !value);
        }}
      >
        {props.show}
      </button>
    </React.Fragment>
  );
}

export default Button;
