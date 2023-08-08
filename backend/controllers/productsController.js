const Product = require('../models/Products');

const createProduct = async (req, res) => {
  const newProduct = new Product({
    title: "Kid's Bunk Bed",
    supplier: 'Playful Interiors',
    price: '$799.99',
    imageUrl:
      'https://images.pexels.com/photos/1037766/pexels-photo-1037766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.',
    product_location: 'Daslas',
  });
  try {
    await newProduct.save();
    res.status(200).json('Product create successfully!');
  } catch (error) {
    res.status(500).json('Failed product create!');
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json('Failed product get!');
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json('Failed product get!');
  }
};

const searchProduct = async (req, res) => {
  try {
    const results = await Product.aggregate([
      {
        $search: {
          index: 'furniture',
          text: {
            query: req.params.key,
            path: {
              wildcard: '*',
            },
          },
        },
      },
    ]);
    console.log(results);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json('Failed product search!');
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProduct,
  searchProduct,
};
