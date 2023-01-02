import { createContext, ReactNode, SetStateAction, useState } from "react";
import { Product } from "../interfaces/Product";

export interface IProductContext {
  listOfCurrentProducts: Product[];
  setListOfCurrentProducts: React.Dispatch<SetStateAction<Product[]>>;
  filtersSelected: { filterName: string; filterValue: string }[];
  setFiltersSelected: React.Dispatch<
    SetStateAction<{ filterName: string; filterValue: string }[]>
  >;
  getFilterOptionSelected: ({filterName, filterValue}: {filterName: string, filterValue: string}) => void;
  removeLastOptionSelected: () => void
}

export const ProductContext = createContext<IProductContext | null>(null);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [listOfCurrentProducts, setListOfCurrentProducts] = useState<Product[]>(
    []
  );
  const [filtersSelected, setFiltersSelected] =
    useState<{ filterName: string; filterValue: string }[]>([]);

    console.log(filtersSelected)

    const getFilterOptionSelected = ({filterName, filterValue}: {filterName: string, filterValue: string}) => {
      setFiltersSelected((prev: any) => [...prev, {filterName, filterValue}])
    }
    const removeLastOptionSelected = () => {
      const removedLastOptionSelected: { filterName: string; filterValue: string }[] = filtersSelected.splice(-1) || []
      setFiltersSelected(removedLastOptionSelected)
    }

  return (
    <ProductContext.Provider
      value={{
        listOfCurrentProducts,
        setListOfCurrentProducts,
        filtersSelected,
        setFiltersSelected,
        getFilterOptionSelected,
        removeLastOptionSelected
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
