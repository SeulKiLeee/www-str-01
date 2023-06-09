'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from '@/styles/page.module.css';
import styled from 'styled-components';
import { useTabMenuStore } from '@/stores/layout';

interface ITabMenuItem {
    tabTitle: string;
    tabComponent: React.ReactNode;
}


interface IProps {
    tabMenuList: ITabMenuItem[];
}


const TabMenuWithStore = ( props:IProps ): JSX.Element => {
    const { tabMenuList } = props;
    const {currentIndex, setCurrentIndex, tabInfo, setTabInfo, initTabInfo} = useTabMenuStore((state) => state);


    useEffect(() => {
        console.log(currentIndex);
        console.log(tabInfo);
    }, [currentIndex]);


    const onClickTap = ( currentIndex:number, title:string, component: React.ReactNode) => {
        setCurrentIndex(currentIndex);
        setTabInfo(title, component);
    }

    return (
        <>
            <TabMenuWrap>
               {
                tabMenuList.map((item, index) => {
                    return (
                        <TabMenuItem key={index} onClick={() => onClickTap(index, item.tabTitle, item.tabComponent)}>
                            <span>{item.tabTitle}</span>
                        </TabMenuItem>
                    )
                })
               }
            </TabMenuWrap>
            <div className={styles.main}>
                {
                    tabInfo.title && tabInfo.component
                }
            </div>
        </>
    )
}

export default TabMenuWithStore;


const TabMenuWrap = styled.div`
    position: fixed;
    top: 54px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;


const TabMenuItem = styled.div<{ $isSelected?: boolean}>`
    cursor: pointer;
    flex:1;
    text-align: center;
    border-bottom: 1px solid #0000
        span{
            font-weight: bold;
            font-size: 1.2rem;
        }
`;