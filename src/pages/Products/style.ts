import styled from "styled-components";

export const ProductPage__Container = styled.main`
    width: 100%;
    height: 100%;

    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: #fff;
`

export const ProductPage__Header = styled.section`
    width: 100%;
    height: 8%;

    padding: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;

`

export const ProductPage__OpenOrCloseFiltersContainer = styled.div`
    width: 120px;
    height: 100%;

    cursor: pointer;

`
export const ProductPage__OpenOrCloseFilters = styled.div`
    width: 100%;
    height: 100%;

    padding: 5px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    font-size: small;
    color: #bbb;

    border-radius: 20px;


    &:hover {
        color: #000;
    }
`
export const ProductCard__ProductsContainer = styled.section`
    width: 100%;
    height: 92%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
`