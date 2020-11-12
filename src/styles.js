import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

//Global style for the page
export const GlobalStyle = createGlobalStyle`
body{
    color:${(props) => props.theme.mainColor};
    background: ${(props) => props.theme.backgroundColor};
    font-family: Sofia Pro,serif;
font-size: 18px;
font-weight: 300;
line-height: 24px;
}
`;

//Logo
export const Logo = styled(Link)`
  padding: 0.75 rem;
  margin-left: auto;

  img {
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 100px;
  }
`;

export const ButtonColored = styled.button`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  padding: 0.75 rem;
  color: ${(props) => props.theme.mainColor};
  background: ${(props) => props.theme.buttoncolor};
  border-color: ${(props) => props.theme.buttoncolor};
`;

//to highlight the text in search result
export const Searchtext = styled.span`
  .product-name {
    background-color: #ff9;
    color: #555;
  }
`;

//search bar
export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  height: 250px;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
`;
export const RecommendationStyle = styled.h2`
  margin-top: 100px;
  margin-left: 100px;
  color: ${(props) => props.theme.recommendationColor};
`;
export const RecommendationListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const ProductWrapper = styled.div`
  margin: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) => props.theme.itemBorder};
  border-radius: 5px;
  img {
    border-width: 1px;
    border-color: ${(props) => props.theme.itemBorder};
    margin: 50px;
    width: 290px;
    height: 250px;
    object-fit: cover;
  }
  h3 {
    text-align: center;
  }
`;

export const DetailWrapper = styled.div`
  margin-top: 50px;
  img {
    display: block;
    width: 25%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    border-style: solid;
    border-width: 1px;
    border-color: ${(props) => props.theme.itemBorder};
    object-fit: cover;
  }
  h1,
  h2,
  h3,
  h4 {
    display: block;
    width: 25%;
    margin-left: auto;
    margin-right: auto;
    color: ${(props) => props.theme.blue};
  }
  p {
    display: block;
    width: 25%;
    margin-left: auto;
    margin-right: auto;
    color: ${(props) => props.theme.blue};
  }
`;
export const BoxWrapper = styled.div`
  margin: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) => props.theme.itemBorder};
  border-radius: 5px;
  width: 490px;
  height: 490px;
  margin-bottom: 100px;
  img {
    width: 489px;
    height: 489px;
  }
`;

export const SlideShowContainer = styled.div`
  max-width: 518px;
  position: relative;
  margin: auto;
  margin-top: 50px;
  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }
  .prev:hover,
  .next:hover {
    background-color: #f2c726;
  }
`;

export const MySlides = styled.div`
  /* display: none; */
`;
