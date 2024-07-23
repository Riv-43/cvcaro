// Timeline Animation (using 'load' event)
window.addEventListener('load', () => {
    const containers = document.querySelectorAll('.container');
  
    function showTimelineElements() {
      containers.forEach((container, index) => {
        setTimeout(() => {
          container.classList.add('show');
          container.style.animation = `fadeInUp 0.5s ease-in-out forwards ${index * 0.2}s`;
        }, index * 200);
      });
    }
  
    showTimelineElements();
  });
  