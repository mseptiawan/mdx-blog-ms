import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'

export function useMDXComponents(
  components: MDXComponents
): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mt-6 mb-3">{children}</h2>
    ),
    p: ({ children }) => (
      <p className="leading-7 my-4">{children}</p>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...props}
      />
    ),
    ...components,
  }
}
