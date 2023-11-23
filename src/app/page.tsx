'use client'

import { formatDate } from '@/lib/utils'
import { allBlogs } from 'contentlayer/generated'
import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer.js'
import { title } from 'process'
import { Link, Tag } from 'react-aria-components'

export default function Home() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)

  console.log({ posts })
  return (
    <div className="mx-auto max-w-prose space-y-10 px-4 md:space-y-16">
      <div className="space-y-7">
        <h1 className="text-2xl font-black text-white">matheusmazeto.com</h1>
        <section className="space-y-3 text-sm">
          <p>made in brazil • software engineer • computer scientist</p>
          <p className="text-gray-300">
            algorithms • computer science fundamentals
            <br />
            front-end • browsers • ui • front-end tooling
          </p>
        </section>
      </div>

      <section>
        {/* <h2 className="text-2xl font-black">blog posts</h2> */}
        <ul className="space-y-10">
          {posts.map((post, index) => {
            const hideElementOnFirstOcurrence = index === 0
            return (
              <div key={post.slug} className="space-y-10">
                {hideElementOnFirstOcurrence ? null : (
                  <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-800 to-transparent opacity-25 dark:opacity-100" />
                )}
                <li className="flex flex-col space-y-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-4xl font-black text-blue-600 underline transition-all delay-75 hover:text-[38px]"
                  >
                    {post.title}
                  </Link>
                  <div className="text-sm font-light text-white">
                    <time>{formatDate(post.date)}</time>
                    <p>{post.summary}</p>
                  </div>
                </li>
              </div>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
