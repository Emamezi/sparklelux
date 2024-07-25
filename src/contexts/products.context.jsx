import { createContext, useState, useEffect } from "react";

import SHOP_PRODUCTS from "../shop-data.json";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_PRODUCTS);
  const value = { products, setProducts };

  useEffect(() => {}, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
