'use client';

import TotalActiveCalories from '@/components/elements/home/detail/TotalActiveCalories';
import Layout from '@/components/layout/Layout';
import TapMenu from '@/components/layout/TabMenu';


const MyTodayActivitiesPage = ():JSX.Element => {

    const tabMenuList = [
        {
            tabTitle: '전체 활동',
            tabComponent: <TotalActiveCalories/>
        },
        {
            tabTitle: '걷기',
            tabComponent: <div>걷기</div>
        }
    ];


    return (
        <>
            <Layout 
                title="총 활동 칼로리"
                canGoBack={true} 
                hasTabBar={false}
            >
                <TapMenu tabMenuList={tabMenuList}/>
            </Layout>
        </>
    )
}

export default MyTodayActivitiesPage;