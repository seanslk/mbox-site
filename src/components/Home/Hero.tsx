import React from 'react';
import { Button } from '../Common/Button';
import styles from './Hero.module.css';

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                {/* Use image1.png as the hero background */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${process.env.NODE_ENV === 'production' ? '/mbox-site' : ''}/images/image1.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.6
                }} />
                <div className={styles.overlay} />
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    <span className="gradient-text">MBox</span> 移动焊接工作台
                </h1>
                <p className={styles.subtitle}>
                    移动 | 模块 | 百宝箱<br />
                    别再让工作空间限制你的创意！1秒展开，无限可能。
                </p>
                <div className={styles.actions}>
                    <Button style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                        12月即将发布
                    </Button>
                    <Button variant="secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                        加入交流群
                    </Button>
                </div>
            </div>
        </section >
    );
};
