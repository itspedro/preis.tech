import type { MDXComponents } from 'mdx/types'
import CustomImage from '@/components/CustomImage';


export function useMDXComponents(components: MDXComponents): MDXComponents {

  return {
    img: ({ src, ...rest }) => (
      <CustomImage
        src={src}
        {...rest}
      />
    ),
    ...components,
  }
}