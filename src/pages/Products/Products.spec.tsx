import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { Products } from "./Products";
import { makeMockAxiosReturnedValue } from "./factories/mocks/makeMockedAxiosReturnValue";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Products Page", () => {
  describe("Products Section", () => {
    it("should have a list of product cards", async () => {
      makeMockAxiosReturnedValue(mockedAxios);
      const { findAllByTestId } = render(<Products />);

      (await findAllByTestId(/product-card-component/i)).map((element) =>
        expect(element).toBeInTheDocument()
      );
      expect((await findAllByTestId(/product-card-component/i)).length).toBe(5);
    });
  });

  describe("Filters Section", () => {
    it("should have a area to open or close filters with title: filter; and an icon", () => {
      const { getByTestId } = render(<Products />);

      expect(getByTestId(/open-or-close-filter/i)).toBeInTheDocument();
      expect(getByTestId(/open-or-close-filter/i)).toHaveTextContent(
        /filtros/i
      );
    });
    it("should open the filters section when area to open filter was clicked", async () => {
      const { getByTestId } = render(<Products />);

      await userEvent.click(getByTestId(/open-or-close-filter/i));

      expect(getByTestId(/filters-section-component/i)).toBeInTheDocument();
    });
    it("should close the filters section when area to open filter was clicked twice", async () => {
      const { getByTestId, queryByTestId } = render(<Products />);

      await userEvent.dblClick(getByTestId(/open-or-close-filter/i));

      expect(queryByTestId(/filters-section-component/i)).toBeFalsy();
    });
  });
});
