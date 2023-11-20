import Image from "next/image";
import styles from '@/app/styles/common.module.css'
const page = async ({params}) => {
    const id = params.id;
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_KEY,
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const result = await response.json();

    const main_data = result[0].details;
    return (
        <div className={styles.container}>
            <h2 className={styles.movie_title}>   Netflix \ <span> {main_data.type} </span> </h2>
            <div className={styles.card_section}>
                <div>
                    <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300} />
                </div>
                <div>
                    <h1>{main_data.title}</h1>
                    <p>{main_data.synopsis}</p>
                </div>
            </div>
        </div>
    );
};

export default page;