import { styled } from 'styled-components';
import { ButtonIcon } from '@/components/icons/button-icon';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ButtonContainer = styled(motion.div)`
  display: flex;
  position: relative;
`

const Button = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  padding: 12px 16px;
  background: transparent;
  border-radius: 21px;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: ${props => props.theme.text};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.textBold};
  };
  &:active {
    scale: 0.96;
    border: none;
  };
`

const animation = {
  hide: { x: -15, opacity: 0 },
  show: { x: 0, opacity: 1, },
};

function CurriculoButton() {

  return (
    <ButtonContainer
      variants={animation}
      transition={{ delay: 0.5 }}
    >
        <Button href="https://to.preis.tech/cv" target="_blank">
          <ButtonIcon/>Currículo
        </Button>
    </ButtonContainer>
  );
};

export default CurriculoButton;