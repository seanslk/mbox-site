import React from 'react';
import { Hero } from '@/components/Home/Hero';
import { Features } from '@/components/Home/Features';
import { ComponentList } from '@/components/MBox/ComponentList';
import { Button } from '@/components/Common/Button';

const structuralComponents = {
  title: '结构部件',
  items: [
    { name: '可折喷砂钣金叠箱体', count: 1 },
    { name: '万用表磁吸支架', count: 1 },
    { name: '吸烟风扇+照明灯磁吸模块', count: 1 },
    { name: '镊子+烙铁头磁吸收纳支架', count: 1 },
    { name: '焊锡丝磁吸支架', count: 1 },
    { name: 'USB线缆收纳磁吸支架', count: 1 },
    { name: 'PCB/线材固定磁吸夹', count: 4 },
    { name: '电烙铁磁吸支架', count: 1 },
    { name: '助焊剂磁吸支架', count: 1 },
  ]
};

const electronicComponents = {
  title: '电子&耗材部件',
  items: [
    { name: '万用表', count: 1 },
    { name: '63% 0.8mm焊锡丝', count: 1 },
    { name: '吸锡带', count: 1 },
    { name: '助焊剂', count: 1 },
    { name: '直尖头防静电镊子', count: 1 },
    { name: '弯尖头防静电镊子', count: 1 },
    { name: '螺丝刀', count: 1 },
    { name: '过滤棉', count: 1 },
    { name: '烙铁清洁海绵', count: 1 },
    { name: 'usb线', count: 1 },
  ]
};

export default function Home() {
  const getImagePath = (path: string) => {
    return `${process.env.NODE_ENV === 'production' ? '/mbox-site' : ''}${path}`;
  };

  return (
    <main>
      <Hero />

      <div id="features">
        <Features />
      </div>

      <section id="gallery" className="section" style={{ padding: 'var(--spacing-xl) 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-lg)' }}>产品图赏</h2>
          <div className={styles.galleryGrid}>
            {['/images/image4.jpeg', '/images/image6.png', '/images/image7.jpeg', '/images/image8.png'].map((src, idx) => (
              <div key={idx} className={styles.galleryItem}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getImagePath(src)}
                  alt={`Gallery ${idx}`}
                  className={styles.galleryImage}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="specs" className="section" style={{ padding: 'var(--spacing-xl) 0', background: 'var(--bg-card)' }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-lg)', textAlign: 'center' }}>详细清单</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-xl)', maxWidth: '600px', margin: '0 auto var(--spacing-xl)' }}>
            MBox 工具箱默认套件内，包含以下模块，让你开箱即用。
          </p>
          <ComponentList categories={[structuralComponents, electronicComponents]} />

          <div style={{ marginTop: 'var(--spacing-xl)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>无限扩展</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)', maxWidth: '800px', margin: '0 auto var(--spacing-md)' }}>
              得益于磁吸底座，你可以轻松扩展更多工具，如剪线钳、吸锡枪、示波器等。
            </p>
            <Button>查看兼容模块</Button>
          </div>
        </div>
      </section>

      <section id="about" className="section" style={{ padding: 'var(--spacing-xl) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>MBox 的愿景</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: 'var(--spacing-lg)' }}>
                MBox 不仅仅是一个工具箱，它是一场运动。我们相信，每一位工程师都值得拥有一个能激发创意而非限制发挥的工作空间。
              </p>
              <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
                <div className="glass" style={{ padding: 'var(--spacing-md)', borderRadius: '16px' }}>
                  <h3 style={{ marginBottom: 'var(--spacing-xs)', color: 'var(--color-accent)' }}>开源核心</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>我们将开源标准底座和各种工具支架。我们希望你能设计自己的模块，并与全世界分享。</p>
                </div>
                <div className="glass" style={{ padding: 'var(--spacing-md)', borderRadius: '16px' }}>
                  <h3 style={{ marginBottom: 'var(--spacing-xs)', color: 'var(--color-accent)' }}>社区驱动</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>加入我们的创客社区。分享你的设计，赢取每月奖金，并帮助塑造 MBox 的未来。</p>
                </div>
              </div>
            </div>
            <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={getImagePath('/images/image5.jpeg')} alt="Community" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section" style={{ padding: 'var(--spacing-xl) 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>加入社区</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-xl)' }}>
            欢迎加入我们的发布交流群，参与抽奖和共创。
          </p>

          <div className="glass" style={{ padding: 'var(--spacing-lg)', borderRadius: '24px', display: 'inline-block' }}>
            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>扫描二维码加入微信群</h3>
            <div style={{ width: '200px', height: '200px', background: 'white', margin: '0 auto var(--spacing-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black', borderRadius: '12px' }}>
              二维码占位符
            </div>
            <p style={{ color: 'var(--text-secondary)' }}>
              或关注我们的公众号获取最新动态
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
