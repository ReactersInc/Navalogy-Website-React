import { Button, HeroImageContainer, HeroTitle } from '../../components'
import { AboutUsSection, PortfolioSection, PublicationSection } from '../../views'
import { Link } from 'react-router-dom'

const HomePage = () => {

  return (
    <>

      <div id='homeHeroTitle'>
        <HeroTitle
          color1="var(--primary)"
          color2="var(--dark)"
          subtitle="We design and develop websites and apps that people love to use."
          title={{
            emphasize: 'Empowering tomorrow, ',
            remaining: 'Innovating today Pioneering the Future of Connectivity'
          }}
        />

          <a href="#portfolioSection" className="center">
            <Button text="Dive Deeper" />
          </a>

        {/* <Link to = "#portfolioSection" className="center" > */}
        {/* </Link> */}


      </div>

      <HeroImageContainer />
      <AboutUsSection />
      <PublicationSection />
      <PortfolioSection/>

    </>
  )
}

export default HomePage