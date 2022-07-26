import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './style.module.scss';
import { CSSTransition } from "react-transition-group";
import './transition.css';

function Title() {
    return (
        <p className={styles.title}>Contact Me</p>
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
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

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
        <div id="contactme">
            <CSSTransition in={received} timeout={1500} classNames="receiveContainer" unmountOnExit>
                <Received />
            </CSSTransition>
            <div className={styles.container}>
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
        </div>
    );
};

export default ContactForm;