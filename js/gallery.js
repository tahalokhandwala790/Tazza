const animate = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: '400',
  })
  
  animate.reveal(".banner_section,.product-content,.section-subtitle,.galimg1",{origin: "left"});
  animate.reveal(".section-title,.section-subtitle",{origin: "top"});
  animate.reveal(".galimg2",{origin: "right"});
  animate.reveal(".landing_about_section",{origin: "bottom"});
  animate.reveal(".product-details",{interval: 100});
