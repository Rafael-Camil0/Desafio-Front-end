import styled from "styled-components";

export const Container = styled.button`
    width: 80%;
    height:clamp( 48px,53px,56px);
    text-align: center;
    border-radius: 10px;
    background-color: ${({theme,$isblack})=> $isblack ? theme.COLORS.BACKGROUND_800:theme.COLORS.GRAY_600}; 
    color: ${({theme,$isblack})=> $isblack ?theme.COLORS.GRAY_600 :theme.COLORS.BLACK_600};

`