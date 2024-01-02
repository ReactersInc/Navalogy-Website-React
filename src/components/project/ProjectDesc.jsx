import './projectDesc.css'

const ProjectDesc = ({ title, desc, img, order }) => {

    // I want different styled applied to the container based on the order of the description
    // every description has a div containing text and description and a div containing image
    
    // different description container has different order of text and image
    // there are total 4 different orders
    // 1. text on the left, image on the right
    // 2. image on the left, text on the right
    // 3. text on the top, image on the bottom
    // 4. image on the top, text on the bottom

    // I want to apply different styles to the container based on the order of the description
    // number of order means number of total description divs
    
    return (
        <div className='descriptions' >
            <div className="desc">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>

            <div className="descImage">
                <img src={img} alt="descImg" />
            </div>
        </div>
    )
}

export default ProjectDesc