import {
  createContext,
  ReactNode,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import axios from "axios";
import { Product } from "../interfaces/Product";

export interface IProductContext {
  listProducts: Product[];
  listOfCurrentProducts: Product[];
  setListOfCurrentProducts: React.Dispatch<SetStateAction<Product[]>>;
  filtersSelected: { filterName: string; filterValue: string }[];
  setFiltersSelected: React.Dispatch<
    SetStateAction<{ filterName: string; filterValue: string }[]>
  >;
  getFilterOptionSelected: ({
    filterName,
    filterValue,
  }: {
    filterName: string;
    filterValue: string;
  }) => void;
  removeUncheckOptionSelected: ({
    filterName,
    filterValue,
  }: {
    filterName: string;
    filterValue: string;
  }) => void;
}

export const ProductContext = createContext<IProductContext | null>(null);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [listProducts, setListProducts] = useState<Product[]>([]);
  const [listOfCurrentProducts, setListOfCurrentProducts] = useState<Product[]>(
    []
  );
  const [filtersSelected, setFiltersSelected] = useState<
    { filterName: string; filterValue: string }[]
  >([]);

  const getFilterOptionSelected = ({
    filterName,
    filterValue,
  }: {
    filterName: string;
    filterValue: string;
  }) => {
    setFiltersSelected((prev: any) => [...prev, { filterName, filterValue }]);
  };
  const removeUncheckOptionSelected = ({
    filterName,
    filterValue,
  }: {
    filterName: string;
    filterValue: string;
  }) => {
    const removedLastOptionSelected = filtersSelected.filter((filter) => {
      if (
        filter.filterName === filterName &&
        filter.filterValue === filterValue
      ) {
        return false;
      }

      return true;
    });

    setFiltersSelected(removedLastOptionSelected);
  };

  useEffect(() => {
    const fetchAllProducts = async () => {
      const { data } = await axios.get("../../data/products.json");

      console.log(data);

      setListProducts(data);
      setListOfCurrentProducts(data);
    };

    fetchAllProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        listProducts,
        listOfCurrentProducts,
        setListOfCurrentProducts,
        filtersSelected,
        setFiltersSelected,
        getFilterOptionSelected,
        removeUncheckOptionSelected,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
