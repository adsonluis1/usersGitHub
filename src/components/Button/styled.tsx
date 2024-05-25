import styled from "styled-components";

export const button = styled.button<{$dark?:boolean;}>`
    background-color: ${({$dark}) => $dark==true?'black':'rgb(26, 35, 47)'};
    cursor: pointer;
    color: white;
    border-radius: 5px;
    border: none;
    width: clamp(50px,8vw,100px);
    padding: 5px;
    
    &:hover {
        transition: .5s;
        background-color: rgb(51, 69, 94);
    }
` 