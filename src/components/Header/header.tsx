'use client';

import { styled } from 'styled-components';
import HeaderItems from './header-items';
import HeaderControl from './header-controls';
import Link from 'next/link';
import useOnScroll from '@/hooks/useOnScroll';
import { addOpacity } from '@/utils/misc';

const TagHeader = styled.div<{ $isScrolling: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px;

  height: 65px;
  width:60%;
  margin: 1% auto;

  box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.05);
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  background-color: ${props => addOpacity(props.theme.secondary, 0.6)};

  ${props => props.$isScrolling ?
  `
    border-radius: 16px;
    background-color: ${addOpacity(props.theme.secondary, 0.8)};
    backdrop-filter: blur(10px);
  ` : ''};

  @media (max-width: 768px) {
    padding: 2% 2%;
  };
`

const HeaderContainer = styled.header`
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

const Logo = styled(Link)`
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

  const isScrolling = useOnScroll(150);
  const left = "<"
  const right = ">"

  return (
    <HeaderContainer>
      <TagHeader $isScrolling={isScrolling}>
        <LeftHeader>
          <Logo href="/">
            {left}<LogoDetail>P</LogoDetail>/{right}
          </Logo>
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