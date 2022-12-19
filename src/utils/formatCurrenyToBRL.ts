export const formatPriceToBRL = (price: number): string => {
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};
