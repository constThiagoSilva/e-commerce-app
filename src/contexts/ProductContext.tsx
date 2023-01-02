import { createContext, ReactNode, SetStateAction, useState } from "react";
import { Product } from "../interfaces/Product";

export interface IProductContext {
  listOfCurrentProducts: Product[];
  setListOfCurrentProducts: React.Dispatch<SetStateAction<Product[]>>;
  filterListAccordingFilterProps: { filterName: string; filterValue: string }[];
  setFilterListAccordingFilterProps: React.Dispatch<
    SetStateAction<{ filterName: string; filterValue: string }[]>
  >;
}

export const ProductContext = createContext<IProductContext | null>(null);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [listOfCurrentProducts, setListOfCurrentProducts] = useState<Product[]>(
    []
  );
  const [filterListAccordingFilterProps, setFilterListAccordingFilterProps] =
    useState<{ filterName: string; filterValue: string }[]>([]);

  return (
    <ProductContext.Provider
      value={{
        listOfCurrentProducts,
        setListOfCurrentProducts,
        filterListAccordingFilterProps,
        setFilterListAccordingFilterProps,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
