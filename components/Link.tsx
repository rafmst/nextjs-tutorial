import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default ({ href, children }) => {
  const router = useRouter()

  let className = children.props.className || ''
  if (router.pathname === href) {
    className = `${className} bg-gray-900 text-white`
  } else {
    className = `${className} text-gray-300 hover:bg-gray-700 hover:text-white`
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}
