import styled from "@emotion/styled";

export const Input = styled.input`
    width: 240px;
    margin-bottom: 5px;
    margin-left: 8px;

    border: none;
    box-shadow: 0px 0px 8px 2px #6994f1;
    &:focus,
    &:hover{
        border: none;
        outline: none;
    } 
`

export const Label = styled.label`
    font-weight: 700;
`

export const Container = styled.div`
    margin-bottom: 25px;
`