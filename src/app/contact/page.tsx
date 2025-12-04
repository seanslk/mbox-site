import React from 'react';
import { Button } from '@/components/Common/Button';

export default function ContactPage() {
    return (
        <main style={{ paddingTop: 'var(--nav-height)', minHeight: '100vh' }}>
            <section className="container" style={{ padding: 'var(--spacing-xl) var(--spacing-sm)', maxWidth: '800px' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)', textAlign: 'center' }}>加入社区</h1>
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-xl)' }}>
                    欢迎加入我们的发布交流群，参与抽奖和共创。
                </p>

                <div className="glass" style={{ padding: 'var(--spacing-lg)', borderRadius: '16px', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-md)' }}>扫描二维码加入微信群</h2>
                    {/* Placeholder for QR Code image */}
                    <div style={{ width: '200px', height: '200px', background: 'white', margin: '0 auto var(--spacing-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black' }}>
                        二维码占位符
                    </div>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        或关注我们的公众号获取最新动态
                    </p>
                </div>
            </section>
        </main>
    );
}
