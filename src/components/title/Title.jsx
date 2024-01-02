import React from 'react'

const Title = ({title, subtitle, color1, color2, id, logo, style}) => {

  const titleStyles = {
    fontSize: 'clamp(1.7rem, 5vw, 3rem)',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '1rem',
    ...style
  }

  const subtitleStyles = {
    fontSize: 'clamp(1rem, 3vw, 1.3rem)',
    textAlign: 'center',
    margin: '2rem 0'
  }

  const emphasizedStyles = {
    color: color1,
  };

  const remainingStyles = {
    color: color2,
  };


  const logoStyles = {
    display: 'block',
    margin: '0 auto 1rem',
    width: 'clamp(3rem, 10vw, 5rem)',
  }




  return (
    <div id={id} >

      { logo && <img src={logo} alt="logo" style={logoStyles}/>  }

      <h1 style={titleStyles}>
        { title.emphasize && <span style={emphasizedStyles}>{title.emphasize}</span> }
        { title.remaining && <span style={remainingStyles}>{title.remaining}</span> }
      </h1>

      { subtitle && <p style={subtitleStyles}>{subtitle}</p> }
      
    </div>
  );

};

export default Title;
