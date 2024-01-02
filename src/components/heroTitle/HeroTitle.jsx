import { IMAGES } from '../../assets'
import Title from '../title/Title'


import './heroTitle.css'

const HeroTitle = ({ logo, color1, color2, subtitle, title }) => {

    return (
        <div id='heroTitleContainer'>
            <Title
                id="title"
                logo={logo}
                subtitle={subtitle}
                color1={color1}
                color2={color2}
                title={title}
            />

            <div className="grids">
                <img src={IMAGES.grids_large} alt="grid-large" className="grid grid1" />
                <img src={IMAGES.grids_large} alt="grid-large" className="grid grid2" />
                <img src={IMAGES.grids_large} alt="grid-large" className="grid grid3" />
                <img src={IMAGES.grids_large} alt="grid-large" className="grid grid4" />
            </div>
        </div>
    )
}

export default HeroTitle