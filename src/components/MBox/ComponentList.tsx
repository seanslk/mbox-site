import React from 'react';
import styles from './ComponentList.module.css';

interface ComponentItem {
    name: string;
    count: number;
}

interface ComponentCategory {
    title: string;
    items: ComponentItem[];
}

interface ComponentListProps {
    categories: ComponentCategory[];
}

export const ComponentList: React.FC<ComponentListProps> = ({ categories }) => {
    return (
        <div className={styles.wrapper}>
            {categories.map((category, index) => (
                <div key={index} className={styles.category}>
                    <h3 className={styles.categoryTitle}>{category.title}</h3>
                    <ul className={styles.list}>
                        {category.items.map((item, idx) => (
                            <li key={idx} className={styles.item}>
                                <span className={styles.name}>{item.name}</span>
                                <span className={styles.count}>x{item.count}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};
