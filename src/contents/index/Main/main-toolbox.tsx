import React from 'react';
import { styled } from 'styled-components';

import { TypeScriptIcon } from '@/components/icons/typescript-icon';
import { VScodeIcon } from '@/components/icons/vscode-icon';
import { TailWindIcon } from '@/components/icons/tailwind-icon';
import { ReactIcon } from '@/components/icons/react-icon';
import { FigmaIcon } from '@/components/icons/figma-icon';
import { DartIcon } from '@/components/icons/dart-icon';
import { NodejsIcon  } from '@/components/icons/nodejs-icon';
import { FlutterIcon } from '@/components/icons/flutter-icon';
import { LineIcon } from '@/components/icons/line-icon';


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
`

const ToolBoxIcon = styled.div<{color: string}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.text70};
  transition: 0.3s;
  scale: 1;
  width: 30px !important;
  height: 30px;

  &:hover {
    color: ${props => props.color};
    scale: 1.1;
  };
`

const IconLabel = styled.span`
  position: absolute;
  font-size: 12px;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: none;
  color: ${props => props.theme.text70};
  top: 30px;

  ${ToolBoxIcon}:hover & {
    display : block;
  };

`

function ToolBox() {
  return(
    <ToolBoxContent>
      <ToolBoxText>
        Stack/Ferramentas atuais:
      </ToolBoxText>
      <ToolBoxIcons>
        <ToolBoxIcon color="#007ACC">
          <TypeScriptIcon />
          <IconLabel>Typescript</IconLabel>
        </ToolBoxIcon>
        <ToolBoxIcon color="#00A8E1">
          <DartIcon />
          <IconLabel>Dart</IconLabel>
        </ToolBoxIcon>
        <ToolBoxIcon color="#83CD29">
          <NodejsIcon />
          <IconLabel>NodeJS</IconLabel>
        </ToolBoxIcon>
        <ToolBoxIcon color="#38B2AC">
          <TailWindIcon />
          <IconLabel>TailwindCSS</IconLabel>
        </ToolBoxIcon>
        <ToolBoxIcon color="#61DAFB">
          <ReactIcon />
          <IconLabel>React</IconLabel>
        </ToolBoxIcon>
        <ToolBoxIcon color="#39CEFD">
          <FlutterIcon />
          <IconLabel>Flutter</IconLabel>
        </ToolBoxIcon>
        <LineIcon />
        <ToolBoxIcon color="#F24E1E">
          <FigmaIcon />
          <IconLabel>Figma</IconLabel>
        </ToolBoxIcon>
        <ToolBoxIcon color="#3C99D4">
          <VScodeIcon />
          <IconLabel>VSCode</IconLabel>
        </ToolBoxIcon>
      </ToolBoxIcons>
    </ToolBoxContent>
  );
};

export default ToolBox;