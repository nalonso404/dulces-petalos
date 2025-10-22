import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='not-found'>
      <p> The page you are looking for does not exist.</p>
      <Link href="/">Back to homepage</Link>
    </div>
  )
}
