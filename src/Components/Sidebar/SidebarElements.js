import styled from "styled-components";



export const SidebarContainer = styled.div`
background: #272727;
display: flex;
position: fixed;
top: 0;
left: 0;
transition: 800ms ease;
width: 17%;
height: 100vh;
white-space: nowrap;
scrollbar-color: dark;
padding: 5px;
border: 1px solid white; 
box-shadow: 6px 3px 4px black;
width: ${({sidebar}) => sidebar ? "4%" : "17%"}; 

&:hover{

    width: 17%;
    z-index: 20;
}


@media screen and (max-width: 960px){
    margin-left: ${({sidebar}) => sidebar ? "0" : "-300px"};

    &:hover{

        width: 50%;
    }
}
 
`;

export const SidebarItems = styled.div`
    border: 1px solid red;
    z-index: 10;
    overflow-y: scroll;
    padding-top: 70px;
    width: 100%;
    
`;


export const SidebarLogo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #292d32;
    padding: 5px 10px;
    color: #175d67;
    position: fixed;
    top: 0;
    left: 0;
    width: ${({sidebar}) => sidebar ? "4%" : "17%"};
    
    box-shadow: 6px 3px 4px black;
    border: 1px solid yellow;
    transition: 0.3s all ease-in-out;
    

    @media screen and (max-width: 960px){
        margin-left: 0;
    }
`;


export const Logo = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 30px;
`;

export const LogoTitle = styled.h1`
    font-weght: 600px;
    display: flex;
    transition: 0.7s ease-in-out;

    

    &:hover{
        display: block;
    }
`;

export const SidebarLink = styled.ul`
    display: flex;
    justify-contents: flex-start;
    align-items: center;
    border: 1px solid blue;
    padding: 5px;

`;
export const SidebarTag = styled.p`
    margin-right: 30px;
    margin-left: 5px;
    font-size: 20px;
    width: 30px;
    color: #ececed;
    
`;


export const SidebarLinkTitle = styled.h3`
    font-size: 15px;
    font-weight: 500;
    color: #ececed;
    border: 1px solid green;

`;


export const SidebarTitle = styled.p`
    font-size: 14px;
    border: 1px solid yellow;
    padding: 15px 5px 10px 5px;
    color: #ececed;
`;


export const SidebarDropdown = styled.div`

    border: 1px solid yellow
`;


export const Tag =styled.div`
    border-radius: 10px;
    color: black;
    font-size: 12px;
    margin-left: auto;
    background-color: #0e97a7;
    padding: 5px;
`;