import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { Products } from "./Products";
import { makeMockAxiosReturnedValue } from "./factories/mocks/makeMockedAxiosReturnValue";
import { act } from "react-dom/test-utils";
import { ProductProvider } from "../../contexts/ProductContext";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Products Page", () => {
  describe("Products Section", () => {
    it("should have a list of product cards", async () => {
      makeMockAxiosReturnedValue(mockedAxios);

      await act(async () => {
        const {} = render(<Products />, {wrapper: ProductProvider});
      });

      (await screen.findAllByTestId(/product-card-component/i)).map((element) =>
        expect(element).toBeInTheDocument()
      );
      expect((await screen.findAllByTestId(/product-card-component/i)).length).toBe(5);
    });
  });

  describe("Filters Section", () => {
    it("should have a area to open or close filters with title: filter; and an icon", async () => {
      await act(async () => {
        const { } = render(<Products />, {wrapper: ProductProvider});
      });

      expect(screen.getByTestId(/open-or-close-filter/i)).toBeInTheDocument();
      expect(screen.getByTestId(/open-or-close-filter/i)).toHaveTextContent(
        /filtros/i
      );
    });
    it("should open the filters section when area to open filter was clicked", async () => {
      await act(async () => {
        const { } = render(<Products />, {wrapper: ProductProvider});
      })

      await userEvent.click(screen.getByTestId(/open-or-close-filter/i));

      expect(screen.getByTestId(/filters-section-component/i)).toBeInTheDocument();
    });
    it("should close the filters section when area to open filter was clicked twice", async () => {
      await act(async () => {
        const { } = render(<Products />, {wrapper: ProductProvider});
      })


      await userEvent.dblClick(screen.getByTestId(/open-or-close-filter/i));

      expect(screen.queryByTestId(/filters-section-component/i)).toBeFalsy();
    });
  });
});
