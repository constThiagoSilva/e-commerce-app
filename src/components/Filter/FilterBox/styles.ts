import styled from "styled-components";

export const FilterBox__Container = styled.div`
    width: 100%;

    padding: 20px 10px;

    display: flex;
    flex-direction: column;

    color: #ccc;

    &:hover {
        color: #000;
    }

    cursor: pointer;

    &:not(:last-child) {
        
        border-bottom: 1px solid #ccc;
    }
`

export const FilterBox__TitleContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const FilterBox__Title = styled.span`
    font-size: larger;
`

export const FilterBox__FilterOptionsContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
`