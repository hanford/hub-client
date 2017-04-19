import React, { PureComponent } from 'react'
import Link from 'next/link'
import { Head, Item, FabButton } from '../components'
import { get } from 'axios'

const isClientSide = typeof window !== 'undefined'

export default class PackageList extends PureComponent {

  static async getInitialProps () {
    const username = process.env.HUB_USER || ''
    const password = process.env.HUB_PASSWORD || ''

    const reqOpts = isClientSide ? { withCredentials: true } : { auth: { username, password } }
    const { data  } = await get('http://localhost:3000/doorman/packages', reqOpts)

    return {
      packages: data.packages
    }
  }

  render () {
    const { packages } = this.props

    return (
      <div className='container'>
        <Head title='Home' />

        <div className='hero'>
          <h1 className='title'>Doorweb</h1>
          <div className='list'>
            {
              packages
                .map((p, index) => <Item item={p} key={index} />)
            }
          </div>
        </div>

        <FabButton />

        <style jsx>{`
          .container {
            height: 100%;
            width: 100%;
          }

          .hero {
            width: 100%;
            height: 100%;
            color: #333;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
          }

          .title {
            width: 100%;
            padding: 1rem 0;
            line-height: 1.15;
            font-size: 2.8rem;
            text-align: center;
          }

          .list {
            max-width: 100%;
            width: 70rem;
            margin: 2rem auto;
            box-shadow: 0 0 1rem #ccc;
            border-radius: 0.4rem;
            overflow: hidden;
          }
        `}</style>
      </div>
    )
  }
}
