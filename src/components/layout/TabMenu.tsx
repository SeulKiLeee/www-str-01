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


const TapMenu = ( props:IProps ): JSX.Element => {
    const { tabMenuList } = props;
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [ selectedTap, setSelectedTap ] = useState<ITabMenuItem>();

    useEffect(() => {
        setSelectedTap({
            tabTitle: tabMenuList[0].tabTitle,
            tabComponent: tabMenuList[0].tabComponent
        });
    },[]);


    const onClickTap = ( index:number, tabTitle:string, tabComponent: React.ReactNode) => {
        setCurrentIndex(index);
        setSelectedTap({tabTitle, tabComponent});
    }

    return (
        <>
            <TabMenuWrap>
               {
                tabMenuList.map((item, index) => {
                    return (
                        <TabMenuTitle 
                            key={index}
                            onClick={() => onClickTap(index, item.tabTitle, item.tabComponent)}
                            selected={Boolean(currentIndex === index)}
                            >
                            <span>{item.tabTitle}</span>
                        </TabMenuTitle>
                    )
                })
               }
            </TabMenuWrap>
            <TabMenuContent>
                {
                    selectedTap && selectedTap.tabComponent
                }
            </TabMenuContent>
        </>
    )
}

export default TapMenu;


const TabMenuWrap = styled.div`
    position: fixed;
    top: 54px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #eeee;
`;


const TabMenuTitle = styled.div<{selected: boolean}>`
    cursor: pointer;
    flex:1;
    text-align: center;
    padding: 1rem 0;
    border-bottom: ${props => props.selected ? '3px solid black' : '3px solid transparent'};
        span{
            font-size: 1rem;
            color: ${props => props.selected ? '#000' : 'gray'};
            font-weight: ${props => props.selected ? 'bold' : 'normal'};
        }
`;

const TabMenuContent = styled.div`
    padding-top: 80px;
`;