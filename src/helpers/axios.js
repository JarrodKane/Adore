const axios = require("axios");

const getProducts = async (cat) => {
  try {
    const response = await axios.get(
      `https://www.adorebeauty.com.au/api/ecommerce/catalog/products?limit=100&page=0&categories:in=${cat}`
    );
    // console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const getCat = async () => {
  try {
    const response = await axios.get(
      "https://www.adorebeauty.com.au/api/ecommerce/catalog/categories "
    );
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getProducts, getCat };

// RETURNS ONE ITEM https://adorebeauty.com.au/api/ecommerce/catalog/products?id=158

// Search via categorie https://www.adorebeauty.com.au/api/ecommerce/catalog/products?limit=100&page=0&categories:in=5142

//https://www.adorebeauty.com.au/api/ecommerce/catalog/products?limit=100&page=0
