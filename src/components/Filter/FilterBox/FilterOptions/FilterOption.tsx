import { HTMLAttributes } from "react";

interface FilterOptionProps extends HTMLAttributes<HTMLDivElement> {
  filterTitle: string
}

export const FilterOption = ({ filterTitle, ...rest }: FilterOptionProps) => {
  return <div {...rest}>

    <div data-testid='checkbox-element'></div>
    <span>{filterTitle}</span>

  </div>;
};
