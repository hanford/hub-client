import 'isomorphic-fetch'
import { Component } from 'react'
import Link from 'next/link'
import { Head } from '../components'

export default class About extends Component {
  static async getInitialProps() {
    const repo = 'zeit/next.js'

    return fetch(`http://localhost:3000/api/github/${repo}/authors`, { credentials: 'include' })
      .then(res => res.json())
      .then(shuffle)
      .then(authors => ({ authors }))
      .catch(err => {
        console.error(err)
        return {}
      })
  }

  render() {
    const { authors = [] } = this.props

    return (
      <div>
        <Head title="About" />

        <div className="hero">
          <h1 className="title">Who made Next?</h1>
          <p className="description">All of these lovely people!</p>

          <div className="authors">
            {authors.map(
              author => (
                <div key={`author-gh-${author}`} className="author">
                  <Link href={`https://github.com/${author}`}>
                    <a>
                      <img src={`https://github.com/${author}.png`} />
                      </a>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>

        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title, .description {
            text-align: center;
          }
          .authors {
            display: flex;
            max-width: 80%;
            margin: 0 auto;
            padding: 16px;
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap;
          }
          .author {
            margin: 16px;
            width: 36px;
            height: 36px;
          }
          .author img {
            width: 100%;
            height: 100%;
            background: white;
            border: 2px solid white;
            border-radius: 50px;
            box-shadow: 0 2px 4px rgba(0,0,0,.1);
            transition: transform .2s ease-out;
          }
          .author img:hover {
            transform: translateY(-4px);
          }
          .author img:active {
            transform: translateY(-2px) scale(.95);
          }
        `}</style>
      </div>
    )
  }
}

function shuffle(data) {
  let j, x, i, a = Array.from(data)

  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i)
    x = a[i - 1]
    a[i - 1] = a[j]
    a[j] = x
  }

  return a
}
