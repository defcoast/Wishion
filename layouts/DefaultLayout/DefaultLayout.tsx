import { FC, ReactNode } from 'react';

import styles from '../../styles/layouts/DefaultLayout.module.scss';

interface IProps {
    children: ReactNode;
}

const  DefaultLayout: FC<IProps> = ({ children }) => {
    return (
        <main>
            <div className={styles.DefaultLayout__container}>
                { children }
            </div>
        </main>
    );
};

export default DefaultLayout;
