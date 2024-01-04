import React, { useEffect, useState } from 'react'
import { Footer, Header } from './components'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const cursorDiv = document.getElementById('cursorDiv');
    // console.log(location);
    // console.log('Use Effect Called from Layout');

    const updatePosition = (e) => {
      cursorDiv.style.top = e?.pageY + 'px';
      cursorDiv.style.left = e?.pageX + 'px';
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    document.addEventListener('mousemove', updatePosition);
    window.addEventListener('resize', handleResize);

    // Scroll to top of page on location change
    window.scrollTo(0, 0);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('resize', handleResize);
    };
  }, [location]);

  const cursorDivStyle = {
    position: 'absolute',
    pointerEvents: 'none',
    width: '100px',
    height: '100px',
    filter: 'blur(50px)',
    borderRadius: '50%',
    backgroundColor: 'var(--primary)',
    zIndex: '9999',
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.1s, height 0.1s, transform 0.1s',
  };

  return (
    <>
      {windowWidth >= 780 && <div id="cursorDiv" style={cursorDivStyle}></div>}
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout