import { createContext, ReactNode, SetStateAction, useState } from "react";
import { Product } from "../interfaces/Product";

interface IProductContext {
  listOfCurrentProducts: Product[];
  setListOfCurrentProducts: React.Dispatch<SetStateAction<Product[]>>;
}

export const ProductContext = createContext<IProductContext | null>(null);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [listOfCurrentProducts, setListOfCurrentProducts] = useState<Product[]>(
    []
  );

  return (
    <ProductContext.Provider
      value={{ listOfCurrentProducts, setListOfCurrentProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};
