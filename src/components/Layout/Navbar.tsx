'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '../Common/Button';
import styles from './Navbar.module.css';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Xiaozhi
                </Link>

                <div className={styles.links}>
                    <Link href="/" className={styles.link}>首页</Link>
                    <Link href="/products" className={styles.link}>产品清单</Link>
                    <Link href="/about" className={styles.link}>关于我们</Link>
                    <Link href="/contact" className={styles.link}>加入社区</Link>
                </div>

                <div className={styles.actions}>
                    <Button variant="secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                        登录
                    </Button>
                    <Button style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                        立即购买
                    </Button>
                </div>
            </div>
        </nav>
    );
};
