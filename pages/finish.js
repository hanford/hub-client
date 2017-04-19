import Link from 'next/link'
import { Head } from '../components'

export default ({ url }) => {
  const hasError = url.query.error === false
  const errMsg = url.query.message

  return (
    <div className='container'>
      <Head />
      <div>{hasError ? errMsg : 'finished'}</div>
      {hasError ? <Link href='/schedule'><a>try again</a></Link> : null}
      <style jsx>{`
        .container {
          display: flex;
          height: 100%;
          justify-content: center;
          align-items: center;
          width: 100%;
          flex-direction: column;
        }
      `}</style>
    </div>
  )
}
