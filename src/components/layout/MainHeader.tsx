import Image from 'next/image';
import React from 'react';
import styles from '@/styles/layout.module.css';

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
            <header className={styles.mainHeader}>
                <div className={styles.mainHeader__logoWrap}>
                    <Image
                        src='logo_appbar.svg'
                        alt='cazzle logo'
                        width={82}
                        height={16}
                    />
                </div>
                <ul className={styles.mainHeader__btWrapUl}>
                    <li className={styles.mainHeader__btNoti}>
                        <Image
                            src='https://www.lotte-cazzle.com/statics/images/ic_appbar_noti.svg'
                            alt='cazzle logo'
                            width={36}
                            height={36}
                        />
                    </li>
                    <li className={styles.mainHeader__btMenu}>
                        <Image
                            src='https://www.lotte-cazzle.com/statics/images/ic_appbar_side_menu.svg'
                            alt='cazzle logo'
                            width={36}
                            height={36}
                        />
                    </li>
                </ul>
            </header>
        )}
        </>
    )
}

export default MainHeader;