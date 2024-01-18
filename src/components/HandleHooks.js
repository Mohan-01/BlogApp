import React from 'react';
import Form from './Form';

function HandleHooks(props) {
  return (
    <React.Fragment>
      {props.isCreate ? (
        <Form
          setData={props.setData}
          caption="Create Blog"
          function="createBlog"
        />
      ) : (
        ''
      )}
      {props.isUpdate ? (
        <Form
          setData={props.setData}
          caption="Update Blog"
          function="updateBlog"
        />
      ) : (
        ''
      )}
      {props.isDelete ? (
        <Form
          setData={props.setData}
          caption="Delete Blog"
          function="deleteBlog"
        />
      ) : (
        ''
      )}
    </React.Fragment>
  );
}

export default HandleHooks;
