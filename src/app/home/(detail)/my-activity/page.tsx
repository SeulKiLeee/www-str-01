import TitleHeader from '@/components/layout/TitleHeader';
import styles from '@/styles/page.module.css';

const MyTodayActivitiesPage = ():JSX.Element => {
    return (
        <>
            <TitleHeader
                isShow={true}
                showBackButton={true}
                title='총 활동 칼로리'
             />
            <div className={styles.main}>
                <h1>My Today Activities Page</h1>
            </div>
        </>
    )
}

export default MyTodayActivitiesPage;