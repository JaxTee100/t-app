import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavContainer = styled.div`
    background-color: #272727;
    padding: 13px;
    width: ${({sidebar}) =>(sidebar ? "80%" : "94%")};
    
    position: fixed;
    top: 1%;
    left: ${({sidebar}) =>(sidebar ? "19.5%" : "5%")};
    border-radius: 5px;
    box-shadow: 3px 3px 4px black, -3px -3px 3px #3b3f43;
    transition: 0.3s all ease-in-out;


    @media screen and (max-width: 960px){
        width: 100%;
        left: 0;
    }
    
`;


export const NavList = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #0e97a7;
    font-size: 24px;

    ::nth
`;


export const NavListItem = styled(Link)`
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding: 5px;
    font-size: 20px;
    margin-right: 20px;
    box-shadow: 3px 3px 4px black, -3px -3px 3px #3b3f43;
`;
export const NavListItemD = styled(Link)`
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding: 5px;
    font-size: 20px;
    margin-right: auto;
    box-shadow: 3px 3px 4px black, -3px -3px 3px #3b3f43;
`;


export const NavImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`;


export const NavList2 = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #0e97a7;
    font-size: 24px;
`;

export const NavImage2 = styled.img`
    margin-right: auto;
    width: 40px;
    height: 40px;
`;