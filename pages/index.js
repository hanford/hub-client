import React, { PureComponent } from 'react'
import Link from 'next/link'
import { Head, Nav, Item } from '../components'

export default class PackageList extends PureComponent {

  static async getInitialProps () {
    let packages = new Array(16)
      .fill(testItem)

    return {
      packages
    }
  }

  render () {
    const { packages } = this.props

    return (
      <div>
        <Head title='Home' />
        <Nav />

        <div className='hero'>
          <h1 className='title'>Doorman</h1>
          <div className='list'>
            {
              packages
                .map((p, index) => <Item item={p} key={index} />)
            }
          </div>
        </div>

        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }

          .title {
            width: 100%;
            padding: 2rem 0;
            line-height: 1.15;
            font-size: 3.2rem;
            text-align: center;
          }

          .list {
            max-width: 100%;
            width: 70rem;
            margin: 2rem auto;
            box-shadow: 0 0 1rem #ccc;
            border-radius: 0.4rem;
          }
        `}</style>
      </div>
    )
  }
}

let testItem = {
  "id": 310600,
  "description": "Package",
  "state": "scheduled",
  "courier_name": "UPS",
  "sender_description": "Package",
  "delivery_id": 135280,
  "created_by": "fast_logger",
  "package_size": "medium",
  "depot_id": 6,
  "shipping_label_image_url": "https://placehold.it/150x150",
  "depot_arrival_at": 1492467017,
  "alcohol": false,
  "adult_signature": false,
  "courier_logo_url": "https://placehold.it/150x150",
  "perishable": false,
  "delivery_schedule": {
    "id": 202786,
    "deliver_on": "2017-04-18",
    "created_by": "user",
    "deliver_time_begin": 22,
    "deliver_time_end": 23
  }
}
