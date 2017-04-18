import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

export const Head = (props) => (
  <div>
    <NextHead>
      <meta charset="UTF-8" />
      <title>{props.title || ''}</title>
      <meta name="description" content={props.description || defaultDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
      <link rel="apple-touch-icon" href="/static/touch-icon.png" />
      <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
      <link rel="icon" href="/static/favicon.ico" />
      <meta property="og:url" content={props.url || defaultOGURL} />
      <meta property="og:title" content={props.title || ''} />
      <meta property="og:description" content={props.description || defaultDescription} />
      <meta name="twitter:site" content={props.url || defaultOGURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
      <meta property="og:image" content={props.ogImage || defaultOGImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <style dangerouslySetInnerHTML={{__html: `
        html,
        body,
        #__next {
          font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
          height: 100%;
          width: 100%;
          overflow: auto;
          margin: 0;
          padding: 0;
          font-size: 10px;
          color: white;
        }

        * {
          box-sizing: border-box;
        }

        [data-reactroot] {
          font-size: 1.6rem;
          height: 100%;
        }

        @media(max-width: 767px) {
          [data-reactroot] {
            font-size: 1.4rem;
          }
        }
      `}} />
    </NextHead>
  </div>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  description: string,
  ogImage: string
}

export default Head
