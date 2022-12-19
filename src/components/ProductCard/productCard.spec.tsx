import { render } from "@testing-library/react";
import { Product } from "../../interfaces/Product";
import { makeMockProduct } from "./factories/makeMockProduct";
import { ProductCard } from "./ProductCard";

describe("Product Card Component", () => {
  describe("Elements in screen", () => {
    it("should have a image of product", () => {
      const { getByTestId } = render(
        <ProductCard product={makeMockProduct()} />
      );

      expect(getByTestId("product-image")).toBeInTheDocument();
      expect(getByTestId("product-image")).toHaveProperty("alt", "any_alt");
    });
    it("should have an product title", () => {
      const { getByText } = render(<ProductCard product={makeMockProduct()} />);

      expect(getByText("any_title")).toBeInTheDocument();
    });
    it("should have an product category title", () => {
      const { getByText } = render(<ProductCard product={makeMockProduct()} />);

      expect(getByText("any_category")).toBeInTheDocument();
    });
    it("should have an product category title", () => {
      const { getByTestId } = render(
        <ProductCard product={makeMockProduct()} />
      );

      expect(getByTestId("product_price")).toBeInTheDocument();
      expect(getByTestId("product_price")).toHaveTextContent(
        `R$ ${makeMockProduct().price},00`
      );
    });

    describe("In promotion", () => {
      it("should have a section have the percent of discount if product has in promotion", () => {
        const mockProduct: Product = {
          title: "any_title",
          price: 100,
          category: "any_category",
          image_url: "any_url",
          inPromotion: {
            discountInPercent: 20,
            price: 80,
          },
        };
        const { getByText } = render(
          <ProductCard product={makeMockProduct(mockProduct)} />
        );

        expect(getByText(/20% off/i)).toBeInTheDocument();
      });
      it("should have a promotion price and normal price if product is in promotion", () => {
        const mockProduct: Product = {
          title: "any_title",
          price: 100,
          category: "any_category",
          image_url: "any_url",
          inPromotion: {
            discountInPercent: 20,
            price: 80,
          },
        };
        const { getByText, getByTestId } = render(
          <ProductCard product={makeMockProduct(mockProduct)} />
        );

        expect(getByText("R$ 80,00")).toBeInTheDocument();
        expect(getByTestId("normal-product-price")).toBeInTheDocument();
      });
      it("not should have a section have the percent of discount if product has not in promotion", () => {
        const { queryByText } = render(
          <ProductCard product={makeMockProduct()} />
        );

        expect(queryByText(/20% off/i)).toBeFalsy();
      });
      it("not should have a promotion price if product has not in promotion", () => {
        const { queryByTestId } = render(
          <ProductCard product={makeMockProduct()} />
        );

        expect(queryByTestId(/promotion-price/i)).toBeFalsy();
      });
    });
  });
});
