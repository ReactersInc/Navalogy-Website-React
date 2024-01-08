import { useState, useEffect, useCallback } from 'react';
import { ICONS } from '../../assets';
import { projects } from '../../assets/data';
import { Button, Glare } from '../index';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './project.css';

const Project = ({ setProject, project, page }) => {

    const [selectedButton, setSelectedButton] = useState('All');

    useEffect(() => {
        if (page === 'portfolioPage') {
            setSelectedButton(() => {
                return project.type;
            });
        }
    }, []);

    // Handle button click to filter projects
    const handleButtonClick = useCallback((projectType) => {
        setSelectedButton(projectType);
        showProjects(projectType);
    }, []);


    // Change project when clicking on the next or previous button
    const changeProject = useCallback((direction) => {
        let id = project['id'];

        if (direction === 'prev') {
            id = id === 0 ? Object.keys(projects).length - 1 : id - 1;
        } else {
            id = (id + 1) % Object.keys(projects).length;
        }

        animation(); // Call the animation function
        setProject(projects[id]);
        setSelectedButton(projects[id].type);
    }, [project]);

    // Define the animation function
    const animation = () => {
        const projectImgContainer = document.querySelector('.projectImgContainer');

        projectImgContainer.style.scale = '0';

        setTimeout(() => {
            projectImgContainer.style.scale = '1';
        }, 200);
    }

    // Filter projects based on the selected button
    const showProjects = (type) => {

        if (type === 'All') {
            setProject(projects[0]);
            return;
        }

        const filteredProjects = {};
        Object.keys(projects).forEach(key => {
            projects[key].type === type ? filteredProjects[key] = projects[key] : null;
        });

        const selectedProject = filteredProjects[Object.keys(filteredProjects)[0]];
        setProject(selectedProject);
    };

    // Destructure project data
    const title = project?.title;
    const description = project?.short_description;
    const projectImg = project?.image;

    return (
        <div id='project'>

            <div id="btnContainer">
                <Button
                    text="All"
                    type={selectedButton === 'All' ? 'gradientFilled' : 'primary'}
                    onClick={() => handleButtonClick('All')}
                />
                <Button
                    text="SDN"
                    type={selectedButton === 'SDN' ? 'gradientFilled' : 'primary'}
                    onClick={() => handleButtonClick('SDN')}
                />
                <Button
                    text="Cloud/Fog"
                    type={selectedButton === 'Cloud/Fog' ? 'gradientFilled' : 'primary'}
                    onClick={() => handleButtonClick('Cloud/Fog')}
                />
                <Button
                    text="Hardware"
                    type={selectedButton === 'Hardware' ? 'gradientFilled' : 'primary'}
                    onClick={() => handleButtonClick('Hardware')}
                />
            </div>

            <div id="content">

                <div className="left">

                    <div className="projectDetails">
                        <h2>{title}</h2>
                        <p className='text'>{description}</p>

                        { 
                            page === 'homePage' 
                            &&
                            <Link
                                to={{ pathname: '/portfolio', }}
                                state={{ project: project }}
                                style={{ textDecoration: 'none' }}
                            >
                                <Button text='More Info' />
                            </Link>
                        }

                    </div>

                </div>

                <div className="right">

                    <div className="projectImgContainer">
                        <LazyLoadImage src={projectImg} alt="projectImg" className='projectImg' />
                    </div>
                    <h2>{title}</h2>

                    <Glare
                        style={{
                            top: 0,
                            left: 0,
                            width: 'clamp(20rem, 40vw, 60rem)',
                            height: '70%',
                            transform: 'rotate(-24.784deg)',
                            borderRadius: '80.59419rem',
                            filter: 'blur(40px)',
                            background: 'radial-gradient(62.17% 62.17% at 47.41% 54.69%, #FDD 27.6%, rgba(252, 252, 252, 0.08) 100%)',
                        }}
                    />

                    <div className="controls">
                        <div className='prevBtn control' onClick={() => changeProject('prev')} >
                            <img src={ICONS.chevronUnFilled} alt="" />
                        </div>

                        <div className='nextBtn control' onClick={() => changeProject('next')} >
                            <img src={ICONS.chevronUnFilled} alt="" />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )

}

export default Project