"use client"

import { styled } from "styled-components";
import HeaderItems from "./header-items";
import HeaderButton from "./header-button";
import HeaderControl from "./header-controls";

interface HeaderProps {

};

const TagHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px;
  margin: 30px 110px;
  height: 65px;

  box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  background-color: #FFFFFF;
`

const HeaderContainer = styled.div`
  height: 175px;
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


const Logo = styled.a`
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 23px;
  cursor: pointer;
`
  
const LogoDetail = styled.span`
  color: var(--second-green);
`

function Header(props: HeaderProps) {
  const logoText = '</> preis'
  return (
    <HeaderContainer>
      <TagHeader>
        <LeftHeader>
          <Logo>{logoText}<LogoDetail>tech</LogoDetail></Logo>
          <HeaderItems />
          <HeaderButton />
        </LeftHeader>
        <RightHeader>
          <HeaderControl />
        </RightHeader>
      </TagHeader>
    </HeaderContainer>
  );
};

export default Header;