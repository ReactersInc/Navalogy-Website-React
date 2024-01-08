import { useLocation } from 'react-router-dom';
import { ICONS, IMAGES } from "../../assets";
import { HeroTitle, Project, ProjectDesc } from "../../components";
import { projects } from '../../assets/data';
import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './poerfolioPage.css'

const PortfolioPage = () => {
    const location = useLocation();
    const [project, setProject] = useState(projects[0]);

    const [projectloaded, setProjectLoaded] = useState(false);


    useEffect(() => {
        setProjectLoaded(true);
        if(location.state?.project)
            setProject(location.state?.project);
    }, []);


    // console.log(location);
    // console.log(project);


    return (
        <div id='portfolioPage'>
            <div id="portfolioHeroTitle">

                <HeroTitle
                    logo={ICONS.star}
                    subtitle="Navigating Computing Frontiers: A Comprehensive Portfolio of Our Varied Ventures."
                    color1="var(--dark)"
                    color2="var(--primary)"
                    title={{
                        emphasize: 'Computing ',
                        remaining: 'Endeavors Showcase.'
                    }}
                />
            </div>

            <div id="projects" className='projectContainer' >

                {projectloaded && <Project setProject={setProject} project={project} page='portfolioPage' />}

                <div id="projectDescriptions">
                    {project.long_description.map((desc, index) => (
                            <div className={`desc desc-${index + 1}`} key = {index}>
                                <h3>{desc.title}</h3>
                                <p>{desc.desc}</p>
                            </div>
                            
                    ))}

                    {project.long_description.map((desc, index) => (
                            <div className={`descImage descImage-${index + 1}`} key = {index}>
                                <LazyLoadImage src={desc.img} alt="desc-image" />
                            </div>
                    ))}
                </div>

                {/* <img src={IMAGES.wave_1} alt="wave-1" className='wave' /> */}

            </div>

            <div id='portfolioGrids'>
                <LazyLoadImage src={IMAGES.grids_large} alt="grid-large" id='grid1' />
                <LazyLoadImage src={IMAGES.grids_large} alt="grid-large" id='grid2' />
                <LazyLoadImage src={IMAGES.grids_large} alt="grid-large" id='grid3' />
                <LazyLoadImage src={IMAGES.grids_large} alt="grid-large" id='grid4' />
            </div>
        </div>
    )
}

export default PortfolioPage