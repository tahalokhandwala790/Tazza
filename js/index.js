const animate = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: '400',
  })
  
  animate.reveal(".about-content,.banner_content,.galimg1",{origin: "left"});
  animate.reveal(".section-title",{origin: "top"});
  animate.reveal(".galimg2",{origin: "right"});
  animate.reveal(".landing_about_section",{origin: "bottom"});
  animate.reveal(".features-box,.product-card,.carousel-inner",{interval: 100});
