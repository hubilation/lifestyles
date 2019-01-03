import styled from 'styled-components';

const Entry = styled.div`
    background-color: ${props => props.theme.white};
    width: 100%;
    border-radius: 10px;
    padding: 10px 20px;
    box-shadow: ${props => props.theme.bs};
    border-left: 4px solid ${props => props.theme.lightGreen};
    margin: 20px 0;
`;

const Input = styled.input`
    margin-bottom: 5px;
    border: 0;
    background-color: ${props => props.theme.white};
    width: 50%;
    color: ${props => props.theme.grey};
    font-family: ${props => props.theme.bodyFont};
    font-weight: 600;
    ::placeholder{
        color: ${props => props.theme.lightGrey};
    }
`;

const TextArea = styled.textarea`
    margin-top: 5px;
    border: 0;
    background-color: ${props => props.theme.white};
    width: 100%;
    color: ${props => props.theme.grey};
    font-family: ${props => props.theme.bodyFont};
    font-weight: 600;
    ::placeholder{
        color: ${props => props.theme.lightGrey};
    }
    resize: none;
    margin-bottom: 5px;
`;

const NumericInput = styled(Input)`
    margin-bottom: 0;
`;

const FormLine = styled.div`
    display:flex;
    align-items: center;
    min-height: 2.5rem;
    margin-top: 2px;
`;

const SubmitLine = styled(FormLine)`
    /* justify-content: center; */
`;

const Icon = styled.div`
    position: relative;
    top: 2px;
    margin-right: 5px;
    min-width: 21px;
    text-align: center;
`;

const NumberIcon = styled(Icon)`
    font-weight: 600;
    color: ${props => props.theme.black};
    position: inherit;
    top: 5px;
`;

const Button = styled.button`
    font-family: ${props => props.theme.headerFont};
    background-color: ${props => props.theme.lightGreen};
    font-size: 2rem;
    padding: 5px 10px;
    border-radius: 4px;
    color: ${props => props.theme.grey};
    box-shadow: 0 1px 4px 0 rgba(0,50,0,0.4);
    cursor: pointer;
    :hover {
        background-color: ${props => props.theme.lighterGreen};
    }
    :disabled{
        background-color: ${props => props.theme.greyGreen};
        color: ${props => props.theme.lightGrey};
    }
    :active {
        background-color: ${props => props.theme.lighterGreen};
        transform: scale(0.99);
        position: relative;
        top: 1px;
        box-shadow: 0 0px 4px 0 rgba(0,50,0,0.4);
    }
`;

const CancelButton = styled(Button)`
    background-color: ${props=>props.theme.offGrey};
    margin-left: 5px;
    :hover {
        background-color: ${props => props.theme.greyGreen};
    }
`;

const Label = styled.label`
        display: flex;
        width: 50%;
        align-items: center; 
        
`;

const CheckboxLabel = styled(Label)`
    input {
        min-width: 21px;
    }
    .checkbox-label {
            font-weight: 600;
            margin-left: 5px;
    }
`;

const Form = styled.form`
`;

export { 
    Entry, 
    Input, 
    TextArea, 
    NumericInput, 
    FormLine, 
    Icon, 
    NumberIcon, 
    Button, 
    CancelButton,
    Label,
    CheckboxLabel,
    Form,
    SubmitLine 
}