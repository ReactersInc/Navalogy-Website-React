import { LazyLoadImage } from 'react-lazy-load-image-component'
import './member.css'


const Member = ({ name, img, bio, role, socialLinks, className }) => {

    return (
        <div className={className}  >

        
            <div className={`grayScaleImg }`}>
                <LazyLoadImage 
                    src={img} 
                    alt={name} 
                    // effect="blur"
                />

            </div>

            <div className="capsule down">
                <div className="memberLeft">
                    <LazyLoadImage
                        src={img}
                        alt={name}
                        effect="blur"
                    />
                </div>

                <div className="memberRight">
                    <h3 className='name'>{name}</h3>
                    <p className='role'>{role}</p>
                    <p className='bio'>{bio.substring(0, 180)}...</p>
                    <div className="socialLinks">
                        {socialLinks.map((link, index) => {
                            return (
                                <a href={link.url} key={index} target='_blank' rel='noreferrer' className='link' >
                                    <img src={link.icon} alt={link.icon} />
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Member