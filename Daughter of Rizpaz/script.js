        // Hamburger menu functionality
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('#nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }

        












// Add form validation
function validateForm(formData) {
  // Implementation needed
}

// Add image lazy loading
const images = document.querySelectorAll('img[data-src]');


















                // Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Main scroll animation function
function initScrollAnimations() {
  // Basic fade-in animations with scrub
  gsap.utils.toArray('.scroll-element').forEach(element => {
    gsap.fromTo(element, 
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1, // Smooth scrubbing
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Left slide animations
  gsap.utils.toArray('.scroll-element-left').forEach(element => {
    gsap.fromTo(element,
      {
        opacity: 0,
        x: -80
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 15%",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Right slide animations
  gsap.utils.toArray('.scroll-element-right').forEach(element => {
    gsap.fromTo(element,
      {
        opacity: 0,
        x: 80
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 15%",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Scale animations
  gsap.utils.toArray('.scroll-element-scale').forEach(element => {
    gsap.fromTo(element,
      {
        opacity: 0,
        scale: 0.8
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Rotate animations
  gsap.utils.toArray('.scroll-element-rotate').forEach(element => {
    gsap.fromTo(element,
      {
        opacity: 0,
        rotation: -10,
        scale: 0.9
      },
      {
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: element,
          start: "top 75%",
          end: "bottom 25%",
          scrub: 1.5,
          toggleActions: "play none none reverse"
        }
      }
    );
  });
}

// Progress-based animations (scrub through entire section)
function initProgressAnimations() {
  // Progress fade in
  gsap.utils.toArray('.progress-fade-in').forEach(element => {
    gsap.fromTo(element,
      {
        opacity: 0
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "top center",
          scrub: true
        }
      }
    );
  });

  // Progress slide up
  gsap.utils.toArray('.progress-slide-up').forEach(element => {
    gsap.fromTo(element,
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "top center",
          scrub: true
        }
      }
    );
  });

  // Progress slide left
  gsap.utils.toArray('.progress-slide-left').forEach(element => {
    gsap.fromTo(element,
      {
        opacity: 0,
        x: -100
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "top center",
          scrub: true
        }
      }
    );
  });

  // Progress slide right
  gsap.utils.toArray('.progress-slide-right').forEach(element => {
    gsap.fromTo(element,
      {
        opacity: 0,
        x: 100
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "top center",
          scrub: true
        }
      }
    );
  });
}

// Parallax scrolling effects
function initParallaxEffects() {
  // Hero section parallax
  gsap.to('.parallax-bg', {
    yPercent: -30,
    ease: "none",
    scrollTrigger: {
      trigger: "main",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });

  // Floating elements
  gsap.utils.toArray('.float-element').forEach(element => {
    gsap.to(element, {
      y: -30,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  });
}

// Sticky section animations
function initStickySections() {
  // About section sticky animation
  gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "top top",
      end: "+=1000",
      scrub: 1,
      pin: true
    }
  })
  .fromTo(".about-text", { opacity: 0, x: -100 }, { opacity: 1, x: 0 })
  .fromTo(".about-image", { opacity: 0, x: 100 }, { opacity: 1, x: 0 }, "-=0.5");
}

// Text reveal animations
function initTextReveals() {
  // Split text for character animations
  gsap.utils.toArray('.text-reveal').forEach(element => {
    const text = element.textContent;
    element.innerHTML = text.split('').map(char => 
      `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');

    gsap.fromTo(element.querySelectorAll('.char'),
      {
        opacity: 0,
        y: 50,
        rotationX: 90
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.5,
        stagger: 0.03,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      }
    );
  });
}

// Number counting animations
function initNumberCounters() {
  gsap.utils.toArray('.count-up').forEach(element => {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = parseFloat(element.getAttribute('data-duration')) || 2;
    
    gsap.fromTo(element,
      {
        textContent: 0
      },
      {
        textContent: target,
        duration: duration,
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      }
    );
  });
}

// Initialize all animations
function initAllAnimations() {
  initScrollAnimations();
  initProgressAnimations();
  initParallaxEffects();
  initStickySections();
  initTextReveals();
  initNumberCounters();
  
  // Refresh ScrollTrigger on resize
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });
}

// Call when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Wait a bit for everything to load
  setTimeout(initAllAnimations, 100);
});
