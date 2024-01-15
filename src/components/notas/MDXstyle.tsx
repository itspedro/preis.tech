'use client'
import { MDXProvider } from '@mdx-js/react';
import { useMDXComponents } from '../../../mdx-components';
import useOnScroll from '@/hooks/useOnScroll';
import { MDXContainer } from '../../styles/mdx-component';
import { MDXRemote } from 'next-mdx-remote';

interface MDXstyleProps {
  source: any;
};

const components = useMDXComponents;

function MDXstyle({ source }: MDXstyleProps): JSX.Element {
  const isScrolling = useOnScroll(170);

  return (
    <MDXContainer 
      $isScrolling={isScrolling}
    >
      <MDXRemote {...source} components={components}/>
    </MDXContainer>
  );
};

export default MDXstyle;