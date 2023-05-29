import Image from 'next/image'
import styles from '@/styles/page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <h1>CAZZLE</h1>
          <h3>Home Main</h3>
        </div>
      </div>
    </main>
  )
}
