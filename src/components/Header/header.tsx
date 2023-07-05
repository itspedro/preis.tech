'use client';

import { styled } from 'styled-components';
import HeaderItems from './header-items';
import HeaderControl from './header-controls';
import Link from 'next/link';
import useOnScroll from '@/hooks/useOnScroll';

function addOpacity(color: string, opacity: number) {
  const opacityHex = Math.round(opacity * 255).toString(16);
  return `${color}${opacityHex}`;
} 

const TagHeader = styled.div<{ isScrolling: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px;
  margin: 2% 5%;
  height: 65px;

  box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  background-color: ${props => props.theme.secondary};
  ${props => props.isScrolling && `
    background-color: ${addOpacity(props.theme.secondary, 0.8)};
    backdrop-filter: blur(10px);
  `};

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
  color: ${props => props.theme.textBold};

  @media (max-width: 768px) {
    font-size: 16px;
  };
`
  
const LogoDetail = styled.span`
  color: ${props => props.theme.primary};
`


function Header(){

  const isScrolling = useOnScroll(0);

  return (
    <HeaderContainer>
      <TagHeader isScrolling={isScrolling}>
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