'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

interface ITapMenuItem {
    tapName: string;
    tapLink: string;
    tapComponent: React.ReactNode;
}


interface IProps {
    tapMenuList: ITapMenuItem[];
}

const TapMenu = ( props:IProps ): JSX.Element => {
    const { tapMenuList } = props;
    const router = useRouter();


    const onClickBackButton = () => {
        router.back();
    }


    return (
        <>
            <TapMenuWrap>
                <CenterTitle>
                </CenterTitle>
                <RightActionBt>
                </RightActionBt>
            </TapMenuWrap>
        </>
    )
}

export default TapMenu;


const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 50;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const TapMenuWrap = styled.div`
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
        font-weight: bold;
        font-size: 1.2rem;
    }
`;

const RightActionBt = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    cursor: pointer;
`;