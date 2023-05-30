import React, { useState, useEffect } from "react";

const Counter = ({ defaultValue }) => {
  const [count, setCount] = useState(defaultValue);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [activeSection, setActiveSection] = useState(null);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [queryValue, setQueryValue] = useState("");
  const [queryResults, setQueryResults] = useState([]);

  useEffect(() => {
    if (count > 9 || count < -9) {
      setCount(0);
    }
  }, [count]);

  const countUp = () => {
    setCount(count + 1);
  };

  const countDown = () => {
    setCount(count - 1);
  };

  const getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
        setActiveSection("posts");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
        setActiveSection("users");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const postInfo = () => {
    const newPost = {
      title: postTitle,
      body: postBody,
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const getQueryResults = () => {
    if (queryValue.trim() !== "") {
      fetch(
        "https://cuy99fet4b.execute-api.us-east-2.amazonaws.com/Dev/sneakers?" +
          new URLSearchParams({
            itemId: queryValue.toUpperCase(),
          })
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setQueryResults(data);
          setActiveSection("query");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      getQueryResults();
    }
  };

  const clearPage = () => {
    setCount(defaultValue);
    setPosts([]);
    setUsers([]);
    setActiveSection(null);
    setPostTitle("");
    setPostBody("");
    setQueryValue("");
    setQueryResults([]);
  };

  return (
    <div className="flex flex-col items-center bg-white">
      <h2 className="font-bold text-purple-500 text-9xl">Counter App</h2>
      <div className="my-8"></div>
      <p className="text-5xl font-medium text-blue-500">
        Current Count: {count}
      </p>
      <div className="my-8"></div>
      <div className="flex justify-between w-52">
        <div className="p-4 bg-yellow-300 border border-orange-400 rounded-lg">
          <button className="text-3xl text-red-500" onClick={countDown}>
            -
          </button>
        </div>
        <div className="p-4 bg-yellow-300 border border-orange-400 rounded-lg">
          <button className="text-3xl text-green-500" onClick={countUp}>
            +
          </button>
        </div>
      </div>
      <div className="p-4 mt-4 border border-orange-400 rounded-lg bg-amber-200 w-72">
        <button className="text-3xl text-rose-300" onClick={getPosts}>
          Get Posts
        </button>
      </div>
      <div className="p-4 mt-4 border border-orange-400 rounded-lg bg-amber-200 w-72">
        <button className="text-3xl text-rose-300" onClick={getUsers}>
          Get Users
        </button>
      </div>
      <div className="p-4 mt-4 border border-orange-400 rounded-lg bg-amber-200 w-80">
        <input
          className="w-full px-3 py-2 text-2xl text-gray-700 border border-gray-300 rounded-lg"
          type="text"
          placeholder="Title:"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
      </div>
      <div className="p-4 mt-4 border border-orange-400 rounded-lg bg-amber-200 w-80">
        <input
          className="w-full px-3 py-2 text-2xl text-gray-700 border border-gray-300 rounded-lg"
          type="text"
          placeholder="Body:"
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
      </div>
      <div className="w-64 p-4 mt-4 border border-orange-400 rounded-lg bg-amber-200">
        <button className="text-3xl text-rose-300" onClick={postInfo}>
          Post It!
        </button>
      </div>
      <div className="p-4 mt-4 border border-orange-400 rounded-lg bg-amber-200 w-80">
        <input
          className="w-full px-3 py-2 text-2xl text-gray-700 border border-gray-300 rounded-lg"
          type="text"
          placeholder="Search Sneaker Brand:"
          value={queryValue}
          onChange={(e) => setQueryValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div className="w-64 p-4 mt-4 border border-orange-400 rounded-lg bg-amber-200">
        <button className="text-3xl text-rose-300" onClick={getQueryResults}>
          Query
        </button>
      </div>
      {activeSection === "posts" && (
        <div id="output" className="mt-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-6 mb-6 text-black bg-white rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold uppercase">{post.title}</h3>
              <p className="mt-4 text-lg font-light">{post.body}</p>
            </div>
          ))}
        </div>
      )}
      {activeSection === "users" && (
        <div id="output" className="mt-8">
          {users.map((user) => (
            <div
              key={user.id}
              className="p-6 mb-6 text-black bg-white rounded-lg shadow-lg"
            >
              <ul>
                <li className="text-2xl font-bold uppercase">
                  Username: {user.username}
                </li>
                <li className="mt-4 text-lg font-light">ID: {user.id}</li>
                <li className="mt-4 text-lg font-light">Name: {user.name}</li>
                <li className="mt-4 text-lg font-light">Email: {user.email}</li>
              </ul>
            </div>
          ))}
        </div>
      )}
      {activeSection === "query" && (
        <div id="output" className="mt-8">
          {queryResults.length === 0 ? (
            <p className="text-2xl text-red-500">No Shoes Under This Brand</p>
          ) : (
            queryResults.map((result, index) => (
              <div
                key={index}
                className="p-6 mb-6 text-black bg-white rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold uppercase">{result.Brand}</h3>
                <p className="mt-4 text-lg font-light">{result.Model}</p>
              </div>
            ))
          )}
        </div>
      )}
      <div className="mt-8">
        <button
          className="text-lg text-gray-500 hover:text-red-500"
          onClick={clearPage}
        >
          Return To Default
        </button>
      </div>
    </div>
  );
};

export default Counter;
