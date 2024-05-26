import styled from "styled-components";

export const div = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    & input {
        border-radius: 5px;
        border: none;
        width: clamp(170px,10vw,400px);
        padding: 5px;
    }
`

