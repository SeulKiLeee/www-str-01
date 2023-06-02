import BottomNavigator from '@/components/layout/BottomNavigator';
import MainHeader from '@/components/layout/MainHeader';
import styles from '@/styles/page.module.css'

const HealthPage = ():JSX.Element => {
  return (
    <>
      <MainHeader isShow={true}/>
        <main className={styles.main}>
          <h1>Health Page</h1>
        </main>
      <BottomNavigator isShow={true}/>
    </>
  
  )
}


export default HealthPage;