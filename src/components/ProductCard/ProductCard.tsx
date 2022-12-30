import { HTMLAttributes } from "react";
import { Product } from "../../interfaces/Product";
import { formatPriceToBRL } from "../../utils/formatCurrenyToBRL";
import {
  ProductCard__Container,
  ProductCard__ImageProductSection,
  ProductCard__ProductInfoContainer,
  ProductCard__ProductTitle,
  ProductCard__ProductCategory,
  ProductCard__ProductPriceSection,
  ProductCard__ProductPrice,
  ProductCard__ProductPromotionPrice,
  ProductCard__ProductNormalPriceWhenProductIsInPromotion
} from "./styles";

import Img from "../../assets/snicker.png";

interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  product: Product;
}

export const ProductCard = ({ product, ...rest }: ProductCardProps) => {
  return (
    <ProductCard__Container {...rest}>
      <ProductCard__ImageProductSection>
        <img
          src={product.image_url}
          alt="any_alt"
          data-testid="product-image"
        />
      </ProductCard__ImageProductSection>
      <ProductCard__ProductInfoContainer>
        <div>
        <ProductCard__ProductTitle>{product.title}</ProductCard__ProductTitle>

        <ProductCard__ProductCategory>
          {product.category}
        </ProductCard__ProductCategory>
        </div>
        <ProductCard__ProductPriceSection>
          {product.inPromotion ? (
            <>
              <ProductCard__ProductPrice>
                <div data-testid="promotion-price">
                  {formatPriceToBRL(
                    product.price -
                      (product.price * product.inPromotion.discountInPercent) /
                        100
                  )}
                </div>
                <ProductCard__ProductNormalPriceWhenProductIsInPromotion data-testid="normal-product-price">
                  {formatPriceToBRL(product.price)}
                </ProductCard__ProductNormalPriceWhenProductIsInPromotion>
              </ProductCard__ProductPrice>
              <ProductCard__ProductPromotionPrice>{product.inPromotion?.discountInPercent}% off</ProductCard__ProductPromotionPrice>
            </>
          ) : (
            <span data-testid="product_price">
              {new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </span>
          )}
        </ProductCard__ProductPriceSection>
      </ProductCard__ProductInfoContainer>
    </ProductCard__Container>
  );
};
