import { ChangeEvent, FC, FormEvent, useRef, useState } from 'react';

import styles from '../../styles/WishEditor.module.scss';
import WishData from '../../models/WishData';

interface IProps {
    onCreateWish: (wishData: WishData) => void;
}

const WishEditor: FC<IProps> = ({ onCreateWish }) => {
    /** Нужно ли отображать форму редактора. */
    const [displayForm, setDisplayForm] = useState<boolean>(false);

    /** Нужно ли отображать призыв к действию. */
    const [displayCallToAction, setDisplayCallToAction] = useState<boolean>(true);

    /** Заголовок виша. */
    const [title, setTitle] = useState<string>('');

    /** Описание виша. */
    const [description, setDescription] = useState<string>('');

    /** Элемент: Инпут заголовка. */
    const titleInput = useRef(null);

    /** Обработчик первого клика по редактору. */
    const handleClickCreateWish = (): void => {
        setDisplayForm(true);
        setDisplayCallToAction(false);

        setTimeout(() => {
            if (titleInput.current) {
                (titleInput.current as HTMLElement).focus();
            }
        });
    };

    /** Обработчик изменения заголовка. */
    function handleChangeTitle(event: ChangeEvent<HTMLInputElement>): void {
        setTitle(event.target.value);
    }

    /** Обработчик изменения описания. */
    function handleChangeDescription(event: ChangeEvent<HTMLInputElement>): void {
        setDescription(event.target.value);
    }

    function handleSubmit(event: FormEvent): void {
        event.preventDefault();
        const wishData = { title, description };
        onCreateWish(wishData);

        setTitle('');
        setDescription('');

        setDisplayForm(!displayForm);
        setDisplayCallToAction(!displayCallToAction);
    }

    return (
        <div className={styles.WishEditor}>
            {displayCallToAction &&
                <span
                    className={styles.wishEditor__span}
                    onClick={handleClickCreateWish}
                >
                    Добавьте свой первый виш...
                </span>
            }

            {displayForm &&
            <form
                action="#"
                className={styles.WishEditor__form}
                onSubmit={handleSubmit}
            >
                <input
                    ref={titleInput}
                    className={styles.WishEditor__input}
                    type="text"
                    placeholder="Заголовок"
                    value={title}
                    onChange={handleChangeTitle}
                />

                <input
                    className={styles.WishEditor__input}
                    type="text"
                    placeholder="Описание"
                    value={description}
                    onChange={handleChangeDescription}
                />

                <button
                    style={{ 'display': 'none' }}
                    type="submit"
                />
            </form>
            }
        </div>
    );
};

export default WishEditor;
