import { FC } from 'react';

import styles from '../../styles/WhishList.module.scss';
import WishData from '../../models/WishData';


interface IProps {
    wishList: WishData[];
}

const WishList: FC<IProps> = ({ wishList }) => {
    return (
        <ul className={styles.WishList__list}>

            {wishList && wishList.map((wishItem, index) => (
                <li className={styles.WishList} key={index}>
                    <div className={styles.WishList__title}>
                        {wishItem.title}
                    </div>
                    <div className={styles.WishList__description}>
                        {wishItem.description}
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default WishList;
