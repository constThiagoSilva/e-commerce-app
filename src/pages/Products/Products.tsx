import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../../interfaces/Product";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { FiltersSection } from "./components/FiltersSection/FiltersSection";
import {BsFilter} from 'react-icons/bs'
import {
  ProductPage__Container,
  ProductPage__Header,
  ProductPage__OpenOrCloseFiltersContainer,
  ProductPage__OpenOrCloseFilters,
  ProductCard__ProductsContainer,
} from "./styles";
import { IProductContext, ProductContext } from "../../contexts/ProductContext";

export const Products = () => {
  const {listOfCurrentProducts ,setListOfCurrentProducts, setListProducts} = useContext(ProductContext) as IProductContext
  const [isFiltersSectionOpen, setIsFiltersSectionOpen] = useState(false);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const { data } = await axios.get("../../data/products.json");

      console.log(data);

      setListProducts(data);
      setListOfCurrentProducts(data);
    };

    fetchAllProducts();
  }, []);

  return (
    <ProductPage__Container>
      <ProductPage__Header>
        <span>contador</span>
        <ProductPage__OpenOrCloseFiltersContainer>
          <ProductPage__OpenOrCloseFilters
            data-testid="open-or-close-filter"
            onClick={() => setIsFiltersSectionOpen(!isFiltersSectionOpen)}
          >
            <span>filtros</span>
            <BsFilter style={{fontSize: 25}}/>
          </ProductPage__OpenOrCloseFilters>
        </ProductPage__OpenOrCloseFiltersContainer>
      </ProductPage__Header>
      <ProductCard__ProductsContainer>
        {listOfCurrentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            data-testid="product-card-component"
          />
        ))}
      </ProductCard__ProductsContainer>
      {isFiltersSectionOpen && (
        <FiltersSection data-testid="filters-section-component" isOpen={isFiltersSectionOpen} onClose={() => setIsFiltersSectionOpen(false)}/>
      )}
    </ProductPage__Container>
  );
};
