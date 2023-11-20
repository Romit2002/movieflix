import React, { Fragment } from 'react';
import styles from '@/app/styles/common.module.css'
import Image from 'next/image';
import Link from 'next/link';
const MovieCard = (val) => {
    const {id,type,title,synopsis,backgroundImage} = val.jawSummary;

    return (
        <Fragment>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image src={backgroundImage.url} title={title} width={250} height={200} />
                </div>
                <div className={styles.card_data}>
                    <h2>{title}</h2>
                    <p>{`${synopsis.substring(0,66)} ...`}</p>

                    <Link href={`/movie/${id}`}>
                        <button>
                            Read More
                        </button>
                    </Link>
                </div>
            </div>
        </Fragment>
    );
};

export default MovieCard;