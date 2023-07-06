import React from 'react';
import { styled } from 'styled-components';
//import only once the icons that you will use

import { TypeScriptIcon } from '@/components/icons/typescript-icon';
import { VScodeIcon } from '@/components/icons/vscode-icon';
import { TailWindIcon } from '@/components/icons/tailwind-icon';
import { ReactIcon } from '@/components/icons/react-icon';
import { FigmaIcon } from '@/components/icons/figma-icon';
import { JavaScriptIcon } from '@/components/icons/javascript-icon';
import { NodejsIcon  } from '@/components/icons/nodejs-icon';


const ToolBoxContent = styled.div`
  color: ${props => props.theme.text70};
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

const ToolBoxIcon = styled.div<{color: string}>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.text70};
  transition: 0.3s;
  scale: 1;

  &:hover {
    color: ${props => props.color};
    scale: 1.1;
  };
`


function ToolBox() {
  return(
    <ToolBoxContent>
      <ToolBoxText>
        Stack/Ferramentas atuais:
      </ToolBoxText>
      <ToolBoxIcons>
        <ToolBoxIcon color="#FFCA28">
          <JavaScriptIcon />
        </ToolBoxIcon>
        <ToolBoxIcon color="#007ACC">
          <TypeScriptIcon />
        </ToolBoxIcon>
        <ToolBoxIcon color="#83CD29">
          <NodejsIcon />
        </ToolBoxIcon>
        <ToolBoxIcon color="#61DAFB">
          <ReactIcon />
        </ToolBoxIcon>
        <ToolBoxIcon color="#38B2AC">
          <TailWindIcon />
        </ToolBoxIcon>
        <ToolBoxIcon color="#F24E1E">
          <FigmaIcon />
        </ToolBoxIcon>
        <ToolBoxIcon color="#3C99D4">
          <VScodeIcon />
        </ToolBoxIcon>
      </ToolBoxIcons>
    </ToolBoxContent>
  );
};

export default ToolBox;