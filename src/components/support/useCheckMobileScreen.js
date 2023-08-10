import {useEffect, useState} from "react";

export const useCheckMobileScreen = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    const handleWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    } 

    useEffect(() => {
      window.addEventListener('resize', handleWindowWidth);
      return () => {
        window.removeEventListener('resize', handleWindowWidth);
      }
    }, [])

    if (windowWidth >= 768) {
      return false;
    } else {
      return true;
    }
}