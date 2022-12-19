import { HTMLAttributes, useState } from "react";
import { handleCheckFilter } from "./handlers/handleCheckFilter";
import { setFilterTitle } from "./utils/setFilterTitle";

interface FilterOptionProps extends HTMLAttributes<HTMLDivElement> {
  filterTitle: string;
  getFilterTitle?: (filterTitle: string) => void;
}

export const FilterOption = ({
  filterTitle,
  getFilterTitle,
  ...rest
}: FilterOptionProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(handleCheckFilter(isChecked))

    if (isChecked) {
      getFilterTitle?.(setFilterTitle(filterTitle))
    }
  }

  return (
    <div {...rest} onClick={() => handleClick()}>
      <div data-testid="checkbox-element">
        {isChecked ? <span data-testid="check">X</span> : <></>}
      </div>
      <span>{filterTitle}</span>
    </div>
  );
};
