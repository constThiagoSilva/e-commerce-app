import { HTMLAttributes } from "react";
import { FilterOption } from "../../../../components/Filter/FilterBox/FilterOptions/FilterOption";

export const FiltersSection = ({ ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...rest}>
      <section>
        <FilterOption filterTitle="size" data-testid='filter-options-component'/>
        <FilterOption filterTitle="price" data-testid='filter-options-component'/>
        <FilterOption filterTitle="category" data-testid='filter-options-component'/>
      </section>
    </div>
  );
};
