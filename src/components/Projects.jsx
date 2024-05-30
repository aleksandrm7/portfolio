import React from 'react';
import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import { SiSpring } from 'react-icons/si';
import { FaRocket } from 'react-icons/fa'; // добавляем иконку ракеты
import './Projects.css';

const projects = [
    { id: 1, title: 'Курсовая (клиент)', description: 'Description of Project 1', link: 'https://github.com/aleksandrm7/incident-client', icon: <FaReact size="4em" color="#61DBFB" /> },
    { id: 2, title: 'Курсовая (сервер)', description: 'Description of Project 2', link: 'https://github.com/aleksandrm7/incident-api', icon: <SiSpring size="4em" color="#6DB33F" /> },
    { id: 3, title: 'Портфолио', description: 'Description of Project 3', link: 'https://project3.com', icon: <FaReact size="4em" color="#FFD700" /> },
    { id: 4, title: 'Астероиды', description: 'Description of Project 4', link: 'https://github.com/aleksandrm7/prakt3', icon: <FaRocket size="4em" color="#FFFFFF" /> } // иконка ракеты
];

const Projects = () => {
    return (
        <motion.div
            className="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2>Мои проекты</h2>
            <div className="projects-list">
                {projects.map(project => (
                    <motion.div
                        key={project.id}
                        className="project"
                    >
                        <motion.div
                            className="project-icon"
                            animate={project.id === 1 ? { rotate: 360 } : {}}
                            transition={project.id === 1 ? { duration: 20, repeat: Infinity, ease: "linear" } : {}}
                        >
                            {project.icon}
                        </motion.div>
                        <h3>{project.title}</h3>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">Посмотреть</a>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default Projects;
