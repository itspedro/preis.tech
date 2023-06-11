import { styled } from "styled-components";

interface HeaderItemsProps {

}

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

const NavItem = styled.li`
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  list-style: none;
  cursor: pointer;
`


function HeaderItems(props: HeaderItemsProps) {
  return (
    <NavList>
      <NavItem>Blog</NavItem>
      <NavItem>Portfólio</NavItem>
    </NavList>
  );
};

export default HeaderItems;