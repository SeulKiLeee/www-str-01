'use client';

import Layout from '@/components/layout/Layout';
import TapMenu from '@/components/layout/TabMenu';
import TitleHeader from '@/components/layout/TitleHeader';


const MyTodayActivitiesPage = ():JSX.Element => {

    const tabMenuList = [
        {
            tabTitle: '전체 활동',
            tabComponent: <div>활동</div>
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