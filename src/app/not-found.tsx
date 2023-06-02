import Link from 'next/link';
import styles from '@/styles/page.module.css';

export default function NotFound() {
  return (
    <div className={styles.main}>
      <h2>Not Found</h2>
      <p>못찾겠다 꾀꼬리~</p>
      <p>
        메인으로 돌아가세여~ <Link href="/home">Home</Link>
      </p>
    </div>
  );
}