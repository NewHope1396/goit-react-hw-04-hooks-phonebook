import { Form, Field} from 'formik';
import styled from "@emotion/styled";

export const StyledForm = styled(Form)`
display: flex;
flex-flow: column;
padding: 15px 20px;
border: 2px solid #524b4b;
border-radius: 12px;
background-color: #FFF4D8;

width: 320px;
`;

export const Input = styled(Field)`
    width: 280px;
    margin-bottom: 5px;
    margin-left: 20px;

    border: none;
    box-shadow: 0px 0px 8px 2px #6994f1;
    &:focus,
    &:hover{
        border: none;
        outline: none;
    } 
`;

export const Label = styled.label`
    margin-bottom: 5px;
    margin-left: 20px;
    font-weight: 700;
`
export const Button = styled.button`
    width: 280px;
    margin-left: 20px;
    margin-top: 20px;
    height: 30px;

    background-color: #6994f1;
    border-radius: 17px;

    font-weight: 700; 
`