import { useState, useEffect } from 'react';

/**
 * Custom hook to manage scroll-to-top functionality
 * @returns {Object} scrollToTop function and isVisible state
 */
export function useScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return { scrollToTop, isVisible };
}

/**
 * Custom hook for smooth scrolling to an element
 */
export function useSmoothScroll() {
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return { scrollToSection };
}
