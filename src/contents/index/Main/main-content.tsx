import React from 'react';
import { ShakingHandIcon } from '@/components/icons/shaking-hand-icon';
import styled from 'styled-components';
import ToolBox from './main-toolbox';
import MainButtons from './main-buttons';
import { QuoteIcon } from '@/components/icons/quote-icon';

const ContentRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  gap: 36px;
  margin-left: 10%;
  position: relative;

  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
    gap: 48px;
    margin-left: 0;
  }
`

const Title = styled.h1`
  font-size: 40px;
  color: ${props => props.theme.textBold};
  font-family: inherit;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  @media (min-width: 768px) {
    text-align: center;
    font-size: 48px;
  };
`

const Name = styled.span`
  color: var(--second-green);
`

const Text = styled.p`
  color: ${props => props.theme.text};
  font-size: 14px;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const Icon = styled.div`
  position: absolute;
  top: -80px;
  left: -20px;
  @media (min-width: 768px) {
    top: -40px;
  };
`

function MainContent() {
  return (
    <ContentRoot>
      <Icon>
        <QuoteIcon />
      </Icon>
      <Title>
        Olá <ShakingHandIcon /><br/>
        Sou o <Name>Pedro Reis</Name>
      </Title>
      <Text>
        Um desenvolvedor Font-End que adora novos desafios e pensar fora da caixa.
      </Text>
      <ToolBox />
      <MainButtons />
    </ContentRoot>
  )
}

export default MainContent;