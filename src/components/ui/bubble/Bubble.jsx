import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ICONS } from '../../../assets'

const Bubble = (props) => {

  const { style, id } = props

  return (
    <LazyLoadImage
      src={ICONS.bubble}
      alt="bubble"
      id={id}
      style={style} 
    />

  )
}

export default Bubble