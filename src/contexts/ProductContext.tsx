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
  removeUncheckOptionSelected: ({filterName, filterValue}: {filterName: string, filterValue: string}) => void
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
    const removeUncheckOptionSelected = ({filterName, filterValue}: {filterName: string, filterValue: string}) => {
      const removedLastOptionSelected = filtersSelected.filter(filter => {
        if (filter.filterName === filterName && filter.filterValue === filterValue) {
          return false
        }

        return true
      })

      console.log('aa', removedLastOptionSelected)

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
        removeUncheckOptionSelected
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
