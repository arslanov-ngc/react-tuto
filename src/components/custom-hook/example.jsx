import useCustomHook from "./useCustomHook";

const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  const { products, isLoading } = useCustomHook(url);

  console.log(products);

  return (
    <div>
      <h3>{isLoading ? "Loading..." : "Data"}</h3>
    </div>
  );
};

export default Example;
