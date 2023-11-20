import { Fragment } from 'react';
import ContactPage from '../components/ContactPage';
import styles from './contact.module.css'
import ContactForm from '../components/ContactForm';
const page = () => {
    return (
        <Fragment>
            <div className={styles.container}>
            <h1>Contact Us</h1>
            <ContactPage />

                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span> from you </span></h2>
                    <ContactForm />
                    
                </section>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.558184172826!2d75.82702147547275!3d25.049063577806564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f873f4fed661b%3A0x3120cfb5f427a045!2sIIIT%20Kota!5e0!3m2!1sen!2sin!4v1700506233870!5m2!1sen!2sin" width={100} height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.mapping}></iframe>
        </Fragment>
    );
};

export default page;