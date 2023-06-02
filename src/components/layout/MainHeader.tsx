'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

interface PropsI {
    title?: string;
    isShow: boolean;
}

const MainHeader = (props:PropsI): JSX.Element => {
    const { title, isShow } = props;
    return (
        <>
        { isShow && (
            <Header>
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
            </Header>
        )}
        </>
    )
}

export default MainHeader;


const Header = styled.header`
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