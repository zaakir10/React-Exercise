import { useState } from "react";

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Add product
  function addProduct() {
    if (!name || !price) return;

    const newProduct = {
      id: Date.now(),
      name,
      price: Number(price),
      quantity: 1,
    };

    setCart([...cart, newProduct]); // immutable update
    setName("");
    setPrice("");
  }

  // Increase quantity
  function increaseQty(id) {
    setCart(
      cart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  }

  // Decrease quantity (min 1)
  function decreaseQty(id) {
    setCart(
      cart.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  }

  // Remove product
  function removeProduct(id) {
    setCart(cart.filter((product) => product.id !== id));
  }

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {/* Add Product */}
      <input
        type="text"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={addProduct}>Add to Cart</button>

      <hr />

      {/* Cart Items */}
      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((product) => (
        <div key={product.id}>
          <strong>{product.name}</strong> — ${product.price}

          <div>
            <button onClick={() => decreaseQty(product.id)}>-</button>
            <span> {product.quantity} </span>
            <button onClick={() => increaseQty(product.id)}>+</button>
          </div>

          <button onClick={() => removeProduct(product.id)}>Remove</button>

          <hr />
        </div>
      ))}

      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default ShoppingCart;
