import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Select elements to animate
    const scrollElements = document.querySelectorAll(
      '.scroll-fade-up, .scroll-fade-left, .scroll-fade-right, .scroll-scale'
    );

    scrollElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimation; 