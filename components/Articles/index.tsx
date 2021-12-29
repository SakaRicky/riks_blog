import React from 'react';
import { ArticleCard } from './ArticleCard';
import styles from './articles.module.scss';
import keyboard from "assets/images/keyboard_mug.jpeg";
import laptop from "assets/images/laptop.jpeg";
import womanDev from "assets/images/woman_dev.jpeg";
import Link from 'next/link';
import Image from 'next/image';


export const Articles = () => {
    const articlesData = [
        {
            heading: "Lorem Ipsum dolor 1",
            contentBody: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi cum quae laboriosam adipisci minus voluptas, dolores voluptatum eos perspiciatis, ex nobis. Optio sint, fugit iusto laborum repudiandae ipsam. Nisi, eos.",
            img: keyboard,
            imgDescription: "Laptop on a table, with a code editor opend"
        },
        {
            heading: "Lorem Ipsum dolor 2",
            contentBody: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi cum quae laboriosam adipisci minus voluptas, dolores voluptatum eos perspiciatis, ex nobis. Optio sint, fugit iusto laborum repudiandae ipsam. Nisi, eos.",
            img: laptop,
            imgDescription: "Laptop on a table, with a code editor opend"
        },
        {
            heading: "Lorem Ipsum dolor 3",
            contentBody: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi cum quae laboriosam adipisci minus voluptas, dolores voluptatum eos perspiciatis, ex nobis. Optio sint, fugit iusto laborum repudiandae ipsam. Nisi, eos.",
            img: womanDev,
            imgDescription: "Laptop on a table, with a code editor opend"
        },
        {
            heading: "Lorem Ipsum dolor 4",
            contentBody: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi cum quae laboriosam adipisci minus voluptas, dolores voluptatum eos perspiciatis, ex nobis. Optio sint, fugit iusto laborum repudiandae ipsam. Nisi, eos.",
            img: keyboard,
            imgDescription: "Laptop on a table, with a code editor opend"
        },
        {
            heading: "Lorem Ipsum dolor 5",
            contentBody: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi cum quae laboriosam adipisci minus voluptas, dolores voluptatum eos perspiciatis, ex nobis. Optio sint, fugit iusto laborum repudiandae ipsam. Nisi, eos.",
            img: laptop,
            imgDescription: "Laptop on a table, with a code editor opend"
        },
        {
            heading: "Lorem Ipsum dolor 6",
            contentBody: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi cum quae laboriosam adipisci minus voluptas, dolores voluptatum eos perspiciatis, ex nobis. Optio sint, fugit iusto laborum repudiandae ipsam. Nisi, eos.",
            img: womanDev,
            imgDescription: "Laptop on a table, with a code editor opend"
        }
    ];

    const heroArticle = articlesData[1];

    return (
        <div className={styles.articles}>
            {/** style={{backgroundImage: `url(${heroArticle.img.src})`}}  */}
            <article className={styles.hero__article}>
                <Image src={heroArticle.img} alt={heroArticle.imgDescription}/>
                <Link href={'/'}>
                    <a className={styles.article__link}>
                        <h2 className={styles.article__heading}>{heroArticle.heading}</h2>
                        <div className={styles.article__body}>
                            <p>{heroArticle.contentBody}</p>
                        </div>
                    </a>
                </Link>
            </article>
            {articlesData.map(article => {                
                return <ArticleCard key={article.heading} article={article} />;
            })}
        </div>
    );
};
