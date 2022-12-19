import { useState } from "react";
import { FilterOption } from "./FilterOptions/FilterOption";
import { Filter } from "./interface/Filter";

interface FilterBoxProps {
  filter: Filter;
}

export const FilterBox = ({ filter }: FilterBoxProps) => {
  const [isFilterOptionsOpen, setIsFilterOptionsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsFilterOptionsOpen(!isFilterOptionsOpen)}
      data-testid="component"
    >
      <span>{filter.title}</span>
      {isFilterOptionsOpen ? (
        <div data-testid="arrow-to-close-options">arrow up</div>
      ) : (
        <div>
          <div data-testid="arrow-to-open-options">arrow down</div>
          <div>
            {filter.filters.map((filter) => (
              <FilterOption data-testid="filters-options" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
