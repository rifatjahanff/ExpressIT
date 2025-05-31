import { useCart } from "../context/CartContext";

function Checkout() {
  const { cartItems, updateQuantity } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (productId, newQty) => {
    if (newQty < 1) return;
    updateQuantity(productId, newQty);
  };

  return (
    <div className="max-w-[1520px] mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Left: Cart Items */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-6">🛒 আপনার অর্ডার</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">আপনার কার্ট খালি।</p>
        ) : (
          <ul className="space-y-0">
            {cartItems.map((item, idx) => (
              <li
                key={item._id}
                className={`flex flex-col sm:flex-row justify-between gap-4 py-4 ${idx !== cartItems.length - 1 ? "border-b border-gray-300" : ""
                  }`}
              >
                <div className="flex gap-4 flex-1">
                  <img
                    src={item.image || "https://via.placeholder.com/150"}
                    alt={item.name}
                    className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded"
                  />
                  <div className="flex flex-col justify-between">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <div className="flex items-center gap-2 mt-2 text-base">
                      <span className="font-medium">৳ {item.price}</span>
                      <span>×</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          −
                        </button>
                        <span className="min-w-[24px] text-center">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right font-bold text-blue-700 text-xl sm:text-lg">
                  ৳ {item.price * item.quantity}
                </div>
              </li>
            ))}
            <div className="text-right font-bold text-xl mt-6 border-t pt-4">
              মোট: ৳ {subtotal.toFixed(2)}
            </div>
          </ul>
        )}
      </div>

      {/* Right: Delivery Information Form */}
      <div className="bg-white p-6 rounded shadow space-y-6">
        <h2 className="text-2xl font-bold">🚚 ডেলিভারি তথ্য</h2>
        <p className="text-gray-700">
          অর্ডার নিশ্চিত করতে আপনার তথ্য দিন।
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-semibold mb-1">
              আপনার নাম<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500"
              placeholder="আপনার পুরো নাম লিখুন"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block font-semibold mb-1">
              মোবাইল নাম্বার<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500"
              placeholder="০১XXXXXXXXX"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="block font-semibold mb-1">
              ডেলিভারি ঠিকানা<span className="text-red-500">*</span>
            </label>
            <textarea
              id="address"
              className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500"
              rows="3"
              placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন"
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="area" className="block font-semibold mb-1">
              এলাকা নির্বাচন করুন<span className="text-red-500">*</span>
            </label>
            <select
              id="area"
              className="w-full border border-gray-300 p-2 rounded bg-white focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">-- এলাকা নির্বাচন করুন --</option>
              <option value="dhaka">ঢাকা</option>
              <option value="chittagong">চট্টগ্রাম</option>
              <option value="rajshahi">রাজশাহী</option>
            </select>
          </div>

          <div>
            <label htmlFor="note" className="block font-semibold mb-1">
              অতিরিক্ত নোট <span className="text-gray-400">(ঐচ্ছিক)</span>
            </label>
            <textarea
              id="note"
              className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500"
              rows="2"
              placeholder="আপনার বিশেষ অনুরোধ বা মন্তব্য"
            ></textarea>
          </div>

          <div>
            <p className="font-semibold mb-2">পেমেন্ট মেথড</p>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="cod"
                defaultChecked
                className="form-radio text-blue-600"
              />
              ক্যাশ অন ডেলিভারি
            </label>
          </div>

          <div className="border-t pt-4 space-y-2">
            <h3 className="text-xl font-bold">মোট মূল্য</h3>
            <div className="flex justify-between font-semibold">
              <span>Subtotal</span>
              <span>৳ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Delivery</span>
              <span>৳ 0.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total</span>
              <span>৳ {subtotal.toFixed(2)}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-bold transition"
          >
            ✅ অর্ডার নিশ্চিত করুন
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
