import { FC, useState } from 'react';

import WishData from '../../models/WishData';

import WishEditor from '../../components/WishEditor/WishEditor';
import WishList from '../../components/WishList/WishList';

const WishesPage: FC = () => {

    const [wishList, setWishList] = useState<WishData[]>([]);

    function handleCreateWish(wishData: WishData) {
        setWishList([wishData, ...wishList]);
    }

    return (
        <>
            <WishEditor onCreateWish={handleCreateWish} />
            <WishList wishList={wishList} />
        </>
    );
};

export default WishesPage;
