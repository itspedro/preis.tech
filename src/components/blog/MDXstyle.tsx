'use client';

import { MDXProvider } from '@mdx-js/react';
import { useMDXComponents } from '../../../mdx-components';
import useOnScroll from '@/hooks/useOnScroll';
import { MDXContainer } from '../../styles/mdx-component';

interface MDXstyleProps {
  slug: string
};

const components = useMDXComponents;

function MDXstyle({ slug }: MDXstyleProps): JSX.Element {

  const isScrolling = useOnScroll(170);
  const MDXComponent = require(`@/blogs/${slug}.mdx`);

  return (
    <MDXContainer 
      $isScrolling={isScrolling}
    >
      <MDXProvider components={components}>
        <MDXComponent.default />
      </MDXProvider>
    </MDXContainer>
  );
};

export default MDXstyle;