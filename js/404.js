const animate = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: '400',
  })
  
  animate.reveal(".section-subtitle,.btn",{origin: "left"});
  animate.reveal(".section-title,.section-subtitle",{origin: "top"});
  animate.reveal("",{origin: "right"});
  animate.reveal(".errimg",{origin: "bottom"});
  animate.reveal("p",{interval: 100});
