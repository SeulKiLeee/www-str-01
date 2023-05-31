import Image from 'next/image';
import React from 'react';
import styles from '@/styles/layout.module.css';
import Link from 'next/link';

interface PropsI {
    isShow: boolean;
}

const BottomNavigator = (props:PropsI): JSX.Element => {
    const { isShow } = props;
    return (
        <>
        { isShow && (
            <div className={styles.BottomNavigator}>
                <ul className={styles.BottomNavigator__btWrapUl}>
                    <Link href='/shopping'>
                            <li className={styles.BottomNavigator__Li}>
                                <Image
                                    src='https://www.lotte-cazzle.com/statics/images/ic_appbar_noti.svg'
                                    alt='shopping'
                                    width={36}
                                    height={36}
                                />
                            </li>
                            <li>
                                <span>쇼핑</span>
                            </li>
                    </Link>
                </ul>
                <ul className={styles.BottomNavigator__btWrapUl}>
                    <Link href='/home'>
                            <li className={styles.BottomNavigator__Li}>
                                <Image
                                    src='https://www.lotte-cazzle.com/statics/images/ic_appbar_noti.svg'
                                    alt='shopping'
                                    width={36}
                                    height={36}
                                />
                            </li>
                            <li>
                                <span>홈</span>
                            </li>
                    </Link>
                </ul>
                <ul className={styles.BottomNavigator__btWrapUl}>
                    <Link href='/health'>
                            <li className={styles.BottomNavigator__Li}>
                                <Image
                                    src='https://www.lotte-cazzle.com/statics/images/ic_appbar_noti.svg'
                                    alt='shopping'
                                    width={36}
                                    height={36}
                                />
                            </li>
                            <li>
                                <span>건강</span>
                            </li>
                    </Link>
                </ul>
            </div>
        )}
        </>
    )
}

export default BottomNavigator;