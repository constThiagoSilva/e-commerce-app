import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { makeMockFilterOptionsProps } from "./factories/makeMockFilterOptionsProp";
import { FilterOption } from "./FilterOption";

describe("Filter Option Component", () => {
  it("should have a title", () => {
    const { filterType, filterValue } = makeMockFilterOptionsProps();
    const { getByText } = render(
      <FilterOption filterType={filterType} filterValue={filterValue} />
    );

    expect(getByText("any_title")).toBeInTheDocument();
  });
  it("should have a checkbox", () => {
    const { filterType, filterValue } = makeMockFilterOptionsProps();
    const { getByTestId } = render(
      <FilterOption filterType={filterType} filterValue={filterValue} />
    );

    expect(getByTestId("checkbox-element")).toBeInTheDocument();
  });
  it("should have a checkbox when component is click", async () => {
    const { filterType, filterValue } = makeMockFilterOptionsProps();
    const { getByTestId } = render(
      <FilterOption filterType={filterType} filterValue={filterValue} />
    );

    await userEvent.click(getByTestId("checkbox-element"));

    expect(getByTestId("check")).toBeInTheDocument();
  });
  it("not should have a checkbox when comppnent is twice clicked", async () => {
    const { filterType, filterValue } = makeMockFilterOptionsProps();
    const { queryByTestId, getByTestId } = render(
      <FilterOption filterType={filterType} filterValue={filterValue} />
    );

    await userEvent.dblClick(getByTestId("checkbox-element"));

    expect(queryByTestId("check")).toBeFalsy();
  });
});
