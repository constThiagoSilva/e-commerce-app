import { HTMLAttributes, useMemo } from "react";
import { FilterOption } from "../../../../components/Filter/FilterBox/FilterOptions/FilterOption";

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
    <div {...rest}>
      <section>
        {FILTER_OPTIONS.map((option) => (
          <FilterOption
            key={option.title}
            filterTitle={option.title}
            data-testid="filter-options-component"
          />
        ))}
      </section>
    </div>
  );
};
