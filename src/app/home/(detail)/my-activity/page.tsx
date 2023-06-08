'use client';

import Layout from '@/components/layout/Layout';
import TapMenu from '@/components/layout/TapMenu';
import TitleHeader from '@/components/layout/TitleHeader';


const MyTodayActivitiesPage = ():JSX.Element => {

    const tapMenuList = [
        {
            tapName: '전체 활동',
            tapComponent: <div>활동</div>
        },
        {
            tapName: '걷기',
            tapComponent: <div>걷기</div>
        }
    ];


    return (
        <>
            <Layout 
                title="나의 오늘 활동"
                canGoBack={true} 
                hasTapBar={false}
            >
                <TapMenu tapMenuList={tapMenuList}/>
            </Layout>
        </>
    )
}

export default MyTodayActivitiesPage;