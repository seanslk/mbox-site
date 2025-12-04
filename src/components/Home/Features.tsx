import React from 'react';
import styles from './Features.module.css';

const features = [
    {
        title: '1秒极速展开',
        description: '单手即可开合，支撑角度可调。1秒展开，1秒收纳。瞬间搭建你的专属工作台。',
        icon: '⚡',
        image: '/images/image3.gif' // Using the GIF here
    },
    {
        title: '磁吸模块化',
        description: '像拼乐高一样自由DIY。十余种工具全部集成，通过磁吸模块自由组合。无论是万用表、电烙铁还是吸烟风扇，都能随心所欲地布局。',
        icon: '🧲',
        image: '/images/image2.jpeg' // Using image2
    },
    {
        title: '开源共创',
        description: '开源标准底座，鼓励设计分享。每月评选优秀设计并提供500-1000元奖金。加入我们的社区，与全球创客一起重新定义移动焊接。',
        icon: '🌐',
        image: '/images/image5.jpeg' // Using image5
    },
];

export const Features = () => {
    const getImagePath = (path: string) => {
        return `${process.env.NODE_ENV === 'production' ? '/mbox-site' : ''}${path}`;
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>为什么选择 MBox？</h2>
                    <p className={styles.subtitle}>工程师的移动军火库</p>
                </div>

                <div className={styles.list}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.featureRow}>
                            <div className={styles.featureContent}>
                                <span className={styles.icon}>{feature.icon}</span>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureDesc}>{feature.description}</p>
                            </div>
                            <div className={styles.featureImage}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={getImagePath(feature.image)} alt={feature.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
