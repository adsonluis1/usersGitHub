import styled from "styled-components";

export const section = styled.section`
    display:flex;
    flex-direction: row;
    height: 100vh;
    gap: 50px;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    background-color: rgb(26, 35, 47);
    padding: 10px;
`

export const UserInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    @media (max-width: 768px){
        width: 100%;
    }
    gap: 10px;
    padding: 10px;
`

export const img = styled.img`
    width: clamp(100px, 20vw,300px);
    border-radius: 50%;
`

export const h1 = styled.h1`
    font-size: 1.5em;
    color: white;
    font-weight: bolder;
`

export const h2 = styled.h2`
    font-size: 1.3em;
    color: rgba(255, 255, 255, 0.36);
`

export const p = styled.p`
    color: white;

    & span{
        color: rgba(255, 255, 255, 0.5);
    }
`