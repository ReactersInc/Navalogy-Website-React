import { useEffect, useState } from "react"
import { ICONS, IMAGES } from "../../assets"
import { members } from "../../assets/data"
import { Button, HeroTitle, Member } from "../../components"

import './memberPage.css'

const MemberPage = () => {

    const [selectedMembers, setSelectedMembers] = useState('mentors')
    const [member, setMember] = useState(members[selectedMembers])

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = Object.keys(member).length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, member]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);

    const handleButtonClick = (selectedMembers) => {
        setSelectedMembers(selectedMembers)
        setMember(members[selectedMembers])
    }


    return (
        <div id="memberPage">

            <div id="memberHeroTitle" >
                <HeroTitle
                    logo={ICONS.triangles}
                    color1="var(--dark)"
                    color2="var(--primary)"
                    subtitle="We design and develop websites and apps that people love to use."
                    title={{
                        emphasize: 'Our ',
                        remaining: 'Members'
                    }}
                />
            </div>

            <div className="btnSelectionContainer">

                <Button
                    text="Current Scholars"
                    type={selectedMembers === 'currentScholars' ? 'gradientFilled' : 'primary'}
                    onClick={() => handleButtonClick('currentScholars')}
                />
                <Button
                    text="Founding Members"
                    type={selectedMembers === 'foundingMembers' ? 'gradientFilled' : 'primary'}
                    onClick={() => handleButtonClick('foundingMembers')}
                />

                <Button
                    text="Mentors"
                    type={selectedMembers === 'mentors' ? 'gradientFilled' : 'primary'}
                    onClick={() => handleButtonClick('mentors')}
                />

                <Button
                    text="Current Members"
                    type={selectedMembers === 'currentMembers' ? 'gradientFilled' : 'primary'}
                    onClick={() => handleButtonClick('currentMembers')}
                />
                <Button
                    text="Past Members"
                    type={selectedMembers === 'pastMembers' ? 'gradientFilled' : 'primary'}
                    onClick={() => handleButtonClick('pastMembers')}
                />
            </div>

            <div id="memberPageContent">
                <div id="centerContent">

                    {Object.keys(member).map((person, personIndex) => {

                        const { name, bio, role, socialLinks } = member[personIndex];

                        const img = member[personIndex]?.img || IMAGES.member_1;


                        let position = 'nextSlide';
                        if (personIndex === index) {
                            position = 'activeSlide';
                        }
                        if (
                            personIndex === index - 1 || (index === 0 && personIndex === member.length - 1)
                        ) {
                            position = 'lastSlide';
                        }

                        return (
                            <Member
                                key={personIndex}
                                className={`member ${position}`}
                                name={name}
                                img={img}
                                bio={bio}
                                role={role}
                                socialLinks={socialLinks}
                            />
                        )


                    })}



                    <div id="memberControls">
                        <div id="leftChivron">
                            <img src={ICONS.chevronUnFilled} alt="leftChivron" onClick={() => setIndex(index - 1)} />
                        </div>

                        <div id="rightChivron">
                            <img src={ICONS.chevronUnFilled} alt="rightChivron" onClick={() => setIndex(index + 1)} />
                        </div>
                    </div>


                </div>

                <img className="memberPageContentImage" id="waveImg1" src={IMAGES.wave_3} alt="wave" />
                <img className="memberPageContentImage" id="waveImg2" src={IMAGES.wave_3} alt="wave" />
            </div>

        </div>
    )
}

export default MemberPage