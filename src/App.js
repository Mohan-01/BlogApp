import axios from 'axios';
import React, { useState } from 'react';
import Blog from './components/Blog';
import HandleHooks from './components/HandleHooks';
import Button from './components/Button';
import './App.css';

const getData = async setData => {
  const newData = await axios.get('https://blog-api-1tpb.onrender.com/api/v1/blogs/');
  setData(newData.data.data);
};

function App() {
  const [data, setData] = useState([]);
  const [isCreate, create] = useState(false);
  const [isUpdate, update] = useState(false);
  const [isDelete, _delete] = useState(false);
  const remaining = [create, update, _delete];
  return (
    <React.Fragment>
      <div className="nav">
      <img src="/logo.png" alt="" width={'20%'} height={'10%'} />
        <button
          id="get-data"
          onClick={() => {
            setData([]);
            setTimeout(() => getData(setData), 200);
          }}
        >
          Get Data
        </button>
        <Button
          handle={create}
          show="Create Blog"
          remaining={remaining.filter(el => el !== create)}
        />
        <Button
          handle={update}
          show="Update Blog"
          remaining={remaining.filter(el => el !== update)}
        />
        <Button
          handle={_delete}
          show="Delete Blog"
          remaining={remaining.filter(el => el !== _delete)}
        />
        <HandleHooks
          isCreate={isCreate}
          isUpdate={isUpdate}
          isDelete={isDelete}
          setData={setData}
        />
      </div>
      <div className="blogs">
        {data.map(blog => (
          <Blog
            id={blog._id}
            name={blog.author}
            title={blog.title}
            content={blog.content}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

export default App;
