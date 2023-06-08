'use client';

import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';
import BottomNavigator from '@/components/layout/BottomNavigator';



interface ILayoutProps {
    title?: string;
    mainNavigationBar?: boolean;
    canGoBack?: boolean;
    hasTabBar?: boolean;
    rightButton?: React.ReactNode;
    children: React.ReactNode;
    seoTitle?: string;
}



export default function Layout (props:ILayoutProps):JSX.Element {
    const { title, mainNavigationBar, canGoBack, hasTabBar, rightButton, children, seoTitle } = props;
    const router = useRouter();
    
    const onClickBackButton = () => {
        router.back();
    }

    return (
        <>
          <div>
            <Head>
                <title>{ seoTitle ? seoTitle : 'Cazzle' }</title>
            </Head>
            <Header>
                { mainNavigationBar ? (
                    <>
                        <HeaderLogoWrap>
                            <Image
                                src='logo_appbar.svg'
                                alt='cazzle logo'
                                width={82}
                                height={16}
                            />
                        </HeaderLogoWrap>
                        <HeaderBtWrapUl>
                            <HeaderBtNoti>
                                <Image
                                    src='https://www.lotte-cazzle.com/statics/images/ic_appbar_noti.svg'
                                    alt='cazzle logo'
                                    width={36}
                                    height={36}
                                />
                            </HeaderBtNoti>
                            <HeaderBtMenu>
                                <Image
                                    src='https://www.lotte-cazzle.com/statics/images/ic_appbar_side_menu.svg'
                                    alt='cazzle logo'
                                    width={36}
                                    height={36}
                                />
                            </HeaderBtMenu>
                        </HeaderBtWrapUl>
                    </>
                ) : (
                    <TitleHeaderWrap>
                        {
                            canGoBack ? (
                                <BackButtonWrap onClick={onClickBackButton}>
                                    <Image
                                        src='https://www.lotte-cazzle.com/statics/images/ic_appbar_back.svg'
                                        alt='back button'
                                        width={36}
                                        height={36}
                                    />
                                </BackButtonWrap>
                            ) : null
                        }
                        <CenterTitle>
                            { title && ( <span>{ title }</span>) }
                        </CenterTitle>
                        <RightActionBt>
                            { rightButton ? rightButton : null }
                        </RightActionBt>
                    </TitleHeaderWrap>
                )}
            </Header>
            <ContentBody hasTabBar={hasTabBar}>{children}</ContentBody>
            { hasTabBar ? <BottomNavigator /> : null }
          </div>
        </>
    )
}


const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 50;
    transition: background-color .2s;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
`;


const HeaderLogoWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
`;

const HeaderBtWrapUl = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: right;
    margin: 0 auto;
    padding: 0 1rem;
    overflow: hidden;
    position: absolute;
    right: 0;
    z-index: 1;
`;

const HeaderBtNoti = styled.li`
    cursor: pointer;
`;

const HeaderBtMenu = styled.li`
    margin-left: 10px;
    cursor: pointer;
`;

const TitleHeaderWrap = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;


const BackButtonWrap = styled.div`
    position: absolute;
    left: 0;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const CenterTitle = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    padding: 0 1rem;
    span {
        font-weight: 500;
        font-size: 1.1rem;
    }
`;

const RightActionBt = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    cursor: pointer;
`;

const ContentBody = styled.div<{hasTabBar?: boolean}>`
    padding-top: 1rem;
    padding-bottom: ${props => props.hasTabBar ? '4rem' : '0'};
`;