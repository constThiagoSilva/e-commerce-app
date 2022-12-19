import { HTMLAttributes } from "react";

export const FilterOption = ({ ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return <div {...rest}></div>;
};
