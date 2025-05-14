import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#703bf7',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '5px',
        cursor: 'pointer',
        display: isVisible ? 'block' : 'none'
      }}
    >
      <FaArrowUp />
    </button>
  );
};