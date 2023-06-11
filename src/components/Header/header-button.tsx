import { styled } from "styled-components";
import { ButtonIcon } from "./headerIcons/button-icon";
import { useState } from "react";

interface HeaderButtonProps {

}

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
  background: rgba(85, 189, 179, 0.2);
  border-radius: 21px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: var(--second-green);
  cursor: pointer;
`

const ButtonItems = styled.ul`
  position: absolute;
  width: 150px;
  padding: 12px 16px;
  margin: 14px 0;
  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  top: 100%;

  li {
    cursor: pointer;
  }

`


function HeaderButton(props: HeaderButtonProps) {

  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <ButtonContainer>
      <Button onClick={() => handleIsOpen()}>Saiba mais<ButtonIcon/></Button>
      {isOpen && 
        <ButtonItems>
          <li>Contato</li>
          <li>Sobre</li>
        </ButtonItems>
      }
    </ButtonContainer>
  );
};

export default HeaderButton;