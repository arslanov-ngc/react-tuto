import useCustomHook from "../custom-hook/useCustomHook";
import Products from "./Products";
const url = "https://course-api.com/react-prop-types-example";

const PropTypes = () => {
  const { products, isLoading } = useCustomHook(url);
  console.log(products);
  return (
    <div className="products__list">
      <h1 className="title">Products</h1>
      {isLoading ? (
        <div className="loader">
          <div class="bar bar1"></div>
          <div class="bar bar2"></div>
          <div class="bar bar3"></div>
          <div class="bar bar4"></div>
          <div class="bar bar5"></div>
          <div class="bar bar6"></div>
          <div class="bar bar7"></div>
          <div class="bar bar8"></div>
        </div>
      ) : (
        <div className="products">
          {products.map((product, i) => {
            return <Products key={product.id || i} {...product} />;
          })}
        </div>
      )}
    </div>
  );
};

export default PropTypes;
