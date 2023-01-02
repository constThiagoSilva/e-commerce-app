import { HTMLAttributes, useContext, useState } from "react";
import { handleCheckFilter } from "./handlers/handleCheckFilter";
import { setFilterTitle } from "./utils/setFilterTitle";
import { AiOutlineCheck } from "react-icons/ai";
import { FilterOption__Container, FilterOption__CheckBox } from "./styles";
import {
  IProductContext,
  ProductContext,
} from "../../../../contexts/ProductContext";

interface FilterOptionProps extends HTMLAttributes<HTMLDivElement> {
  filterType: string;
  filterValue: string;
}

export const FilterOption = ({
  filterType,
  filterValue,
  ...rest
}: FilterOptionProps) => {
  const { getFilterOptionSelected } = useContext(
    ProductContext
  ) as IProductContext;
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(true);

    getFilterOptionSelected({
      filterName: filterType,
      filterValue: filterValue,
    });
  };

  const handleUncheck = () => {
    setIsChecked(false);
  };

  return (
    <>
      {isChecked ? (
        <FilterOption__Container {...rest} onClick={handleUncheck}>
          <FilterOption__CheckBox data-testid="checkbox-element">
            <span data-testid="check">
              <AiOutlineCheck />
            </span>
          </FilterOption__CheckBox>
          <span>{filterValue}</span>
        </FilterOption__Container>
      ) : (
        <FilterOption__Container {...rest} onClick={handleCheck}>
          <FilterOption__CheckBox data-testid="checkbox-element"></FilterOption__CheckBox>
          <span>{filterValue}</span>
        </FilterOption__Container>
      )}
    </>
  );
};
