import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '@/app/styles/navbar.module.css';
import NavaBar from './NavaBar';

const Header = () => {
    return (
        <div className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href='/'>
                    <Image src='/logo.png' alt='my logo' width={150} height={40}/>
                </Link>
            </div>
            <NavaBar />
        </div>
    );
};

export default Header;