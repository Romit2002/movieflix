import React, { Fragment } from 'react';
import MovieCard from '../components/MovieCard';
import styles from '@/app/styles/common.module.css';
import { resolve } from 'styled-jsx/css';




const page = async () => {

    await new Promise(resolve=>setTimeout(resolve,2000));

    const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.RAPID_KEY,
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
    };

    const response = await fetch(url, options);
    const result = await response.json();
    const main_data = result.titles;
    

    return (
        <Fragment>
            <section className={styles.movieSection}>
            <div className={styles.container}>
                <h1>Series and Movie</h1>
                <div className={styles.card_section}>
                {
                    main_data.map((val,idx)=>{
                        return (
                            <MovieCard key={idx} {...val} />
                            )
                        })
                }
                </div>
            </div>
            </section>
        </Fragment>
    );
};

export default page;