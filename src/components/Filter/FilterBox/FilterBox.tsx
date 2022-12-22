import { useState } from "react";
import { FilterOption } from "./FilterOptions/FilterOption";
import { Filter } from "./interface/Filter";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FilterBox__Container, FilterBox__Title, FilterBox__TitleContainer, FilterBox__FilterOptionsContainer } from "./styles";

interface FilterBoxProps {
  filter: Filter;
}

export const FilterBox = ({ filter }: FilterBoxProps) => {
  const [isFilterOptionsOpen, setIsFilterOptionsOpen] = useState(false);

  return (
    <FilterBox__Container
      onClick={() => setIsFilterOptionsOpen(!isFilterOptionsOpen)}
      data-testid="component"
    >
      <FilterBox__TitleContainer>
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
          {filter.filters.map((filter) => (
            <FilterOption
              data-testid="filters-options"
              filterTitle={filter.filter}
            />
          ))}
        </FilterBox__FilterOptionsContainer>
      )}
    </FilterBox__Container>
  );
};
