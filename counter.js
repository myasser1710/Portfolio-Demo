document.addEventListener('DOMContentLoaded', function() {
  const animationDuration = 2000; 
  const startThreshold = 0.5; 
  
  let isAnimating = false;
  
  function animateCounter(element, target) {
    let current = 0;
    const increment = target / (animationDuration / 16);
    
    if (element.animationFrame) {
      cancelAnimationFrame(element.animationFrame);
    }
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current);
        element.animationFrame = requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
        element.animationFrame = null;
      }
    };
    
    element.textContent = '0'; 
    updateCounter();
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isAnimating) {
        isAnimating = true;
        
        document.querySelectorAll('.counter').forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'));
          animateCounter(counter, target);
        });
        
      } else if (!entry.isIntersecting) {
        isAnimating = false;
      }
    });
  }, { threshold: startThreshold });

  const counterSection = document.getElementById('counterr');
  if (counterSection) {
    observer.observe(counterSection);
  }
});