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
          src={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExETEhUVFRUWGRUYFRsaFxcZFhcWFxgaGRYYHSggGx0mHRYZITIiJSorLi4uGB8zPjMtNygtLisBCgoKDg0OGxAQGzAlICUtLS0tLS0tLS0tLS0tLS8tLS0tLS0tLy4vLS0tLS0tLS0vLS0tLy0tLS0tLy0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYCBAcDAQj/xABAEAACAQIEAgcFBQcDBAMAAAABAgADEQQSITEFQQYTIlFhcYEHMpGh8EJSscHRFCNigpKi4RZy0jNDsvEkVML/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBQQG/8QAMhEAAgECAwUHAwMFAAAAAAAAAAECAxEEITEFEkFhkSJRcYGh0fATscEUUvEVM0Jikv/aAAwDAQACEQMRAD8A7jERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAERNenikZmRWUslgwB1W/fIuDYiIkgREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQDT4ni+rpluew8zt+vpK/gAVIYE5tyfPe/fJvjtHNRa24s3w3+V5C4drr5z5bbtWrCtDOytdWyzv8+ZmFRveRMYLiYdiraW2PI+HnJOVKimXSb2G4n1fvHsAa+Hl+k02ftp3VOvn/t7r8rpqyY1ODJ+J4YbELUUOpuD6fIz3n0iaaujYRESQIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCVOt06w5Z6eHWti6iEqRSpnqww7672p28mPPc6SW6R4s06Ol7swGm9tz+FvWVeliSef/v8A9gjTwnE2ltZ4Wf04Ru7Xu3l0XujOVTddjyxvTbF4VhVxeEojCEqGehVepUog6Z3DU1zrci+UfHadARgQCDcHUHvlA47gf2jDVaI3em6j+ZSB3/Qmp7HOmYr0FwFc5MThxkAJ1qU0FgR/EtsrDwB5m19kY+eKhL6lrp8Msnfh5Ewk3qdNiInY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'}
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
