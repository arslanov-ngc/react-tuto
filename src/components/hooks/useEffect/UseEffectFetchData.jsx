import { useState, useEffect } from "react";

import "./UseEffectFetchData.css";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();

    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="users">
      <h1 className="users__title">Github Users</h1>
      <div className="users__group">
        {users.map(({ id, login, type, html_url, avatar_url }) => {
          return (
            <div className="user" key={id}>
              <img src={avatar_url} alt={`${type}: ${login}`} />
              <div>
                <span>{type}</span>
                <a href={html_url}>{login}</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UseEffectFetchData;
