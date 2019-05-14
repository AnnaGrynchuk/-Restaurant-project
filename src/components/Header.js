import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    background-color: #0E8B87;
    position: sticky;
    top: 0;
    z-index: 1001;
`;
const Logo = styled.div`
    font-size: 36px;
    color: white;
    text-transform: uppercase;
    padding-left: 20px;
    @media screen and (max-width:400px) {
        font-size:16px;
    }
`;
const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center; 
    overflow: hidden;
`;
const MenuItem = styled.span`
    text-align: center;
    color: #fff;
    padding:22px;
    text-transform: uppercase;
    font-weight: normal; 
    cursor: pointer; 
    border-right: 1px solid #bbb;
    :last-child {
        border-right:none;
    }
    :hover {
        background-color: #106562;
    }
    @media screen and (min-width:400px) and (max-width:782px){
        border-right: none;
    }
    @media screen and (max-width:400px) {
        font-size:14px;
        border-right:none;
        width: 90px;
        padding:10px;
    }
`;
const DropItem = styled.div`
    border-right: 1px solid #bbb;
    margin: 0;
    padding: 0;
    width: 132px;
    @media screen and (min-width:400px) and (max-width:782px){
        border-right: none;
    }
    @media screen and (max-width:400px) {
        font-size:14px;
        border-right:none;
        width: 90px;
        padding:10px;
    }
`;
const ListItem = styled.li`
`;
const Links = styled.a`
    display: block;
    color: white;
    padding: 30px 12px;
    text-transform: uppercase;
    font-weight: normal; 
    text-decoration: none;
    text-align:center;
    cursor: pointer; 
    :hover {
        background-color: #106562;
        } 
`;
const StyledLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
const Button = styled.button`
    width:132px;
    padding:22px;
    margin:0;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    font-weight: normal; 
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI";
    font-size: 16px;
    cursor: pointer; 
    background-color: #0E8B87;
    border:none;
    outline: none;
    position: relative;
    :hover {
        background-color: #106562;
    }
    @media screen and (max-width:400px) {
        width: 90px;
        padding:10px;
        font-size:14px;
        :after{
            right:15px;
        }
    }
`;
const Ulist = styled.ul`
    width: 120px;
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: absolute;
    background-color: #0E8B87;
    z-index:1;
    display: none;
    ${DropItem}:hover & {
    display: block;
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <Logo>universe</Logo>
            <NavBar>
                <MenuItem >
                    <StyledLink to="/">
                        Главная
                        </StyledLink>
                </MenuItem>
                <DropItem>
                    <Button>
                        Меню <FontAwesomeIcon icon="sort-down" />
                    </Button>
                    <Ulist>
                        <ListItem>
                            <Links>
                                <StyledLink to="/drinks">
                                    Меню пить
                                </StyledLink>
                            </Links>
                        </ListItem>
                        <ListItem>
                            <Links>
                                <StyledLink to="/meal">
                                    Меню есть
                                </StyledLink>
                            </Links>
                        </ListItem>
                    </Ulist>
                </DropItem>
                <MenuItem >
                    <StyledLink to="/media">
                        Галлерея
                    </StyledLink>
                </MenuItem>
                <DropItem >
                    <Button>
                        События <FontAwesomeIcon icon="sort-down" />
                    </Button>
                    <Ulist >
                        <ListItem>
                            <Links>
                                <StyledLink to="/music">
                                    Музыка
                                </StyledLink>
                            </Links>
                        </ListItem>
                        <ListItem>
                            <Links>
                                <StyledLink to="/sport">
                                    Спорт
                                </StyledLink>
                            </Links>
                        </ListItem>
                    </Ulist>
                </DropItem>
                <MenuItem >
                    <StyledLink to="/reservation">
                        Резерв столов
                    </StyledLink>
                </MenuItem>
                <MenuItem >
                    <StyledLink to="/contacts">
                        Контакты
                    </StyledLink>
                </MenuItem>
            </NavBar>
        </StyledHeader>
    )
}

export default Header
