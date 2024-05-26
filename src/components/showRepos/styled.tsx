import styled from "styled-components";

export const section = styled.section`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    color: white;
    padding: 10px;
`

export const divError = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const h1 = styled.h1`
    color: white;
`

export const h2 = styled.h2`
    font-size: 1.0em;
    font-weight: 500;
`

export const div = styled.div`
    display: flex;
    flex-direction: column;
    width: clamp(230px,30vw,380px);
    min-height: 200px;
    gap: 10px;
    flex-wrap: wrap;
    border: 1px solid rgba(255,255,255,0.35);
    border-radius: 8px;
    padding: 8px;
    @media (max-width:768px) {
        width: 100%;
        height: 150px;
    }
`

export const divChild = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
    width: 100%;
`

export const a = styled.a`
    color: #0033ff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

export const p = styled.p<{$borde?:boolean}>`
    border: ${({$borde})=> $borde?'1px solid rgba(255,255,255,0.35)':'none'};
    border-radius:${({$borde})=> $borde?'8px':'none'};
    padding: ${({$borde})=> $borde?'5px':'none'};
    color: rgb(255, 255, 255);
`