import React from 'react';
import styles from './articleCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface ArticleCardProp {
    article: {
        heading: string,
        contentBody: string,
        img: StaticImageData,
        imgDescription: string
    }
}

export const ArticleCard = ({article}: ArticleCardProp) => {
    return (
        <article className={styles.article}>
            <div className={styles.article__img}>
                <Link href={'/'}>
                    <a>
                        <Image
                            src={article.img}
                            alt={article.imgDescription}
                            objectFit='cover'
                            layout='fill'
                        />
                    </a>
                </Link>
            </div>

            <div className={styles.article__content}>
                <Link href={'/'}>
                    <a className={styles.article__link}>
                        <h2 className={styles.article__heading}>{article.heading}</h2>
                        <div className={styles.article__body}>
                            <p>{article.contentBody}</p>
                        </div>
                    </a>
                </Link>
            </div>
        </article>
    );
};
