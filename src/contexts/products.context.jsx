import { createContext, useState, useEffect } from "react";
import { addCollectionsAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
  products: [],
  // setProducts: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };

  // useEffect(() => {
  //   addCollectionsAndDocuments("categories", SHOP_DATA);
  // }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
