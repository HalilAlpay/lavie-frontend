import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const CartItem = ({ cartItem }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  // Resim URL'lerini kontrol et
  const getImageUrl = () => {
    if (cartItem.img && Array.isArray(cartItem.img)) {
      return cartItem.img[0];
    }
    if (
      cartItem.img &&
      cartItem.img.thumbs &&
      Array.isArray(cartItem.img.thumbs)
    ) {
      return cartItem.img.thumbs[0];
    }
    return cartItem.img?.singleImage || "";
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    updateQuantity(cartItem._id || cartItem.id, newQuantity);
  };

  return (
    <tr className="cart-item">
      <td></td>
      <td className="cart-image">
        <img src={getImageUrl()} alt={cartItem.name} />
        <i
          className="bi bi-x delete-cart"
          onClick={() => removeFromCart(cartItem._id || cartItem.id)}
        ></i>
      </td>
      <td>{cartItem.name}</td>
      <td>${cartItem.price.toFixed(2)}</td>
      <td className="product-quantity">
        <input
          type="number"
          min="1"
          value={cartItem.quantity || 1}
          onChange={handleQuantityChange}
          style={{ width: "60px", textAlign: "center" }}
        />
      </td>
      <td className="product-subtotal">
        ${(cartItem.price * (cartItem.quantity || 1)).toFixed(2)}
      </td>
    </tr>
  );
};

export default CartItem;

CartItem.propTypes = {
  cartItem: PropTypes.object,
};
