import styles from '@/styles/page.module.css';
import MainHeader from '@/components/layout/MainHeader';
import BottomNavigator from '@/components/layout/BottomNavigator';

const ShoppingPage = ():JSX.Element => {
  return (
    <>
      <MainHeader
        isShow={true}
      />
       <div className={styles.main}>
        <h1>Shopping Page</h1>
      </div>
      <BottomNavigator isShow={true}/>
    </>
  )
}

export default ShoppingPage;