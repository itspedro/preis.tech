import styled from 'styled-components';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ToolsIcons } from './radar-svg';
import { CodeIcon } from '@/components/icons/code-icon';

const Root = styled(motion.div)`
  display: flex;
`

const Card = styled.div`
  height: 600px;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  color: ${props => props.theme.textBold};

  @media (max-width: 962px) {
    display: none;
  };
`

const Letters = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  color: ${props => props.theme.textBold};
  font-size: 0.8rem;
  font-weight: 500;
  word-wrap: break-word;
  opacity: 0;
  transition: opacity 400ms;
  mask-image: radial-gradient(
    calc(600px * 0.8) circle at 50% 50%,
    black 10%,
    transparent 30%
  );
  -webkit-mask-image: radial-gradient(
    calc(600px * 0.8) circle at 50% 50%,
    black 10%,
    transparent 30%
  );
  user-select: none;
  scale: 1.03;
  
  &:hover {
    opacity: 0.4;
  };

  @media (max-width: 768px) {
    display: none;
  };
`

const animation = {
  hide: { x: 32, opacity: 0 },
  show: { x: 0, opacity: 1, },
};


const CustomCode  = styled.div`
  position: absolute;
  width: 30%;
`

function MainCharacters() {

  const [content, setContent] = useState<string>('');

  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const randomChar = () => (
    chars[Math.floor(Math.random() * (chars.length - 1))]
  );

  const randomString = (length: number) => (
    Array.from(Array(length)).map(randomChar).join("")
  );

  const handleOnMove = () => {
    setContent(randomString(1500));
  };

  return (
    <Root
      initial={animation.hide}
      animate={animation.show}
      transition={{ delay: 0.1 }}
    >
      <Card onMouseMove={() => handleOnMove()}>
        <CustomCode>
          <CodeIcon />
        </CustomCode>
        <ToolsIcons />
        <Letters>
          {content}
        </Letters>
      </Card>
    </Root>
  );
};

export default MainCharacters;