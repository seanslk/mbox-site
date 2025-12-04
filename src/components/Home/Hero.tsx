import React from 'react';
import { Button } from '../Common/Button';
import styles from './Hero.module.css';

export const Hero = () => {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.aurora} />
            <div className={styles.grid} />

            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        <span className="gradient-text">MBox</span><br />移动焊接工作台
                    </h1>
                    <p className={styles.subtitle}>
                        移动 | 模块 | 百宝箱<br />
                        别再让工作空间限制你的创意！<br />1秒展开，无限可能。
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

                <div className={styles.visual}>
                    {/* Using the GIF as the main visual for impact */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={`${process.env.NODE_ENV === 'production' ? '/mbox-site' : ''}/images/image3.gif`}
                        alt="MBox Animation"
                    />
                </div>
            </div>
        </section>
    );
};
