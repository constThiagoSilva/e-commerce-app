import { HTMLAttributes, useMemo } from "react";
import { FilterBox } from "../../../../components/Filter/FilterBox/FilterBox";
import {FiltersSection__Overlay, FiltersSection__Content} from './styles'
import {Filter} from '../../../../components/Filter/FilterBox/interface/Filter'
import { useContext } from "react";
import { IProductContext, ProductContext, ProductProvider } from "../../../../contexts/ProductContext";
import { Product } from "../../../../interfaces/Product";

interface FiltersSectionProps extends HTMLAttributes<HTMLDivElement>{
  isOpen: boolean
  onClose: () => void
}

export const FiltersSection = ({ isOpen, onClose ,...rest }: FiltersSectionProps) => {
  if (!isOpen) return null

  const {filtersSelected, setListOfCurrentProducts, listProducts} = useContext(ProductContext) as IProductContext

  const FILTER_OPTIONS = useMemo<Filter[]>(
    () => [
      {
        title: 'Size',
        filters: [{filter: '20'}, {filter: '30'}, {filter: '40'}]   
      },
      {
        title: "Price",
        filters: [{filter: 'Acima de 500'}, {filter: 'Acima de 1000'}]   
      },
      {
        title: "Category",
        filters:[{filter: 'sport'}, {filter: 'casual'}]
      },
    ],
    []
  );

  const filterProducts = () => {
    const newList: Product[] =  []

    filtersSelected.forEach(filter => {
      listProducts.forEach(product => {
        type FilterNameKey = keyof typeof product;

        console.log(product[(filter.filterName.toLowerCase()) as FilterNameKey] === filter.filterValue, filter.filterValue)

        if (product[(filter.filterName.toLowerCase()) as FilterNameKey] === filter.filterValue) {
          newList.push(product)

          return
        }

        return
      })

      console.log('ccccccc', newList)

    })
    setListOfCurrentProducts(newList)
  }

  const handleClose = () => {
    onClose()
    filterProducts()
  }

  return (
    <FiltersSection__Overlay {...rest}>
      <FiltersSection__Content>
        {FILTER_OPTIONS.map((option) => (
          <FilterBox
            key={option.title}
            filter={option}
            data-testid='filter-options-component'
          />
        ))}
      </FiltersSection__Content>
      <div data-testid='close-section' onClick={handleClose}>
        X
      </div>
    </FiltersSection__Overlay>
  );
};
