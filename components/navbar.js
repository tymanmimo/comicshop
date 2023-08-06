import React, { useState, useEffect } from 'react'
import LargeNavbar from './large_navbar'
import CompactNavbar from './compact_navbar'
import useMedia from '../functions/useMedia'


const Navbar = () => {
    const isLargeScreen = useMedia('(min-width: 1501px)');
    const [windowWidth, setWindowWidth] = useState(0);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])


    return (
        <>
                {isLargeScreen ? (
                    <><LargeNavbar/></>
                ) : (
                    <><CompactNavbar/></>
                )}
        </>
    )
}

export default Navbar;