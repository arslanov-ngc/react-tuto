import { useState, useEffect } from "react";

const useCustomHook = (url) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getSmth = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setProducts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getSmth(url);
  }, [url]);

  return {
    products,
    isLoading,
  };
};

export default useCustomHook;
