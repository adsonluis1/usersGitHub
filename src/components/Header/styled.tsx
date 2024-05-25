import styled from "styled-components";

export const header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;
    background-color: #000000;
    color: white;
    width: 100%;
    padding: 10px;
`

export const h1 = styled.h1`
    font-size: clamp(1em,5vw,2.5em);

    & span{
        font-weight: bolder;
        color: rgb(26, 35, 47);
    }
`