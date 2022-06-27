import { useState, useEffect } from "react";

const url = "https://api.github.com/users/arslanov-ngc";

const MultipleReturning = () => {
  const [isLoading, setIsLoading] = useState(true),
    [isError, setIsError] = useState(false),
    [user, setUser] = useState("Default User");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setIsLoading(false);
          setIsError(true);

          throw new Error(res.statusText);
        }
      })
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setUser(data.login);
      })
      .catch((e) => console.log(e));
  }, []);

  if (isLoading) {
    return <h1 className="status loading">Loading</h1>;
  }
  if (isError) {
    return <h1 className="status error">Error</h1>;
  }

  return <div>{user}</div>;
};

export default MultipleReturning;
