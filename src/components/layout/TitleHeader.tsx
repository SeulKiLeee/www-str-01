'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

interface IProps {
    title?: string;
    isShow: boolean;
    showBackButton: boolean;
    rightButtonAction?: React.ReactNode;
}

const TitleHeader = (props:IProps): JSX.Element => {
    const { title, isShow, showBackButton, rightButtonAction } = props;
    const router = useRouter();


    const onClickBackButton = () => {
        router.back();
    }


    return (
        <>
        { isShow && (
            <Header>
                <TitleHeaderWrap>
                    { showBackButton && (
                        <BackButtonWrap onClick={() => onClickBackButton()}>
                            <Image
                                src='https://www.lotte-cazzle.com/statics/images/ic_appbar_back.svg'
                                alt='back button'
                                width={36}
                                height={36}
                            />
                        </BackButtonWrap>
                    )}
                    <CenterTitle>
                        { title && ( <span>{ title }</span>) }
                    </CenterTitle>
                    <RightActionBt>
                        { rightButtonAction && rightButtonAction }
                    </RightActionBt>
                </TitleHeaderWrap>
            </Header>
        )}
        </>
    )
}

export default TitleHeader;


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