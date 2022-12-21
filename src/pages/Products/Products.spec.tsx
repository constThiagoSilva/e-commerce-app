import { render } from "@testing-library/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Product } from "../../interfaces/Product";
import { makeMockAxiosReturnedValue } from "./factories/mocks/makeMockedAxiosReturnValue";

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
        <section>
            <div data-testid='open-or-close-filter'>
                <span>filtros</span>
                <span>icon</span>
            </div>
        </section>
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
    makeMockAxiosReturnedValue(mockedAxios)
    const { findAllByTestId } = render(<Products />);

    (await findAllByTestId(/product-card-component/i)).map((element) =>
      expect(element).toBeInTheDocument()
    );
    expect((await findAllByTestId(/product-card-component/i)).length).toBe(5);
  });
  it('should have a area to open or close filters with title: filter; and an icon', () => {
    const {getByText, getByTestId} = render(<Products/>)

    expect(getByTestId(/open-or-close-filter/i)).toBeInTheDocument()
    expect(getByTestId(/open-or-close-filter/i)).toHaveTextContent(/filtros/i)
  })
});
