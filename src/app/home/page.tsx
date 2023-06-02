'use client'
import BottomNavigator from '@/components/layout/BottomNavigator'
import MainHeader from '@/components/layout/MainHeader'
import { useAuthStore } from '@/stores/auth';
import styles from '@/styles/page.module.css'
import MyTodayActivitiesCard from '@/components/elements/home/MyTodayActivitiesCard';

const HomePage = ():JSX.Element => {
  const isLogedIn = useAuthStore((state) => state.isLogedIn);

  return (
    <>
      <MainHeader
        isShow={true}
      />
        <main className={styles.main}>
          {
            isLogedIn ? (
              <div>
                <div>
                  <h1>CAZZLE</h1>
                  <h3>Home Main</h3>
                  <h3>로그인 된 화면입니다.</h3>
                </div>
                  <MyTodayActivitiesCard />
              </div>
            ) : (
              <div>
                <div>
                  <h1>CAZZLE</h1>
                  <h3>Home Main</h3>
                  <h3>비로그인 화면입니다.</h3>
                </div>
              </div>
            )
          }

        </main>
      <BottomNavigator isShow={true}/>
    </>
  )
}


export default HomePage;