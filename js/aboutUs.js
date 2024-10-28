const animate = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: '400',
  })
  
  animate.reveal(".about_section",{origin: "left"});
  animate.reveal(".section-title",{origin: "top"});
  animate.reveal(".about-details,.banner_section",{origin: "right"});
  animate.reveal(".landing_about_section",{origin: "bottom"});
  animate.reveal(".features-box,.product-card,.carousel-inner",{interval: 100});