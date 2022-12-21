import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../../interfaces/Product";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { FiltersSection } from "./components/FiltersSection/FiltersSection";

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isFiltersSectionOpen, setIsFiltersSectionOpen] = useState(false);

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
        <div
          data-testid="open-or-close-filter"
          onClick={() => setIsFiltersSectionOpen(!isFiltersSectionOpen)}
        >
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
      {isFiltersSectionOpen && (
        <FiltersSection data-testid="filters-section-component" />
      )}
    </div>
  );
};
