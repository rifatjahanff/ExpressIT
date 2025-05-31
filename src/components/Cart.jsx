import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-10 text-lg text-gray-600">
        🛒 আপনার কার্ট খালি।
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left">🧾 আপনার অর্ডার</h2>

      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li
            key={item._id}
            className="flex flex-col sm:flex-row sm:items-center justify-between bg-white p-4 shadow rounded gap-4"
          >
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">পরিমাণ: {item.quantity}</p>
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-4">
              <p className="text-blue-600 font-bold whitespace-nowrap">
                ৳ {item.price * item.quantity}
              </p>
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-500 hover:underline"
              >
                মুছুন
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-t pt-6">
        <p className="text-xl font-bold text-gray-800">মোট: ৳ {total}</p>
        <button
          onClick={clearCart}
          className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition"
        >
          কার্ট খালি করুন
        </button>
      </div>
    </div>
  );
};

export default Cart;
