import { allBlogs } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components.js'
import { Image } from '@/components/image'

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))

  const post = allBlogs.find((p) => p.slug === slug) as Blog

  const components = { Image }

  return (
    <MDXLayoutRenderer
      code={post.body.code}
      components={components}
      toc={post.toc}
    />
  )
}
