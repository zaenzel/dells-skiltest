import axios from "axios";

const api_base_url = process.env.NEXT_PUBLIC_API_BASE;

export const getProduct = async (skip = 0, search = "") => {
  try {
    if (search) {
      const res = await axios.get(
        `${api_base_url}/products/search?q=${search}`,
        {
          cache: "no-store",
        }
      );

      return res;
    }
    // const res = await axios.get(
    //   `${api_base_url}/products/search?q=${search}&skip=${skip}&?limit=10`,
    //   {
    //     cache: "no-store",
    //   }
    // );

    const res = await axios.get(
      `${api_base_url}/products?limit=10&skip=${skip}`,
      {
        cache: "no-store",
      }
    );

    return res;
  } catch (error) {
    return error;
  }
};

export const getDetailProduct = async (id) => {
  try {
    const res = await axios.get(`${api_base_url}/products/${id}`, {
      cache: "no-store",
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const getCart = async (skip = 0) => {
  try {
    const res = await axios.get(`${api_base_url}/carts?limit=10&skip=${skip}`, {
      cache: "no-store",
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const getCartDetail = async (id) => {
  try {
    const res = await axios.get(`${api_base_url}/carts/${id}`, {
      cache: "no-store",
    });
    return res;
  } catch (error) {
    return error;
  }
};
