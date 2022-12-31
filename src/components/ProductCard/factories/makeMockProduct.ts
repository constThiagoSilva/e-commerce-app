import { Product } from "../../../interfaces/Product";

export const makeMockProduct = (otherMockProduct?: Product): Product => {
  if (otherMockProduct) {
    return otherMockProduct;
  }

  return {
    id: 'any_id',
    title: "any_title",
    price: 100,
    category: "any_category",
    image_url: "any_url",
    inPromotion: null,
    size: 10
  };
};
