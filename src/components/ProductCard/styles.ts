import styled from "styled-components";

export const ProductCard__Container = styled.div`
  height: 16rem;
  width: 100%;

  padding: 10px;

  border-radius: 5px;


  cursor: pointer;

  img:hover { 
          transform: scale(1.1);
            transition: all .2s ease;
      }

    
`;
export const ProductCard__ImageProductSection = styled.section`
  width: 100%;
  height: 60%;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
  }

`;

export const ProductCard__ProductInfoContainer = styled.section`
  width: 100%;
  height: 40%;


  display: flex;
  justify-content: space-between;
  flex-direction: column;

  font-size: small;
`;

export const ProductCard__ProductTitle = styled.h1`
  font-weight: normal;
`;

export const ProductCard__ProductCategory = styled.h3`
  font-weight: lighter;
  font-size: 14px;
`;

export const ProductCard__ProductPriceSection = styled.div`
    width: 100%;

  margin-top: 10px;

    display: flex;
    justify-content: space-between;
    flex-direction: column;

    flex: 1;

    div {
        flex-direction: row;
    }
`

export const ProductCard__ProductPrice = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`

export const ProductCard__ProductPromotionPrice = styled.span`
    color: green;

    align-self: flex-end;

    font-weight: bold;
`

export const ProductCard__ProductNormalPriceWhenProductIsInPromotion = styled.span`
    text-decoration: line-through;

    color: #ccc;
`