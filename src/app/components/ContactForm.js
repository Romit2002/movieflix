'use client'
import React, { useState } from 'react';
import styles from '@/app/contact/contact.module.css';
import { Mulish } from 'next/font/google'
 
const mulish = Mulish({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})
const ContactForm = () => {

    const [user,setUser] = useState({
        username:'',
        email:'',
        phone:undefined,
        message:''
    });
    const [status,setStatus] = useState(null);
    const handleChange = (event) => {
        const {name,value} = event.target;

        setUser((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method:'POST',
                headers:{'Content_Type':'application/json'},
                body: JSON.stringify({
                    username:user.username,
                    email:user.email,
                    phone:user.phone,
                    message:user.message
                })
            });

            if(response.status===200){
                setUser({
                    username:"",
                    email:"",
                    phone:"",
                    message:""
                });
                setStatus('success');
            }
            else{
                setStatus('error')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor='username' className={styles.label}>
                    User Name
                    <input type='text' name='username' id='username' placeholder='Enter your name' className={mulish.className} value={user.username} autocomplete='off' required onChange={handleChange}/>
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor='email' className={styles.label}>
                    Email
                    <input type='text' name='email' id='email' placeholder='Enter your email' className={mulish.className} value={user.email} autocomplete='off' required onChange={handleChange}/>
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor='phone' className={styles.label}>
                    Phone Number
                    <input type='number' name='phone' id='phone' placeholder='Enter your phone' className={mulish.className} value={user.phone} autocomplete='off' required onChange={handleChange}/>
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor='message' className={styles.label}>
                    Message
                    <textarea type='text' name='message' id='message' placeholder='Enter your message' className={mulish.className} rows={5} value={user.message} autocomplete='off' required onChange={handleChange}/>
                </label>
            </div>

            <div className="">
                {status === 'success' && <p className={styles.success_msg}>Thank You for your Message!</p>}

                {status === 'error' && <p className={styles.error_msg}>There was an error Submitting message!</p>}
                <button type='submit' className={mulish.className}>Send Message</button>
            </div>
        </form>
    );
};

export default ContactForm;