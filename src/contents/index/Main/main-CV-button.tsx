import { styled } from 'styled-components';
import { ButtonIcon } from '@/components/Header/headerIcons/button-icon';
import Link from 'next/link';

const ButtonContainer = styled.div`
  display: flex;
  position: relative;
`

const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  padding: 12px 16px;
  background: rgba(85, 189, 179, 0.1);
  border-radius: 21px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: var(--second-green);
  cursor: pointer;
  text-decoration: none;

  &:hover {
    box-shadow: 5px 5px 10px rgba(85, 189, 179, 0.2);
    scale: 1.05;
  };
  &:active {
    scale: 0.96;
    border: none;
  };
`

function CurriculoButton() {

  return (
    <ButtonContainer>
      <Link href="https://cutt.ly/HwukbJnT">
          <Button>Currículo<ButtonIcon/></Button>
      </Link>
    </ButtonContainer>
  );
};

export default CurriculoButton;