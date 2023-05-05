import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { MainLayouts } from '../../components/layouts/MainLayouts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <MainLayouts>
        <h1>Home</h1>
          <div className={styles.description}>
            <p>
              Get started by editing&nbsp;
              <code className={styles.code}>src/pages/index.js</code>
            </p>
            <div>
            </div>
          </div>

          <div className={styles.center}>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </div>

          <div className={styles.grid}>
            {/* Permite precargar la pagina de la URL */}
            <Link
              href="/about"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                About <span>-&gt;</span>
              </h2>
              <p>
                Ir a About
              </p>
            </Link>
          </div>
      </MainLayouts>
    
  )
}
