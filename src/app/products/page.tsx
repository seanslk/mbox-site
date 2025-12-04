import React from 'react';
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

export default function ProductsPage() {
    return (
        <main style={{ paddingTop: 'var(--nav-height)', minHeight: '100vh' }}>
            <section className="container" style={{ padding: 'var(--spacing-xl) var(--spacing-sm)' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)', textAlign: 'center' }}>MBox 包含什么？</h1>
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-xl)', maxWidth: '600px', margin: '0 auto var(--spacing-xl)' }}>
                    MBox 工具箱默认套件内，包含以下模块，让你开箱即用。
                </p>

                <ComponentList categories={[structuralComponents, electronicComponents]} />

                <div style={{ marginTop: 'var(--spacing-xl)', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-md)' }}>无限扩展</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)', maxWidth: '800px', margin: '0 auto var(--spacing-md)' }}>
                        得益于磁吸底座，你可以轻松扩展更多工具，如剪线钳、吸锡枪、示波器等。
                    </p>
                    <Button>查看兼容模块</Button>
                </div>
            </section>
        </main>
    );
}
