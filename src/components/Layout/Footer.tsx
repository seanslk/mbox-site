import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <h3>Xiaozhi</h3>
                    <p>Empowering enterprises with intelligent solutions for a smarter future.</p>
                </div>

                <div className={styles.column}>
                    <h4>Product</h4>
                    <ul>
                        <li><Link href="#">Features</Link></li>
                        <li><Link href="#">Solutions</Link></li>
                        <li><Link href="#">Pricing</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h4>Company</h4>
                    <ul>
                        <li><Link href="#">About Us</Link></li>
                        <li><Link href="#">Careers</Link></li>
                        <li><Link href="#">Blog</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h4>Connect</h4>
                    <ul>
                        <li><Link href="#">Twitter</Link></li>
                        <li><Link href="#">LinkedIn</Link></li>
                        <li><Link href="#">Contact</Link></li>
                    </ul>
                </div>
            </div>

            <div className={styles.copyright}>
                © {new Date().getFullYear()} Xiaozhi Inc. All rights reserved.
            </div>
        </footer>
    );
};
