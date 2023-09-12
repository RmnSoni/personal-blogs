"use client"

import { useEffect, useState } from "react";
import { IoArrowUpCircle } from "react-icons/io5";

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      // Add a scroll event listener to check if the user has scrolled down enough to show the button
      function handleScroll() {
        if (window.scrollY > 200) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      // Scroll to the top of the page smoothly
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <button
        className={`text-4xl ${isVisible?"":'hidden'} hover:text-teal-700 dark:hover:text-teal-300`}
        onClick={scrollToTop}
      >
        <IoArrowUpCircle/>
      </button>
    );
  }

  export default ScrollToTopButton;