import { Code } from 'bright';

export interface CodeProps {
  children: string;
  language: string;
  title?: string;
};

function CodeComponent(props: CodeProps) {
  return (    
    <Code
      title={props.title}
      lang={props.language}
      lineNumbers={true}
    >
      {props.children}
    </Code>
  );
};

export default CodeComponent;