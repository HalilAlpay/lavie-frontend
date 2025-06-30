import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import "./ProductItem.css";
import { Link } from "react-router-dom";

const ProductItem = ({ productItem }) => {
  const { cartItems, addToCart } = useContext(CartContext);

  const filteredCart = cartItems.find(
    (cartItem) =>
      cartItem._id === productItem._id || cartItem.id === productItem.id
  );

  // API ve local data formatlarını destekle
  const originalPrice =
    productItem.price?.current || productItem.price?.oldPrice || 0;
  const discountPercentage =
    productItem.price?.discount || productItem.discount || 0;

  // İndirimli fiyatı hesaplama
  const discountedPrice =
    originalPrice - (originalPrice * discountPercentage) / 100;

  // Resim URL'lerini kontrol et
  const getImageUrl = (index) => {
    if (productItem.img && Array.isArray(productItem.img)) {
      return productItem.img[index] || productItem.img[0];
    }
    if (
      productItem.img &&
      productItem.img.thumbs &&
      Array.isArray(productItem.img.thumbs)
    ) {
      return productItem.img.thumbs[index] || productItem.img.thumbs[0];
    }
    return productItem.img?.singleImage || "";
  };

  return (
    <div className="product-item glide__slide glide__slide--active">
      <div className="product-image">
        <Link to={`/product/${productItem._id || productItem.id}`}>
          <img src={getImageUrl(0)} alt={productItem.name} className="img1" />
          <img src={getImageUrl(1)} alt={productItem.name} className="img2" />
        </Link>
      </div>
      <div className="product-info">
        <Link
          to={`/product/${productItem._id || productItem.id}`}
          className="product-title"
        >
          {productItem.name}
        </Link>
        <ul className="product-star">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-half"></i>
          </li>
        </ul>
        <div className="product-prices">
          <strong className="new-price">${discountedPrice.toFixed(2)}</strong>
          <span className="old-price">${originalPrice.toFixed(2)}</span>
        </div>
        <span className="product-discount">-{discountPercentage}%</span>
        <div className="product-links">
          <button
            className="add-to-cart"
            onClick={() =>
              addToCart({
                ...productItem,
                price: discountedPrice,
                _id: productItem._id || productItem.id,
              })
            }
            disabled={filteredCart}
          >
            <i className="bi bi-basket-fill"></i>
          </button>
          <button>
            <i className="bi bi-heart-fill"></i>
          </button>
          <Link
            to={`/product/${productItem._id || productItem.id}`}
            className="product-link"
          >
            <i className="bi bi-eye-fill"></i>
          </Link>
          <a href="#">
            <i className="bi bi-share-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  productItem: PropTypes.object,
};
