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

import { motion } from 'framer-motion';

const ToolBoxContent = styled.div`
  color: ${props => props.theme.text70};
`

const ToolBoxText = styled(motion.p)`
  font-size: 14px;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const ToolBoxIcons = styled(motion.ul)`
  display: flex;
  align-items: center;
`

const ToolBoxIcon = styled(motion.li)<{color: string}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.text70};
  transition: 0.3s;
  scale: 1;
  width: 30px;
  height: 30px;

  &:hover {
    color: ${props => props.color};
    scale: 1.1;
  };
`

const IconLabel = styled.p`
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

const animation = {
  hide: { x: -10, opacity: 0 },
  show: { x: 0, opacity: 1, },
};

function ToolBox() {
  return(
    <ToolBoxContent>
      <ToolBoxText
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        Stack/Ferramentas atuais:
      </ToolBoxText>
      <ToolBoxIcons
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >
        <ToolBoxIcon variants={animation} color="#007ACC">
          <TypeScriptIcon />
          <IconLabel>Typescript</IconLabel>
        </ToolBoxIcon>
        <ToolBoxIcon variants={animation} color="#00A8E1">
          <DartIcon />
          <IconLabel>Dart</IconLabel>
        </ToolBoxIcon>
        <ToolBoxIcon variants={animation} color="#83CD29">
          <NodejsIcon />
          <IconLabel>NodeJS</IconLabel>
        </ToolBoxIcon>
        <ToolBoxIcon variants={animation} color="#38B2AC">
          <TailWindIcon />
          <IconLabel>TailwindCSS</IconLabel>
        </ToolBoxIcon>
        <ToolBoxIcon variants={animation} color="#61DAFB">
          <ReactIcon />
          <IconLabel>React</IconLabel>
        </ToolBoxIcon>
        <ToolBoxIcon variants={animation} color="#39CEFD">
          <FlutterIcon />
          <IconLabel>Flutter</IconLabel>
        </ToolBoxIcon>
        <ToolBoxIcon variants={animation} color="#F24E1E">
          <FigmaIcon />
          <IconLabel>Figma</IconLabel>
        </ToolBoxIcon>
        <ToolBoxIcon variants={animation} color="#3C99D4">
          <VScodeIcon />
          <IconLabel>VSCode</IconLabel>
        </ToolBoxIcon>
      </ToolBoxIcons>
    </ToolBoxContent>
  );
};

export default ToolBox;