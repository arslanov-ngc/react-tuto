import PropTypes from "prop-types";

import defaultImg from "../../assets/photo_2022-06-30_14-23-47.jpg";

const Products = ({ name, image, price }) => {
  const imgUrl = image && image.url;
  return (
    <div className="product">
      <img src={imgUrl || defaultImg} alt={name || "default"} />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

Products.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
};

Products.defaultProps = {
  name: "default",
  price: 99.9,
  image: { defaultImg },
};

export default Products;
