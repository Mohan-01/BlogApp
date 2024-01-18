import React from 'react';
import Author from './Author';
import Title from './Title';
import Content from './Content';

function Blog(props) {
  return (
    <div className="blog" key={props.id}>
      <Title title={props.title} />
      <Author name={props.name} />
      <Content content={props.content} />
    </div>
  );
}

export default Blog;
