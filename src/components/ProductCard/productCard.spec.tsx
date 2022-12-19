import { render } from "@testing-library/react";

type Product = {
  title: string;
  category: string;
  price: number;
  inPromotion: {
        discountInPercent: number;
        price: number;
      } | null;
  image_url: string;
};

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div>
      <img src={product.image_url} alt="any_alt" data-testid="product-image" />
      <h1>{product.title}</h1>
      <h3>{product.category}</h3>
      <span data-testid="product_price">
        {new Intl.NumberFormat("pt-br", {
          style: "currency",
          currency: "BRL",
        }).format(product.price)}
      </span>
      {product.inPromotion && (
          <span>{product.inPromotion?.discountInPercent}% off</span>
      )}
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
    category: "any_category",
    image_url: "any_url",
    inPromotion: null,
  };
};

describe("Product Card Component", () => {
  it("should have a image of product", () => {
    const { getByTestId } = render(<ProductCard product={makeMockProduct()} />);

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
    const { getByTestId } = render(<ProductCard product={makeMockProduct()} />);

    expect(getByTestId("product_price")).toBeInTheDocument();
    expect(getByTestId("product_price")).toHaveTextContent(
      `R$ ${makeMockProduct().price},00`
    );
  });
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
    const { getByText } = render(<ProductCard product={makeMockProduct(mockProduct)} />);

    expect(getByText(/20% off/i)).toBeInTheDocument();
  });
  it("not should have a section have the percent of discount if product has not in promotion", () => {
    const { queryByText } = render(<ProductCard product={makeMockProduct()} />);

    expect(queryByText(/20% off/i)).toBeFalsy();
  });
});
