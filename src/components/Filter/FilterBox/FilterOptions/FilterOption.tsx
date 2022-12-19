import { HTMLAttributes, useState } from "react";

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

  const handleCheckFilter = (filterTitle: string) => {
    setIsChecked(!isChecked);

    if (isChecked) {
      getFilterTitle?.(filterTitle);
    }
  };

  return (
    <div {...rest} onClick={() => handleCheckFilter(filterTitle)}>
      <div data-testid="checkbox-element">
        {isChecked ? <span data-testid="check">X</span> : <></>}
      </div>
      <span>{filterTitle}</span>
    </div>
  );
};
