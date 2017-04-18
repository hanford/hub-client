import React, { PureComponent } from 'react'
import Link from 'next/link'
import { Head, Button } from '../components'

export default class About extends PureComponent {

  static async getInitialProps() {
    const d = new Date()
    const n = d.getDate()
    const year = d.getFullYear()
    let dates = []

    for (var i = 0; i < 5; i++) {
      dates.push(year + '-' + (d.getMonth() + 1) + '-' + (n + i))
    }

    const times = [6, 8, 10]

    return {
      times,
      dates
    }
  }

  saveDate = ({ target }) => {
    const { value } = target
    console.log('saveDate', value)
  }

  saveTime = ({ target }) => {
    const { value } = target
    console.log('saveTime', value)
  }

  render () {
    const { times, dates } = this.props
    console.log(times, dates)

    return (
      <div className='container'>
        <Head title='About' />

        <div className='hero'>
          <div className='title'>Schedule</div>

          <select onChange={this.saveDate}>
            {
              dates.map((v, index) => <option key={index} value={v}>{v}</option>)
            }
          </select>

          <br />

          <select onChange={this.saveTime}>
            {
              times.map((v, index) => <option key={index} value={v}>{v}</option>)
            }
          </select>

          <br />

          <Button />
        </div>

        <style jsx>{`
          .container {
            height: 100%;
            width: 100%;
          }

          .hero {
            width: 100%;
            color: #333;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }

          .title {
            width: 100%;
            padding: 1rem 0;
            font-weight: 600;
            line-height: 1.15;
            font-size: 2.8rem;
            text-align: center;
          }

          .title, .description {
            text-align: center;
          }

          select {
            font-size: 1.6rem;
            width: 15rem;
          }
        `}</style>
      </div>
    )
  }
}
