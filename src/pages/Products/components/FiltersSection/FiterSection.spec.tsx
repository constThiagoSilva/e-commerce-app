import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { act } from "react-dom/test-utils";
import { ProductProvider } from "../../../../contexts/ProductContext";
import { FiltersSection } from "./FiltersSection";

describe("Filter Section Product Page Component", () => {
  it("should render the filter options: Size, Price, Category", () => {
    const { getAllByTestId } = render(
      <FiltersSection isOpen={true} onClose={() => jest.fn()} />,
      { wrapper: ProductProvider }
    );

    getAllByTestId(/filter-options-component/i).map((element) =>
      expect(element).toBeInTheDocument()
    );
    expect(getAllByTestId(/filter-options-component/i).length).toBe(3);
  });
  it("should have a close filter-section button", () => {
    const { getByTestId } = render(
      <FiltersSection isOpen={true} onClose={() => jest.fn()} />,
      { wrapper: ProductProvider }
    );

    expect(getByTestId("close-section")).toBeInTheDocument();
  });

  // PESQUISAR DEPOIS COMO QUE FUNCIONA ISSO!!!!!!!!!!!
  //   it("should not display in screen when user click out", async () => {
  //     const setMockIsOpen = jest.fn()
  //     const mockIsOpen = true
  //     const useStateSpy = jest.spyOn(React, 'useState')
  //     useStateSpy.mockImplementation(() => [mockIsOpen, setMockIsOpen]);

  //     const element = render(
  //       <FiltersSection isOpen={mockIsOpen} onClose={() => setMockIsOpen(false)} />
  //     );

  //     await act(async () => {
  //         await userEvent.click(element.getByTestId('close-section'));
  //     })

  //     console.log(mockIsOpen)

  //     expect(setMockIsOpen).toHaveBeenCalled()
  //     expect(element.container.querySelector('#id-for-test')).toBeFalsy();
  //   });
});
