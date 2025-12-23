import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'

export function useMDXComponents(
  components: MDXComponents
): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mt-10 mb-6 text-4xl font-bold tracking-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-8 mb-4 text-3xl font-semibold tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 mb-3 text-2xl font-semibold">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="my-5 leading-8 text-gray-700 dark:text-gray-300">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="my-6 list-disc pl-6 space-y-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="my-6 list-decimal pl-6 space-y-2">
        {children}
      </ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-300">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="rounded bg-gray-100 dark:bg-gray-800 px-1 py-0.5 text-sm">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="my-6 rounded-lg bg-gray-900 p-4 overflow-x-auto">
        {children}
      </pre>
    ),
    img: (props) => (
      <Image
        {...props}
        alt={props.alt || ''}
        width={800}
        height={400}
        className="rounded-lg my-8"
      />
    ),
    ...components,
  }
}
