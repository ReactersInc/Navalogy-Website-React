import { Project, Title } from '../../components';
import { ICONS, IMAGES } from '../../assets';
import { useState } from 'react';
import { projects } from '../../assets/data';

import './portfolioSection.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const PortfolioSection = () => {

  const [project, setProject] = useState(projects[0]);

  return (
    <div id='portfolioSection'>

      <LazyLoadImage src={IMAGES.wave_2} style={{ objectFit: 'cover' }} />
      <div id='portfolioContainer'>
        <Title
          title={{ emphasize: 'Innovation Showcase', remaining: '' }}
          subtitle='Unveiling Our Journey through Inspired Works.'
          color1='var(--primary)'
          color2='var(--dark)'
          style={{ fontWeight: '500' }}
          logo={ICONS.sun}
        />

        <Project setProject={setProject} project={project} page='homePage' />
      </div>

    </div>

  )
}

export default PortfolioSection