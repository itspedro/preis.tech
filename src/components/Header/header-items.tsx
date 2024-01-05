import Link from 'next/link';
import { styled } from 'styled-components';

const NavList = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:not(:hover)>a {
    opacity: 1;
    scale: 1;
  };

  @media (max-width: 768px) {
    gap: 10px;
  };
`

const NavItem = styled(Link)`
  font-family: inherit;
  font-weight: 500 !important;
  font-size: 14px !important;
  line-height: 18px !important;
  list-style: none;
  cursor: pointer;
  color: ${props => props.theme.primary};

  &:not(:hover) {
    opacity: 0.6;
  };
`

function HeaderItems() {
  return (
    <NavList>
      <NavItem href="/notas">
        Anotações
      </NavItem>
      <NavItem href="/#projetos">
        Projetos
      </NavItem>
    </NavList>
  );
};

export default HeaderItems;