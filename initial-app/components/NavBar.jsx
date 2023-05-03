import React from 'react'
import styles from './NavBar.module.css'
import { ActiveLink } from './ActiveLink'

export const NavBar = () => {
  return (
    <nav className={styles.menu}>
        <ActiveLink text='Home' href='/' />
        <ActiveLink text='About' href='/about' />
        <ActiveLink text='API' href='/api/hello' />
    </nav>
  )
}
