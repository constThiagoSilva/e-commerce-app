import { render } from "@testing-library/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Product } from "../../interfaces/Product";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const { data } = await axios.get("../../data/products.json");

      setProducts(data);
    };

    fetchAllProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          product={{
            category: "any",
            image_url: "any",
            inPromotion: null,
            price: 100,
            title: "any",
          }}
          data-testid="product-card-component"
        />
      ))}
    </div>
  );
};

describe("Products Page", () => {
  it("should have a list of product cards", async () => {
    mockedAxios.get.mockResolvedValue({
      data: [
        {
          category: "any_category",
          image_url: "any_url",
          inPromotion: null,
          price: 100,
          title: "any_title",
        },
        {
          category: "any_category",
          image_url: "any_url",
          inPromotion: null,
          price: 100,
          title: "any_title",
        },
        {
          category: "any_category",
          image_url: "any_url",
          inPromotion: null,
          price: 100,
          title: "any_title",
        },
        {
          category: "any_category",
          image_url: "any_url",
          inPromotion: null,
          price: 100,
          title: "any_title",
        },
        {
          category: "any_category",
          image_url: "any_url",
          inPromotion: null,
          price: 100,
          title: "any_title",
        },
      ],
    });

    const { findAllByTestId } = render(<Products />);

    (await findAllByTestId(/product-card-component/i)).map((element) =>
      expect(element).toBeInTheDocument()
    );
    expect((await findAllByTestId(/product-card-component/i)).length).toBe(5);
  });
});
