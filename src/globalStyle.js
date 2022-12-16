import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family:'Montserrat', sans-serif;
}
`;

export const Container = styled.div`
width:100%;
max-width:130px;
margin-right:auto;
margin-left:auto;
padding:0 50px;

@media screen and (max-width: 960px){
    padding:0 30px;
}
`;

export const MainHeading = styled.h1`
font-size: clamp(2.3rem, 6vw, 4.5rem);
margin-bottom:2rem;
color: ${({inverse}) => (inverse ? "$403ae3" : "#fff")};
width:100%;
letter-space:0.4rem;
line-height:1.06;
text-align:center;
width: ${({width}) => (width ? width : '100%')}
`;

export const Heading = styled.h2`
font-size: clamp(1.3rem, 13vw, 3.1rem);
margin-bottom:${({mb}) => (mb ? mb : '')};
margin: ${({margin}) => (margin ? margin : '')};
margin-top:${({mt}) => (mt ? mt : '')};
color: ${({inverse}) => (inverse ? "$403ae3" : "#fff")};
letter-space:0.4rem;
line-height:1.06;
text-align:center;
width: ${({width}) => (width ? width : '100%')};
`;
export const TextWrapper = styled.span``;
export const Section = styled.section``;
export const Row = styled.div``;

export const Column = styled.div`
gap: ${({gap}) => (gap ? gap : '')};
padding: ${({padding}) => (padding ? padding : '')};
margin: ${({margin}) => (margin ? margin : '')};
position: ${({position}) => (position ? position : '')};
width: ${({width}) => (width ? width : 'auto')};
min-width: ${({minWidth}) => (minWidth ? minWidth : 'auto')};
max-width: ${({maxWidth}) => (maxWidth ? maxWidth : 'auto')};
min-Height: ${({minHeight}) => (minHeight ? minHeight : 'auto')};
max-Height: ${({maxHeight}) => (maxHeight ? maxHeight : 'auto')};
height: ${({height}) => (height ? height : 'auto')};
margin: ${({margin}) => (margin ? margin : '')};
`;

export const Button = styled.button`
border-radius:4px;
background:none;
white-space:nowrap;
padding:10px 20px;
font-size:16px;
color:white;
outline:none;
border:2px solid #fff;
cursor:cursor;
overflow:hidden;
position:relative;

&:before {
    background:#fff;
    position:absolute;
    content: '';
    top:50%;
    left:50%;
    transform: translate(-50% -50%);
    z-indeex:-1;
    transition:traslate: all 0.6s ease;
    width:100%;
    height:0%;
    transform: translate(-50% -50%)rotate(45deg);
}


&:hover:before{
    height:500%;
}
&:hover{
    color:black;
}

`;

export default GlobalStyle;