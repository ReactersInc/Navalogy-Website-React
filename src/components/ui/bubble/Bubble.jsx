import { ICONS } from '../../../assets'

const Bubble = (props) => {

    const { style, id } = props

    return (
        <img 
            id = {id}
            src= {ICONS.bubble} 
            alt="bubble" 
            style = {style}
    />
    
  )
}

export default Bubble