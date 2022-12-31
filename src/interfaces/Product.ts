export type Product = {
  id: string;
  title: string;
  category: string;
  price: number;
  inPromotion: {
    discountInPercent: number;
    price: number;
  } | null;
  image_url: string;
  size: number;
};
