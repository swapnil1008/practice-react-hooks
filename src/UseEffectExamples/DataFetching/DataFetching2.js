import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching2() {
  const [post, setPost] = useState({});
  const [postNumber, setPostNumber] = useState(0);
  const [id, setId] = useState(0);
  useEffect(() => {
    if (id > 0) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
          console.log(res);
          setPost(res.data);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);
  return (
    <div>
      <ul>
        <input
          type="text"
          value={postNumber > 0 ? postNumber : ""}
          onChange={(e) => {
            setPostNumber(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setId(postNumber);
          }}
        >
          Fetch post
        </button>
        <li key={post.id} style={{ listStyle: "none" }}>
          {post.title}
        </li>
      </ul>
    </div>
  );
}

export default DataFetching2;
