import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProductProvider } from "../../../contexts/ProductContext";
import { makeMockFilterBoxProps } from "./factories/makeMockFilterBoxProps";
import { FilterBox } from "./FilterBox";

describe("Filter Box Component", () => {
  it("should have a title passed by props", () => {
    const { getByText } = render(
      <FilterBox filter={makeMockFilterBoxProps()} />,
      { wrapper: ProductProvider }
    );

    expect(getByText("any_title")).toBeInTheDocument();
  });
  it("should have a arrow icon to open filters options", () => {
    const mockFilterBoxProps = {
      title: "any_title",
      filters: [],
    };
    const { getByTestId } = render(<FilterBox filter={mockFilterBoxProps} />, {
      wrapper: ProductProvider,
    });

    expect(getByTestId("arrow-to-open-options")).toBeInTheDocument();
  });
  it("should have a arrow icon to open filters options", async () => {
    const { getByTestId, queryByTestId } = render(
      <FilterBox filter={makeMockFilterBoxProps()} />,
      { wrapper: ProductProvider }
    );

    await userEvent.click(getByTestId("component"));

    expect(getByTestId("arrow-to-close-options")).toBeInTheDocument();
    expect(queryByTestId("arrow-to-open-options")).toBeFalsy();
  });
  it("should have a close section filters options", async () => {
    const { getByTestId, queryByTestId } = render(
      <FilterBox filter={makeMockFilterBoxProps()} />,
      { wrapper: ProductProvider }
    );

    await userEvent.dblClick(getByTestId("component"));

    expect(getByTestId("arrow-to-open-options")).toBeInTheDocument();
    expect(queryByTestId("arrow-to-close-options")).toBeFalsy();
  });
  it("should have a filter options", async () => {
    const { getAllByTestId, getByTestId } = render(
      <FilterBox filter={makeMockFilterBoxProps()} />,
      { wrapper: ProductProvider }
    );

    await userEvent.click(getByTestId("component"));

    getAllByTestId("filters-options").map((filterOption) =>
      expect(filterOption).toBeInTheDocument()
    );
    expect(getAllByTestId("filters-options").length).toBe(3);
  });
});
