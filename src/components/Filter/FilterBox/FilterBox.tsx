import { HTMLAttributes, useContext, useState } from "react";
import { FilterOption } from "./FilterOptions/FilterOption";
import { Filter } from "./interface/Filter";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import {
  FilterBox__Container,
  FilterBox__Title,
  FilterBox__TitleContainer,
  FilterBox__FilterOptionsContainer,
} from "./styles";
import { IProductContext, ProductContext } from "../../../contexts/ProductContext";

interface FilterBoxProps extends HTMLAttributes<HTMLDivElement>{
  filter: Filter;
}

export const FilterBox = ({ filter, ...rest }: FilterBoxProps) => {
  const {setFiltersSelected} = useContext(ProductContext) as IProductContext
  const [isFilterOptionsOpen, setIsFilterOptionsOpen] = useState(false);

  const getFilterOptionSelected = ({filterName, filterValue}: {filterName: string, filterValue: string}) => {
    setFiltersSelected((prev: any) => [...prev, {filterName, filterValue}])
  }

  return (
    <FilterBox__Container {...rest}>
      <FilterBox__TitleContainer
        onClick={() => setIsFilterOptionsOpen(!isFilterOptionsOpen)}
        data-testid="component"
      >
        <FilterBox__Title>{filter.title}</FilterBox__Title>
        {isFilterOptionsOpen ? (
          <IoMdArrowDropup
            data-testid="arrow-to-close-options"
            style={{ fontSize: 25 }}
          />
        ) : (
          <IoMdArrowDropdown
            data-testid="arrow-to-open-options"
            style={{ fontSize: 25 }}
          />
        )}
      </FilterBox__TitleContainer>
      {isFilterOptionsOpen && (
        <FilterBox__FilterOptionsContainer>
          {filter.filters.map((filterOption) => (
            <FilterOption
              key={filterOption.filter}
              data-testid="filters-options"
              filterValue={filterOption.filter}
              filterType={filter.title}
              getFilterOptionSelected={({filterName, filterValue}) => getFilterOptionSelected({filterName, filterValue})}
            />
          ))}
        </FilterBox__FilterOptionsContainer>
      )}
    </FilterBox__Container>
  );
};
