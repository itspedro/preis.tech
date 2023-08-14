import React from 'react';
import { ShakingHandIcon } from '@/components/icons/shaking-hand-icon';
import styled, { keyframes } from 'styled-components';
import ToolBox from './main-toolbox';
import MainButtons from './main-buttons';

const ContentRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
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
  font-size: 39px;
  color: ${props => props.theme.textBold};
  font-family: inherit;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  @media (min-width: 768px) {
    font-size: 50px;
  };
`

const Name = styled.span`
  color: var(--second-green);
`

const Text = styled.p`
  color: ${props => props.theme.text};
  font-size: 15px;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

const balance = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-10deg);
  }
`

const SubTitle = styled.span`
  font-size: 38px;
  color: ${props => props.theme.text70};
  font-family: inherit;
  font-style: thin;
  font-weight: 400;

`

const HandIcon = styled.div`
  display: inline-block;
  animation: ${balance} 1s ease-in-out infinite alternate;
`

function MainContent() {
  return (
    <ContentRoot>
      <Title>
        <SubTitle>
          Olá! <HandIcon><ShakingHandIcon /></HandIcon>
          <br/>
        </SubTitle>
        Sou o <Name>Pedro</Name> Reis,
      </Title>
      <Text>
        Um <strong>desenvolvedor</strong> que adora novos desafios e pensar fora da caixa.
      </Text>
      <ToolBox />
      <MainButtons />
    </ContentRoot>
  )
}

export default MainContent;