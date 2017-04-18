import Head from './head'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

export const Nav = () => (
  <nav>
    <ul>
      {links.map(
        ({ key, href, label }) => (
          <li key={key}>
            <Link prefetch href={href}>
              <a>{label}</a>
            </Link>
          </li>
        )
      )}
    </ul>

    <style jsx>{`
      nav {
        text-align: center;
      }

      ul {
        display: flex;
        padding: 4px 16px;
        justify-content: space-between;
        margin: 0;
      }

      li {
        display: flex;
        padding: 6px 8px;
      }

      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
)

export default Nav
