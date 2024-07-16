import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    width:100%;
    height: 56px;
   
    

    background-color: ${({theme})=>theme.COLORS.BACKGROUND_900};
    
    >input{
        width: 100%;
        
        max-height: 50px;
        border-radius: 10px;
        background-color: ${({theme})=>theme.COLORS.BACKGROUND_600};
        padding: 19px 0 19px 24px;
        color: ${({theme})=> theme.COLORS.WHITE_100};
        
        border:none
        
    }
    


`
