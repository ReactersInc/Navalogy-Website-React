import React from 'react'

const Glare = ( {style} ) => {

    // const gradient1 = 'radial-gradient(62.17% 62.17% at 47.41% 54.69%, #FDD 27.6%, rgba(252, 252, 252, 0.08) 100%)'
    // const gradient2 = 'radial-gradient(circle, rgba(238,174,212,1) 0%, rgba(211,180,219,1) 21%, rgba(148,191,233,1) 100%)'
    
    const glareStyle = {
        position : 'absolute',
        zIndex : '-1',
        ...style,
    }

    return (
        <div style={glareStyle} ></div>
    )
}

export default Glare