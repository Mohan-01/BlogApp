import React from 'react';

function Content(props) {
  const data = props.content.split('\\n');
  let cnt = 0;
  return (
    <div className="content">
      {data.map(para => (
        <p className="content-para" key={`para-${cnt++}`}>
          {para}
        </p>
      ))}
    </div>
  );
}

export default Content;
