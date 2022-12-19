export type Product = {
  title: string;
  category: string;
  price: number;
  inPromotion: {
    discountInPercent: number;
    price: number;
  } | null;
  image_url: string;
};
