import React from 'react';
import styles from './Features.module.css';

const features = [
    {
        title: '1秒极速展开',
        description: '单手即可开合，支撑角度可调。1秒展开，1秒收纳。瞬间搭建你的专属工作台。',
        icon: '⚡',
    },
    {
        title: '磁吸模块化',
        description: '像拼乐高一样自由DIY。十余种工具全部集成，通过磁吸模块自由组合。',
        icon: '🧲',
    },
    {
        title: '开源共创',
        description: '开源标准底座，鼓励设计分享。每月评选优秀设计并提供500-1000元奖金。',
        icon: '🌐',
    },
];

export const Features = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>为什么选择 MBox？</h2>
                    <p className={styles.subtitle}>工程师的移动军火库</p>
                </div>

                {/* Add the GIF to show the folding mechanism */}
                <div style={{ maxWidth: '800px', margin: '0 auto var(--spacing-xl)', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${process.env.NODE_ENV === 'production' ? '/mbox-site' : ''}/images/image3.gif`} alt="MBox Folding Animation" style={{ width: '100%', display: 'block' }} />
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>{feature.icon}</div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardText}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
