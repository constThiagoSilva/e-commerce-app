import { render } from "@testing-library/react";

type Product = {
  title: string;
  category: string;
  price: number;
  inPromotion:
    | {
        discountInPercent: number;
        price: number;
      }
    | false;
  image_url: string;
};

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div>
      <img src={product.image_url} alt="any_alt" data-testid="product-image" />
    </div>
  );
};

const makeMockProduct = (otherMockProduct?: Product): Product => {
  if (otherMockProduct) {
    return otherMockProduct;
  }

  return {
    title: "any_title",
    price: 100,
    category: "sport",
    image_url: "any_url",
    inPromotion: false,
  };
};

describe("Product Card Component", () => {
  it("should have a image of product", () => {
    const { getByTestId } = render(<ProductCard product={makeMockProduct()} />);

    expect(getByTestId("product-image")).toBeInTheDocument();
    expect(getByTestId("product-image")).toHaveProperty("alt", "any_alt");
  });
});
