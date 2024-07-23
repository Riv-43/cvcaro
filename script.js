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
  
  // Skills Hover Effect (using 'DOMContentLoaded' event)
  document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');
  
    skillItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const details = item.querySelector('.skill-details');
        details.style.display = 'block';
  
        // Adjust height for smooth transition
        const height = details.offsetHeight;
        item.style.height = `${item.offsetHeight + height}px`;
      });
  
      item.addEventListener('mouseleave', () => {
        const details = item.querySelector('.skill-details');
        details.style.display = 'none';
        item.style.height = 'auto';
      });
    });
  });
  