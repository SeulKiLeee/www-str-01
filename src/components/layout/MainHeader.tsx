'use client'
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

interface PropsI {
    title?: string;
    isShow: boolean;
    showBackButton: boolean;
}

const MainHeader = (props:PropsI): JSX.Element => {
    const { title, isShow, showBackButton } = props;
    return (
        <>
        { isShow && (
            <Header>
                <Logo>
                    <Image
                        src="logo_appbar.svg"
                        alt="cazzle logo"
                        width={82}
                        height={16}
                    />
                </Logo>
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
    height: 54px;
    background: #fff;
    z-index: 50;
    transition: background-color .2s;
    padding: 10px;
`;

const Logo = styled.div`

`;