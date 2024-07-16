import styled from "styled-components";


export const Container = styled.nav`
width: 100vw;
grid-area: header;
height: 116px;
padding: 42px 123px;
display: flex;
align-items: center;
border-bottom: 1px solid #3E3B47;

>h1{
    color: ${({theme})=> theme.COLORS.GRAY_300};
    margin-right: 64px;
}


`

export const User = styled.section`
display: flex;
align-items: center;
margin-left: 64px;
width:300px;

    > img{
      
        height: 64px;
        object-fit: cover;
        border-radius: 500px;
        
    }
    >div{
        width: 150px;
        padding: 14px 9px 14px 0;
        p{
            font-weight: bold;
            font-size: 14px;
            color: ${({theme})=> theme.COLORS.WHITE_100};
        }
        span{
            color: ${({theme})=> theme.COLORS.GRAY_300};
            font-weight:normal ;
            font-size: 14px;
        }
    }
`
