import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './style.module.scss';
import { CSSTransition } from "react-transition-group";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { keys } from './EmailKeys.js'
import './transition.css';

function Title() {
    //turns into text
    const letters = "Contact Me".split("");

    return (
        <div style={{
            marginBottom: '3%',
        }}>
            <Parallax scaleX={[1, .7]} className={styles.line} />
            <span className={styles.title}>
                {letters.map((letter, i) => (
                    <Parallax
                        key={`ContactTitle-${i}`}
                        translateX={[50 * (i - 4.5), 0]}
                        className={styles.letter}
                    >
                        {letter}
                    </Parallax>
                ))}
            </span>
            <Parallax scaleX={[1, .7]} className={styles.line} />
        </div>
    )
}

const ContactForm = () => {
    const [received, setReceived] = useState(false);

    function Received() {
        return (
            <div>
                <p className={styles.receiveMessage}>Message Received</p>
            </div>
        )
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        if (name.trim().length === 0 || email.trim().length === 0 || message.trim().length === 0) {
            return;
        }

        emailjs.sendForm(keys.serviceID, keys.templateId, form.current, keys.accountID)
            .then((result) => {
                setName('');
                setEmail('');
                setMessage('');
                setReceived(true);
                setTimeout(function () {
                    setReceived(false);
                }, 1000);
            }, () => {
            });
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    //now is it not tracked
    const nameChange = event => {
        setName(event.target.value);
    };
    const emailChange = event => {
        setEmail(event.target.value);
    };
    const messageChange = event => {
        setMessage(event.target.value);
    };

    return (
        <div className={styles.container} id="contactme">
            <ParallaxProvider>
                <CSSTransition in={received} timeout={1500} classNames="receiveContainer" unmountOnExit>
                    <Received />
                </CSSTransition>
                <div>
                    <Title />
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input value={name} type="text" name="user_name" onChange={nameChange} />
                        <label>Email</label>
                        <input value={email} type="email" name="user_email" onChange={emailChange} />
                        <label>Message</label>
                        <textarea value={message} name="message" onChange={messageChange} />
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </ParallaxProvider>
        </div>
    );
};

export default ContactForm;