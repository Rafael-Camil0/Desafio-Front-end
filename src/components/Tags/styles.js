import styled from "styled-components";

export const Container = styled.div`
    width: clamp(100px,190px,300px);
    height: 56px;
    display: flex;
    align-items: center;
    padding: 16px;
    background-color: ${({theme,$isnew})=> !$isnew? theme.COLORS.BACKGROUND_600: theme.COLORS.BACKGROUND_800};
    border:  ${({theme,$isnew})=> !$isnew? "none": `2px dashed ${theme.COLORS.GRAY_300}`};
    border-radius:10px;

    > input{
        height: 24px;
        color:${({theme})=>theme.COLORS.WHITE_300};
        width:100%;
        background-color:transparent;
        border:none;
        
    }
    >button{
        background-color:transparent;
        border:none;
        
        svg{
        color:${({theme})=> theme.COLORS.GRAY_300};
      
        
    }
    }


`