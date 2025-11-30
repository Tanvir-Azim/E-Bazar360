import Cart from "../Modals/Cart.js";

export const addToCard = async (req, res) => {
  const { productId, title, price, imageurl, qty } = req.body;
  const userId = "6924b3cef888abdbe304980b";

  let cart = await Cart.findOne({ userId: userId });

  if (!cart) {
    cart = new Cart({ userId, item: [] });
  }

  const findIndex = cart.item.findIndex(
    (item) => item.productId.toString() === productId
  );
  if (findIndex > -1) {
    cart.item[findIndex].qty += qty;
    cart.item[findIndex].price += price * qty;
  } else {
    cart.item.push({ productId, title, price, imageurl, qty });
  }
  await cart.save();
  res.json({ message: "Item Added To Cart", cart });
};

export const getUserCart = async (req, res) => {
  const userId = "6924b3cef888abdbe304980b";
  let cart = await Cart.findOne({ userId: userId });
  if (!cart) return res.json({ message: "cart not found" });
  res.json({ message: "user card", cart });
};

export const removeProductFromCart = async (req, res) => {
  const { productId } = req.params;
  const userId = "6924b3cef888abdbe304980b";
  let cart = await Cart.findOne({ userId: userId });
  if (!cart) return res.json({ message: "cart not found" });
  cart.item = cart.item.filter(
    (item) => item.productId.toString() !== productId
  );
  await cart.save();
  res.json({ message: "product remove from cart" });
};

export const cleareCart = async (req, res) => {
  const userId = "6924b3cef888abdbe304980b";

  let cart = await Cart.findOne({ userId: userId });

  if (!cart) {
    cart = new Cart({ userId, item: [] });
  } else {
    cart.item = [];
  }
  await cart.save();
  res.json({ message: "Cart items cleared", cart });
};

export const decriseProductQty= async (req, res) => {
  const { productId, title, price, imageurl, qty } = req.body;
  const userId = "6924b3cef888abdbe304980b";

  let cart = await Cart.findOne({ userId: userId });

  if (!cart) {
    cart = new Cart({ userId, item: [] });
  }

  const findIndex = cart.item.findIndex(
    (item) => item.productId.toString() === productId
  );
  if (findIndex > -1) {
    cart.item[findIndex].qty += qty;
    cart.item[findIndex].price += price * qty;
  } else {
    cart.item.push({ productId, title, price, imageurl, qty });
  }
  await cart.save();
  res.json({ message: "Item Added To Cart", cart });
};