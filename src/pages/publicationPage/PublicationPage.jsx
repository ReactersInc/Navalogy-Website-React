import React, { useEffect, useState } from 'react'
import { publications } from '../../assets/data'
import { Button, HeroTitle, Publication } from '../../components'
import { ICONS } from '../../assets'

import './publicationsPage.css'


const PublicationPage = () => {

  const [year, setYear] = useState('All')
  const [currentPublications, setCurrentPublications] = useState(publications)



  const handleButtonClick = (year) => {

    if (year === 'All') {
      setCurrentPublications(publications)
      setYear('All')
      return
    }

    setYear(year)
    let newPublications = []

    publications.forEach((publication) => {
      const publicationYear = publication.publicationDate.split("/")[0]
      if (publicationYear === year) {
        newPublications.push(publication)
      }
    })

    setCurrentPublications(newPublications)
  }


  return (
    <div id='publicationsContainer'>

      <div id="portfolioHeroTitle">

        <HeroTitle
          logo={ICONS.star}
          subtitle="Publishing in esteemed conferences and reputable journals."
          color1="var(--dark)"
          color2="var(--primary)"
          title={{
            emphasize: 'Current Insights from ',
            remaining: `Navalogy Club's Research Hub`
          }}
        />
      </div>


      <div id="publicationpageContent">
        <div className="btnSelectionContainer yearContainer">

          <Button
            text="All"
            type={year === 'All' ? 'gradientFilled' : 'primary'}
            onClick={() => handleButtonClick('All')}
          />
          <Button
            text="2023"
            type={year === '2023' ? 'gradientFilled' : 'primary'}
            onClick={() => handleButtonClick('2023')}
          />
          <Button
            text="2022"
            type={year === '2022' ? 'gradientFilled' : 'primary'}
            onClick={() => handleButtonClick('2022')}
          />

          <Button
            text="2021"
            type={year === '2021' ? 'gradientFilled' : 'primary'}
            onClick={() => handleButtonClick('2021')}
          />

        </div>

        <div className="publications">
          {currentPublications.map((publication, index) => {
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
      </div>

    </div>
  )
}

export default PublicationPage