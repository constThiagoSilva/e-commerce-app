import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { makeMockFilterBoxProps } from "./factories/makeMockFilterBoxProps";
import { FilterBox } from "./FilterBox";

describe("Filter Box Component", () => {
  it("should have a title passed by props", () => {
    const { getByText } = render(
      <FilterBox filter={makeMockFilterBoxProps()} />
    );

    expect(getByText("any_title")).toBeInTheDocument();
  });
  it("should have a arrow icon to open filters options", () => {
    const mockFilterBoxProps = {
      title: "any_title",
      filters: [],
    };
    const { getByTestId } = render(<FilterBox filter={mockFilterBoxProps} />);

    expect(getByTestId("arrow-to-open-options")).toBeInTheDocument();
  });
  it("should have a arrow icon to open filters options", async () => {
    const { getByTestId, queryByTestId } = render(
      <FilterBox filter={makeMockFilterBoxProps()} />
    );

    await userEvent.click(getByTestId("component"));

    expect(getByTestId("arrow-to-close-options")).toBeInTheDocument();
    expect(queryByTestId("arrow-to-open-options")).toBeFalsy();
  });
  it("should have a close section filters options", async () => {
    const { getByTestId, queryByTestId } = render(
      <FilterBox filter={makeMockFilterBoxProps()} />
    );

    await userEvent.dblClick(getByTestId("component"));

    expect(getByTestId("arrow-to-open-options")).toBeInTheDocument();
    expect(queryByTestId("arrow-to-close-options")).toBeFalsy();
  });
  it("should have a filter options", () => {
    const { getAllByTestId } = render(
      <FilterBox filter={makeMockFilterBoxProps()} />
    );

    getAllByTestId("filters-options").map((filterOption) =>
      expect(filterOption).toBeInTheDocument()
    );
    expect(getAllByTestId("filters-options").length).toBe(3);
  });
});
