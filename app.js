const tl = gsap.timeline( {defaults: {ease: 'power1.out'} } );

tl.to('.hidden-text', {y:'0%', duration: 1});
tl.to('.slider', {y: "-100%", duration: 1.5, delay: 0.5});
tl.to('.animation', {y: "-100%", duration: 1}, "-=1");

tl.fromTo(".header-text", {opacity: 0}, {opacity: 1, duration: 1});

tl.fromTo(".menu-text", {opacity: 0}, {opacity: 1, duration: 1});

tl.fromTo(".about-title", {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo(".about-content", {opacity: 0}, {opacity: 1, duration: 1});

tl.fromTo(".skills-title", {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo(".skills-content", {opacity: 0}, {opacity: 1, duration: 1});