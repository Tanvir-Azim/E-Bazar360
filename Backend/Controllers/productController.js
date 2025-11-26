import Product from "../Modals/product.js";
const addProduct = async (req, res) => {
  const { title, description, price, category, stock, imageurl, createdAt ,qty} =
    req.body;
  try {
    const product = await Product.create({
      title,
      description,
      price,
      category,
      stock,
      imageurl,
      createdAt,
      qty
    });
    res.json({ message: "product created successfully", product });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export default addProduct;

export const getProduct = async (req, res) => {
  try {
    const getProduct = await Product.find().sort({ createdAt: -1 });

    res.json({ message: "All Product", getProduct });
  } catch (error) {
    res.json(error.message);
  }
};

export const getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    if (!product) return res.json({ message: "Invalid ID" });
    res.json({ message: "specific product", product });
  } catch (error) {
    res.json(error.message);
  }
};

export const updateProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    }); //new:true dauar karon jodi notun koto data defind korte cai //jeti schema te nai seti add korer jonno new true dite hoy 
    if (!product) return res.json({ message: "Invalid ID" });
    res.json({ message: "Product has been Updated", product });
  } catch (error) {
    res.json(error.message);
  }
};

export const deleteProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndDelete(id); //new:true dauar karon jodi notun koto data defind korte cai //jeti schema te nai seti add korer jonno new true dite hoy 
    if (!product) return res.json({ message: "Invalid ID" });
    res.json({ message: "Product has been Deleted", product });
  } catch (error) {
    res.json(error.message);
  }
};