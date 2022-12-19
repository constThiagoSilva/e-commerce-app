import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

interface FilterBoxProps {
  filter: {
    title: string;
  };
}

const FilterBox = ({ filter }: FilterBoxProps) => {
  const [isFilterOptionsOpen, setIsFilterOptionsOpen] = useState(false);

  return (
    <div>
      <span>{filter.title}</span>
      {isFilterOptionsOpen ? (
        <div
          data-testid="arrow-to-close-options"
          onClick={() => setIsFilterOptionsOpen(false)}
        >
          arrow up
        </div>
      ) : (
        <div
          data-testid="arrow-to-open-options"
          onClick={() => setIsFilterOptionsOpen(true)}
        >
          arrow down
        </div>
      )}
    </div>
  );
};

describe("Filter Box Component", () => {
  it("should have a title passed by props", () => {
    const mockFilterBoxProps = {
      title: "any_title",
    };
    const { getByText } = render(<FilterBox filter={mockFilterBoxProps} />);

    expect(getByText("any_title")).toBeInTheDocument();
  });
  it("should have a arrow icon to open filters options", () => {
    const mockFilterBoxProps = {
      title: "any_title",
    };
    const { getByTestId } = render(<FilterBox filter={mockFilterBoxProps} />);

    expect(getByTestId("arrow-to-open-options")).toBeInTheDocument();
  });
  it("should have a arrow icon to open filters options", async () => {
    const mockFilterBoxProps = {
      title: "any_title",
    };
    const { getByTestId, queryByTestId } = render(
      <FilterBox filter={mockFilterBoxProps} />
    );

    await userEvent.click(getByTestId("arrow-to-open-options"));

    expect(getByTestId("arrow-to-close-options")).toBeInTheDocument();
    expect(queryByTestId("arrow-to-open-options")).toBeFalsy();
  });
});
