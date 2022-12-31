import { HTMLAttributes, useState } from "react";
import { handleCheckFilter } from "./handlers/handleCheckFilter";
import { setFilterTitle } from "./utils/setFilterTitle";
import {AiOutlineCheck} from 'react-icons/ai'
import {FilterOption__Container,FilterOption__CheckBox} from './styles'

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

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation()
    setIsChecked(handleCheckFilter(isChecked))

    if (isChecked) {
      getFilterTitle?.(setFilterTitle(filterTitle))
    }
  }

  return (
    <FilterOption__Container {...rest} onClick={(event) => handleClick(event)}>
      <FilterOption__CheckBox data-testid="checkbox-element">
        {isChecked ? <span data-testid="check"><AiOutlineCheck/></span> : <></>}
      </FilterOption__CheckBox>
      <span>{filterTitle}</span>
    </FilterOption__Container>
  );
};
