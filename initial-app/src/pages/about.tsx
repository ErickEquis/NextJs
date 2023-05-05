import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { MainLayouts } from '../../components/layouts/MainLayouts'
import { DarkLayout } from '../../components/layouts/DarkLayout'

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
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
        <Link
          href="/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Home <span>-&gt;</span>
          </h2>
          <p>
            Ir a Home
          </p>
        </Link>
      </div>
    </>
  )
}

// getLayout permite anidar Layouts
AboutPage.getLayout = function getLayout( page: JSX.Element ) {
  return(
    <MainLayouts>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayouts>
  )
}