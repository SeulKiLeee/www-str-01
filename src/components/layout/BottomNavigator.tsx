'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';


const BottomNavigator = (): JSX.Element => {

    return (
        <>
            <Navigator>
                <NavigatorBtWrapUl>
                    <Link href='/shopping'>
                            <NavigatorBtLi>
                                <Image
                                    src='https://www.lotte-cazzle.com/statics/images/ic_appbar_noti.svg'
                                    alt='shopping'
                                    width={36}
                                    height={36}
                                />
                            </NavigatorBtLi>
                            <NavigatorBtLi>
                                <span>쇼핑</span>
                            </NavigatorBtLi>
                    </Link>
                </NavigatorBtWrapUl>
                <NavigatorBtWrapUl>
                    <Link href='/home'>
                            <NavigatorBtLi>
                                <Image
                                    src='https://www.lotte-cazzle.com/statics/images/ic_appbar_noti.svg'
                                    alt='shopping'
                                    width={36}
                                    height={36}
                                />
                            </NavigatorBtLi>
                            <NavigatorBtLi>
                                <span>홈</span>
                            </NavigatorBtLi>
                    </Link>
                </NavigatorBtWrapUl>
                <NavigatorBtWrapUl>
                    <Link href='/health'>
                            <NavigatorBtLi>
                                <Image
                                    src='https://www.lotte-cazzle.com/statics/images/ic_appbar_noti.svg'
                                    alt='shopping'
                                    width={36}
                                    height={36}
                                />
                            </NavigatorBtLi>
                            <NavigatorBtLi>
                                <span>건강</span>
                            </NavigatorBtLi>
                    </Link>
                </NavigatorBtWrapUl>
            </Navigator>
        </>
    )
}

export default BottomNavigator;



const Navigator = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 65px;
    background: #fff;
    z-index: 50;
    transition: background-color .2s;
    padding: 5px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const NavigatorBtWrapUl = styled.ul`
    width: 100%;
    max-width: 33.333333%;
`;

const NavigatorBtLi = styled.li`
    width: 100%;
    text-align: center;
`;