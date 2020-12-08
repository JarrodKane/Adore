const axios = require("axios");

const getProducts = async () => {
  try {
    const response = await axios.get(
      "https://www.adorebeauty.com.au/api/ecommerce/catalog/products"
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export { getProducts };
