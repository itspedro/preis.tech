'use client';

import { styled } from 'styled-components';
import HeaderItems from './header-items';
import HeaderControl from './header-controls';
import Link from 'next/link';

const TagHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px;
  margin: 2% 5%;
  height: 65px;

  box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  background-color: ${props => props.theme.background};

  @media (max-width: 768px) {
    margin: 2% 2%;
  };
`

const HeaderContainer = styled.div`
  height: 65px;
  width: 100%;
  position: fixed;
  z-index: 1;
`

const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const RightHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const Logo = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 23px;
  cursor: pointer;
  color: ${props => props.theme.text};

  @media (max-width: 768px) {
    font-size: 16px;
  };
`
  
const LogoDetail = styled.span`
  color: ${props => props.theme.primary};
`

function Header(){

  return (
    <HeaderContainer>
      <TagHeader>
        <LeftHeader>
          <Link href="/">
            <Logo>preis<LogoDetail>tech</LogoDetail></Logo>
          </Link>
        </LeftHeader>
          <HeaderItems />
        <RightHeader>
          <HeaderControl />
        </RightHeader>
      </TagHeader>
    </HeaderContainer>
  );
};

export default Header;