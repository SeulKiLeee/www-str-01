import BottomNavigator from '@/components/layout/BottomNavigator';
import Layout from '@/components/layout/Layout';
import MainHeader from '@/components/layout/MainHeader';
import styles from '@/styles/page.module.css'

const HealthPage = ():JSX.Element => {
  return (
    <>
      <Layout mainNavigationBar={true} hasTapBar={true}>
            <main className={styles.main}>
              <h1>Health Page</h1>
            </main>
      </Layout>
    </>
  )
}


export default HealthPage;