import { HTMLAttributes, useMemo } from "react";
import { FilterOption } from "../../../../components/Filter/FilterBox/FilterOptions/FilterOption";
import {FiltersSection__Container} from './styles'

export const FiltersSection = ({ ...rest }: HTMLAttributes<HTMLDivElement>) => {
  const FILTER_OPTIONS = useMemo(
    () => [
      {
        title: "Size",
      },
      {
        title: "Price",
      },
      {
        title: "Category",
      },
    ],
    []
  );

  return (
    <FiltersSection__Container {...rest}>
      <section>
        {FILTER_OPTIONS.map((option) => (
          <FilterOption
            key={option.title}
            filterTitle={option.title}
            data-testid="filter-options-component"
          />
        ))}
      </section>
    </FiltersSection__Container>
  );
};
