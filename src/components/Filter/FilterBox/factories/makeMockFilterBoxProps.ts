import { Filter } from "../interface/Filter";

export const makeMockFilterBoxProps = (
  customizableMockFilterProps?: Filter
): Filter => {
  if (customizableMockFilterProps) {
    return customizableMockFilterProps;
  }

  return {
    title: "any_title",
    filters: [
      { filter: "any_filter_1" },
      { filter: "any_filter_2" },
      { filter: "any_filter_3" },
    ],
  };
};
