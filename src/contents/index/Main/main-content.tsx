import React from 'react';
import { ShakingHandIcon } from '@/components/icons/shaking-hand-icon';
import styled from 'styled-components';
import ToolBox from './main-toolbox';
import MainButtons from './main-buttons';
import { motion, useAnimationControls } from 'framer-motion';

const ContentRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  gap: 36px;
  margin-left: 10%;
  position: relative;

  @media (min-width: 768px) {
    gap: 48px;
    margin-left: 0;
    width: 400px;
  }
`

const TitleSec = styled.div`
  position: relative;
`

const Title = styled(motion.span)`
  font-size: 40px;
  color: ${props => props.theme.textBold};
  font-family: inherit;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  @media (min-width: 768px) {
    font-size: 50px;
  };
`

const Name = styled.strong`
  color: ${props => props.theme.primary};
`

const Text = styled(motion.p)`
  color: ${props => props.theme.text};
  font-size: 16px;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

const SubTitle = styled(motion.span)`
  font-size: 40px;
  color: ${props => props.theme.text70};
  font-family: inherit;
  font-style: thin;
  font-weight: 400;
  position: absolute;
  top: -50px;
`

const HandIcon = styled(motion.div)`
  display: inline-block;
`

const animation = {
  hide: { x: -32, opacity: 0 },
  show: { x: 0, opacity: 1, },
};

function MainContent() {
  const controls = useAnimationControls();

  React.useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      rotate: 0,
    });
  }, [controls]);

  return (
    <ContentRoot>
      <TitleSec>
        <SubTitle
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.1 }}
        >
          Olá! 
          <HandIcon
            initial={{
              opacity: 0,
              y: 16,
              rotate: 30,
              transformOrigin: 'right center',
            }}
            animate={controls}
            transition={{
              type: 'spring',
              delay: 0.35,
              bounce: 0.7,
              duration: 0.7,
            }}
          >
            <ShakingHandIcon/>
          </HandIcon>
        </SubTitle>
        <Title
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.2 }}
        >
          Sou o <Name>Pedro</Name> Reis,
        </Title>
      </TitleSec>
      <Text
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.3 }}
      >
        Sou um <strong>desenvolvedor</strong> autodidata, tento sempre criar experiências web modernas e fáceis de usar.
      </Text>
      <ToolBox />
      <MainButtons />
    </ContentRoot>
  )
}

export default MainContent;