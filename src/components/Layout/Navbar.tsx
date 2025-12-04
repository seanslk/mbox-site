'use client';

import React, { useState, useEffect } from 'react';
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
                <a href="#hero" className={styles.logo}>
                    MBox
                </a>

                <div className={styles.links}>
                    <a href="#hero" className={styles.link}>首页</a>
                    <a href="#features" className={styles.link}>特性</a>
                    <a href="#gallery" className={styles.link}>图赏</a>
                    <a href="#specs" className={styles.link}>清单</a>
                    <a href="#about" className={styles.link}>关于</a>
                    <a href="#contact" className={styles.link}>社区</a>
                </div>

                <div className={styles.actions}>
                    <Button style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                        立即购买
                    </Button>
                </div>
            </div>
        </nav>
    );
};
