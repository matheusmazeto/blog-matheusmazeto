import Link from 'next/link'

export function Header() {
  return (
    // <header className="border-b border-[#222] px-6 py-8 uppercase shadow-[0px_2px_10px_0px_#000]">
    <header className="px-5 py-7">
      <Link
        href="/"
        className="border border-white px-2 py-[10px] text-sm uppercase text-white"
      >
        MM
      </Link>
      {/* <ul className="inline-flex gap-4 text-base text-[#b5b3b3]">
          <li className="cursor-pointer transition delay-150 hover:text-white">
            <Link href="/about">About</Link>
          </li>
          <li className="cursor-pointer transition delay-150 hover:text-white">
            <Link href="/writing">Writing</Link>
          </li>
        </ul> */}
    </header>
  )
}
