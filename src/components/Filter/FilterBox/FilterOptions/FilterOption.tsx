import { HTMLAttributes, useState } from "react";

interface FilterOptionProps extends HTMLAttributes<HTMLDivElement> {
  filterTitle: string;
}

export const FilterOption = ({ filterTitle, ...rest }: FilterOptionProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div {...rest} onClick={() => setIsChecked(!isChecked)}>
      <div data-testid="checkbox-element">
        {isChecked ? <span data-testid="check">X</span> : <></>}
      </div>
      <span>{filterTitle}</span>
    </div>
  );
};
