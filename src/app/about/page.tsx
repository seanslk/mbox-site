import React from 'react';

export default function AboutPage() {
    return (
        <main style={{ paddingTop: 'var(--nav-height)', minHeight: '100vh' }}>
            <section className="container" style={{ padding: 'var(--spacing-xl) var(--spacing-sm)' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>MBox 的愿景</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: '1.6' }}>
                    MBox 不仅仅是一个工具箱，它是一场运动。我们相信，每一位工程师都值得拥有一个能激发创意而非限制发挥的工作空间。
                </p>

                <div style={{ marginTop: 'var(--spacing-xl)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-lg)' }}>
                    <div>
                        <h2 style={{ marginBottom: 'var(--spacing-sm)' }}>开源核心</h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            我们将开源标准底座和各种工具支架。我们希望你能设计自己的模块，并与全世界分享。
                        </p>
                    </div>
                    <div>
                        <h2 style={{ marginBottom: 'var(--spacing-sm)' }}>社区驱动</h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            加入我们的创客社区。分享你的设计，赢取每月奖金（500-1000元），并帮助塑造 MBox 的未来。
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
