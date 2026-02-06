// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Simple scroll animation effect
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", () => {
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if(rect.top < window.innerHeight - 100){
        sec.style.opacity = 1;
        sec.style.transform = "translateY(0)";
        sec.style.transition = "all 1s ease";
      }
    });
  });
  

