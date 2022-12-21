import { AxiosStatic } from "axios";

export const makeMockAxiosReturnedValue = (axios: jest.Mocked<AxiosStatic>) => {
  axios.get.mockResolvedValue({
    data: [
      {
        category: "any_category",
        image_url: "any_url",
        inPromotion: null,
        price: 100,
        title: "any_title",
      },
      {
        category: "any_category",
        image_url: "any_url",
        inPromotion: null,
        price: 100,
        title: "any_title",
      },
      {
        category: "any_category",
        image_url: "any_url",
        inPromotion: null,
        price: 100,
        title: "any_title",
      },
      {
        category: "any_category",
        image_url: "any_url",
        inPromotion: null,
        price: 100,
        title: "any_title",
      },
      {
        category: "any_category",
        image_url: "any_url",
        inPromotion: null,
        price: 100,
        title: "any_title",
      },
    ],
  });
};
