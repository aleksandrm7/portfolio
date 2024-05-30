import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2>Связаться со мной</h2>
            <div className="contact-icons">
                <a href="mailto:219031@edu.fa.ru"><FaEnvelope size={50} /></a>
                <a href="https://linkedin.com"><FaLinkedin size={50} /></a>
                <a href="https://github.com/aleksandrm7"><FaGithub size={50} /></a>
                <a href="https://telegram.org"><FaTelegram size={50} /></a>
            </div>
        </section>
    );
};

export default Contact;
