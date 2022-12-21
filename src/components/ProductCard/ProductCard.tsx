import { HTMLAttributes } from "react";
import { Product } from "../../interfaces/Product";
import { formatPriceToBRL } from "../../utils/formatCurrenyToBRL";

interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
    product: Product;
  }  

export const ProductCard = ({ product, ...rest }: ProductCardProps) => {
  return (
    <div {...rest}>
      <img src={product.image_url} alt="any_alt" data-testid="product-image" />
      <h1>{product.title}</h1>
      <h3>{product.category}</h3>
      {product.inPromotion ? (
        <>
          <div>
            <div data-testid="promotion-price">
              {formatPriceToBRL(
                product.price -
                  (product.price * product.inPromotion.discountInPercent) / 100
              )}
            </div>
            <div data-testid="normal-product-price">
              {formatPriceToBRL(product.price)}
            </div>
          </div>
          <span>{product.inPromotion?.discountInPercent}% off</span>
        </>
      ) : (
        <span data-testid="product_price">
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
        </span>
      )}
    </div>
  );
};