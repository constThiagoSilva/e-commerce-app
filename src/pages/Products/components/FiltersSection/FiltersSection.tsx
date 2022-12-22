import { HTMLAttributes, useMemo } from "react";
import { FilterOption } from "../../../../components/Filter/FilterBox/FilterOptions/FilterOption";
import {FiltersSection__Overlay, FiltersSection__Content} from './styles'

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
    <FiltersSection__Overlay {...rest}>
      <FiltersSection__Content>
        {FILTER_OPTIONS.map((option) => (
          <FilterOption
            key={option.title}
            filterTitle={option.title}
            data-testid="filter-options-component"
          />
        ))}
      </FiltersSection__Content>
    </FiltersSection__Overlay>
  );
};
