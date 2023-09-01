import Link from 'next/link';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

const ButtonContainer = styled(motion.div)`
  display: flex;
  position: relative;
`

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  font-size: 14px;
  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  width: 145px;
  height: 42px;
  border-radius: 8px;
  background: ${props => props.theme.tertiary};
  cursor: pointer;

  &:hover {	
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  };
`

const animation = {
  hide: { x: -15, opacity: 0 },
  show: { x: 0, opacity: 1, },
};


function TalkButton() {

  return (
    <ButtonContainer
      variants={animation}
      transition={{ delay: 0.4 }}
    >
      <Button href="/contato">
        Entre em contato!
      </Button>
    </ButtonContainer>
  );
};

export default TalkButton;