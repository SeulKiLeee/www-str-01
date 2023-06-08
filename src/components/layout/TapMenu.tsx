'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import styles from '@/styles/page.module.css';
import styled from 'styled-components';

interface ITapMenuItem {
    tapName: string;
    tapComponent: React.ReactNode;
}


interface IProps {
    tapMenuList: ITapMenuItem[];
}

const TapMenu = ( props:IProps ): JSX.Element => {
    const { tapMenuList } = props;
    const [ selectedTap, setSelectedTap ] = useState<ITapMenuItem>();


    const onClickTap = ( tapName:string, tapComponent: React.ReactNode) => {
        setSelectedTap({
            tapName,
            tapComponent
        });
    }


    return (
        <>
            <TapMenuWrap>
               {
                tapMenuList.map((item, index) => {
                    return (
                        <TapMenuItem key={index} onClick={() => onClickTap(item.tapName, item.tapComponent)}>
                            <span>{item.tapName}</span>
                        </TapMenuItem>
                    )
                })
               }
            </TapMenuWrap>
            <div className={styles.main}>
                {
                    selectedTap && selectedTap.tapComponent
                }
            </div>
        </>
    )
}

export default TapMenu;


const TapMenuWrap = styled.div`
    position: fixed;
    top: 54px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;


const TapMenuItem = styled.div<{ $isSelected?: boolean}>`
    cursor: pointer;
    flex:1;
    text-align: center;
    border-bottom: 1px solid #0000
        span{
            font-weight: bold;
            font-size: 1.2rem;
        }
`;