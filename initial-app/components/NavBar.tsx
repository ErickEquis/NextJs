import React from 'react'
import styles from './NavBar.module.css'
import { ActiveLink } from './ActiveLink'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: 'pricing/pricing'
  },
  {
      text: 'API',
      href: 'api/hello'
  }
];

export const NavBar = () => {
  return (
    <nav className={styles.menu}>
      
      {
        menuItems.map( ({ text, href }) => (
          <ActiveLink text={text} href={href} />
          )
        )
      }
    </nav>
  )
}
