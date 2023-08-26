import type { MDXComponents } from 'mdx/types'
import CustomImage from '@/components/CustomImage';
import CustomHr from '@/components/Hr';

export function useMDXComponents(components: MDXComponents): MDXComponents {

  return {
    hr: CustomHr,
    img: ({ src, alt, ...rest }) => (
      <CustomImage
        src={src || ''}
        alt={alt || ''}
        {...rest}
      />
    ),
    ...components,
  }
}