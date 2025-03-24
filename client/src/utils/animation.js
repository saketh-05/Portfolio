import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Initialize GSAP with ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Setup initial animations for the page elements
 */
export const setupInitialAnimations = () => {
  // Create a smooth scrolling effect for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Setup scroll-based animations for elements with the 'island' class
  gsap.utils.toArray('.island').forEach((element, index) => {
    gsap.fromTo(
      element,
      { 
        y: 50, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          once: true,
        }
      }
    );
  });

  // Optimize 3D model rendering by pausing animation when not in viewport
  const optimizeModelRendering = () => {
    const modelContainers = document.querySelectorAll('.model-container');
    
    modelContainers.forEach(container => {
      ScrollTrigger.create({
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        onEnter: () => {
          // When the model enters the viewport, make sure it's rendering
          if (container.querySelector('canvas')) {
            container.querySelector('canvas').style.visibility = 'visible';
          }
        },
        onLeave: () => {
          // When the model leaves the viewport, hide it to save resources
          if (container.querySelector('canvas')) {
            container.querySelector('canvas').style.visibility = 'hidden';
          }
        },
        onEnterBack: () => {
          if (container.querySelector('canvas')) {
            container.querySelector('canvas').style.visibility = 'visible';
          }
        },
        onLeaveBack: () => {
          if (container.querySelector('canvas')) {
            container.querySelector('canvas').style.visibility = 'hidden';
          }
        }
      });
    });
  };

  // Run the optimization after a delay to ensure 3D models are loaded
  setTimeout(optimizeModelRendering, 2000);
};

/**
 * Add parallax effect to an element
 * @param {HTMLElement} element - The element to apply parallax to
 * @param {number} speed - The speed of parallax (higher = more movement)
 */
export const addParallaxEffect = (element, speed = 0.5) => {
  if (!element) return;
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    element.style.transform = `translateY(${scrollPosition * speed}px)`;
  });
};

/**
 * Create a staggered animation for child elements
 * @param {string} parentSelector - The selector for the parent element
 * @param {string} childrenSelector - The selector for the children elements
 * @param {Object} animationProps - GSAP animation properties
 */
export const createStaggeredAnimation = (parentSelector, childrenSelector, animationProps = {}) => {
  const parent = document.querySelector(parentSelector);
  if (!parent) return;
  
  const children = parent.querySelectorAll(childrenSelector);
  
  gsap.from(children, {
    y: 50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: parent,
      start: 'top 70%',
      once: true
    },
    ...animationProps
  });
};
