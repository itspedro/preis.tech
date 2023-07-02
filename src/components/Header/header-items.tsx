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

const NavItem = styled.a`
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  list-style: none;
  cursor: pointer;
  color: var(--text-color);

  &:not(:hover) {
    opacity: 0.6;
  };
  &:hover {
    scale: 1.1;
  };

`

function HeaderItems() {
  return (
    <NavList>
      <Link href="/">
        <NavItem>Blog</NavItem>
      </Link>
      <Link href="https:/github.com/itsPedro?tab=repositories">
        <NavItem>Projetos</NavItem>
      </Link>
    </NavList>
  );
};

export default HeaderItems;