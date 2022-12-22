import { HTMLAttributes, useMemo } from "react";
import { FilterBox } from "../../../../components/Filter/FilterBox/FilterBox";
import { FilterOption } from "../../../../components/Filter/FilterBox/FilterOptions/FilterOption";
import {FiltersSection__Overlay, FiltersSection__Content} from './styles'
import {Filter} from '../../../../components/Filter/FilterBox/interface/Filter'

export const FiltersSection = ({ ...rest }: HTMLAttributes<HTMLDivElement>) => {
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
    </FiltersSection__Overlay>
  );
};
