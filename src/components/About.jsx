import React from 'react';
import './About.css';
import authorPhoto from '../../public/author.jpg'; // Adjust the path as needed

const About = () => {
    return (
        <section id="about" className="about">
            <img src={authorPhoto} alt="Author" className="author-photo" />
            <h2>Мясников Александр - студент Финансового университета и сисадмин</h2>
            <p>Блок который было лень заполнять...</p>
        </section>
    );
};

export default About;
