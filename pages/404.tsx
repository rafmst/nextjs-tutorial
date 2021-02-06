import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])

  return (
    <div className="not-found text-center mt-20">
      <h1 className="text-3xl text-gray-800 font-bold">Oops</h1>
      <h2 className="text-xl text-gray-800 font-medium">That page cannot be found</h2>

      <div className="mt-10">
        <Link href="/">
          <a className="bg-indigo-600 text-white font-medium text-sm py-3 px-4 rounded hover:bg-indigo-700">← Home</a>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
