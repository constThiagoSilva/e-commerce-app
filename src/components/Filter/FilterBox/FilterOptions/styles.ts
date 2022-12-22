import styled from "styled-components";

export const FilterOption__Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    &:first-child {
        margin-top: 20px;
    }
    &:not(:last-child) {
        margin-bottom: 20px;
    }
`

export const FilterOption__CheckBox = styled.div`

    width: 20px;
    height: 20px;

    border: 1px solid #ccc;
    border-radius: 2px;

    

    margin-right: 10px;
`

export const FilterOption__Check = styled.span`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

`