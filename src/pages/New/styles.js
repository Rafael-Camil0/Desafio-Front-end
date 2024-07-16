import styled from "styled-components";

export const Container =styled.div `
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;

    grid-template-areas: 
    "header"
    "content"
    ;
    


`
export const Form = styled.form`
grid-area: content;
display: flex;
flex-direction: column;
width: 70%;
height: 100%;
margin: 0 auto;
gap: 40px;

> textArea{
    width: 100%;
    height: 274px;
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_600};
    border: none;
    border-radius: 10px;
    color: ${({theme})=> theme.COLORS.WHITE_100};
    padding: 19px 0 19px 24px;
    resize: none;
    ::placeholder{
        color: ${({theme})=>theme.COLORS.GRAY_300};
    }
}
.marcadores{
    display: flex;
    width: 100%;
    padding: 16px;
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_800};
}
`