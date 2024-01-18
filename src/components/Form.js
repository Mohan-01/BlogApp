/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
// const baseURL = 'http://127.0.0.1:2401/api/v1/blogs'
const baseURL = 'https://blog-api-1tpb.onrender.com/api/v1/blogs'


const createBlog = async setData => {
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;


  await axios.post(baseURL + '/', {
    author,
    title,
    content
  });
};

const updateBlog = async setData => {
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const body = {};
  if (author !== '' && author !== undefined) body.author = author;
  if (title !== '' && title !== undefined) body.title = title;
  if (content !== '' && content !== undefined) body.content = content;
  await axios.patch(`${baseURL}/-1/${author}`, body);
  await axios.patch(`${baseURL}/-1/${author}`, body);
};

const deleteBlog = async setData => {
  try {
    await axios.delete(
      `${baseURL}/-1/${
        document.getElementById('author').value
      }`
    );
  } catch (e) {
    console.log(e);
  }
};

function Form(props) {
  return (
    <form>
      <table>
        <caption>{props.caption}</caption>
        <tbody>
          <tr>
            <td>
              <label htmlFor="author">Author: </label>
            </td>
            <td>
              <input type="text" name="author" id="author"  required/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="title">Title: </label>
            </td>
            <td>
              <input type="text" name="title" id="title" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="content">Content:</label>
            </td>
            <td>
              <textarea
                name="content"
                placeholder='Enter "\n" between two paras'
                id="content"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button
                type="submit"
                onClick={async e => {
                  e.preventDefault();
                  console.log(props.function);
                  if (props.function === 'createBlog')
                    await createBlog(props.setData);
                  else if (props.function === 'updateBlog')
                    await updateBlog(props.setData);
                  else await deleteBlog(props.setData);
                  document.getElementById('get-data').click();
                }}
              >
                Submit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default Form;
