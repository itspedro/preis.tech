import React from 'react';
import { styled } from 'styled-components';
import { TypeScriptIcon } from '@/components/icons/typescript-icon';
import { NextIcon } from '@/components/icons/next-icon';
import { TailWindIcon } from '@/components/icons/tailwind-icon';
import { ReactIcon } from '@/components/icons/react-icon';
import { FigmaIcon } from '@/components/icons/figma-icon';


const ToolBoxContent = styled.div`
  color: var(--text-color-light);
`

const ToolBoxText = styled.p`
  font-size: 14px;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
const ToolBoxIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
function ToolBox() {
  return(
    <ToolBoxContent>
      <ToolBoxText>
        Ferramentas atuais:
      </ToolBoxText>
      <ToolBoxIcons>
        <TypeScriptIcon />
        <ReactIcon />
        <TailWindIcon />
        <NextIcon />
        <FigmaIcon />
      </ToolBoxIcons>
    </ToolBoxContent>
  );
};

export default ToolBox;