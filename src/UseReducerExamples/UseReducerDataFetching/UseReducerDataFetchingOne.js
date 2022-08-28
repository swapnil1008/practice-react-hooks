import axios from "axios";
import React, { useEffect, useState } from "react";

function UseReducerDataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        console.log(res);
        setLoading(false);
        setPost(res.data);
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setPost({});
        setError("Something went wrong");
      });
  }, []);
  return (
    <div>
      {loading ? "loading..." : post.title}
      {error ? error : null}
    </div>
  );
}

export default UseReducerDataFetchingOne;
