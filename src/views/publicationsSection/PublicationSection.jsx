import { useState } from 'react'
import { publications } from '../../assets/data'
import { Button, Glare, Publication, Title } from '../../components'
import { IMAGES } from '../../assets'
import './publicationSection.css'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const PublicationSection = () => {

  const [publication, setPublication] = useState(null)
  const maxPublication = 5;

  return (
    <div id='publicationSection'>

      <Title
        title={{ emphasize: 'Recent Publications', remaining: '' }}
        color1='var(--primary)'
        color2='var(--dark)'
        style={{ fontWeight: '500' }}
      />

      <div className="publications">
        {publications.slice(0, maxPublication).map((publication, index) => {
          const {
            icon,
            title,
            subTitle,
            description,
            publicationLink,
            publicationDate,
          } = publication

          return (
            <Publication
              key={index}
              icon={icon}
              publicationTitle={title}
              publicationSubTitle={subTitle}
              publicationDescription={description}
              publicationLink={publicationLink}
              publicationDate={publicationDate}
            />
          )
        })
        }
      </div>

      <Glare type='type1'/>

      <Link 
        to={{ pathname: '/publication', }}
        className="center" >
        <Button
          text="Read More"
        />
      </Link>

      <LazyLoadImage src={IMAGES.wave_3} alt="" style={{ position: 'absolute', top: '100px', display: 'none' }} />


    </div>
  )
}

export default PublicationSection