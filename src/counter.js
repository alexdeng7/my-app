import React, { useState, useEffect } from "react";

const Counter = ({ defaultValue }) => {
  const [count, setCount] = useState(defaultValue);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [activeSection, setActiveSection] = useState(null);

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

  const clearPage = () => {
    setCount(defaultValue);
    setPosts([]);
    setUsers([]);
    setActiveSection(null);
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
