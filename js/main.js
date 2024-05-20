window.onload = () => {window.scrollTo(0, 0);}
/* section services */
const servicesTitle2 = document.querySelector('.services-title-2');
const servicesCard = document.querySelector('.services-card');
const servicesComparison = document.querySelector('.services-comparison');
const servicesDiv = document.querySelector('.services-div');
const servicesImg2 = document.querySelector('.services-img-2');
const servicesSvg2 = document.querySelector('.services-svg-2');
const viewTextServices = document.querySelector('.view-text-services');
const closeTextServices = document.querySelector('.close-text-services');

function closePlanComparation() {
    if(servicesTitle2.style.display === 'flex') {
        servicesSvg2.style.display = 'block';
        viewTextServices.style.display = 'flex';
        closeTextServices.style.display = 'none';
        servicesImg2.style.display = 'none';
        servicesTitle2.style.display = 'none';
        servicesCard.style.display = 'none';
        servicesComparison.style.display = 'none';
        servicesDiv.style.height = 'calc(1802 / 1080 * 100vh)';
    } else {
        viewTextServices.style.display = 'none';
        servicesSvg2.style.display = 'none';
        closeTextServices.style.display = 'flex';
        servicesImg2.style.display = 'block';
        servicesTitle2.style.display = 'flex';
        servicesCard.style.display = 'flex';
        servicesComparison.style.display = 'block';
        servicesDiv.style.height = 'calc(4150 / 1080 * 100vh)';
    }
}
/* section services end */

/* section case studies */
function caseStudies() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.scroll-case-studies',
            start: '1 0',
            end: 'bottom 0',
            markers: true,
            pin: true,
            scrub: true,
        }
    });

    tl.to('.case-studies-div, .case-studies-text-wrapper', {
        y: -500, 
        duration: 1, 
        ease: "expoScale(0.5,7,none)"
    });

    tl.set('.case-studies-bar-case-studies', {y: '100vh', opacity: 0, duration: 0}, '-=1');

    tl.to('.case-studies-bar-case-studies', {
        opacity: 1,
        y: 0, 
        duration: 1, 
        ease: "expoScale(0.5,7,none)",
        display: 'block'
    }, '-=1');

    tl.to('.case-studies-DSC', {
        width: '100%',
        height: '100%',
        left: 0,
        backgroundPosition: 'bottom',
        transformOrigin: "bottom",
        duration: 1,
        ease: "expoScale(0.5,7,none)",
        borderRadius: '38px',
    }, '-=1');

    tl.to('.case-studies-frame', {
        y: -181,
        duration: 0.6, 
        ease: "expoScale(0.5,7,none)",
        borderRadius: '38px',
    }, '-=0.6');

    tl.set('.case-studies-time', {
        x: -100,
        duration: 1, 
        ease: "expoScale(0.5,7,none)",
    }, '-=1');
    
    tl.to('.case-studies-time', {
        x: 0,
        duration: 1, 
        ease: "expoScale(0.5,7,none)",
        display: 'flex',
        opacity: 1
    }, '-=1');

    tl.set('.before-text', {
        x: -100,
        duration: 1, 
        ease: "expoScale(0.5,7,none)",
    }, '-=1');

    tl.to('.before-text', {
        x: 0,
        duration: 1, 
        ease: "expoScale(0.5,7,none)",
        display: 'block'
    }, '-=1');

    tl.set('.scroll-text', {
        x: 100,
        duration: 1, 
        ease: "expoScale(0.5,7,none)",
    }, '-=1');

    tl.to('.scroll-text', {
        x: 0,
        duration: 1, 
        ease: "expoScale(0.5,7,none)",
        display: 'block'
    }, '-=1');

    tl.to('.case-studies-DSC', {
        scale: 0,
        duration: 1, 
        ease: "expoScale(0.5,7,none)",
        display: 'block',
        transformOrigin: "top",
    });

    tl.to('.case-studies-DSC-2', {
        scale: 1,
        opacity: 1,
        duration: 1, 
        ease: "expoScale(0.5,7,none)",
        transformOrigin: "bottom",
        borderRadius: '38px',
    }, '-=0.9');

    tl.to('.case-studies-bar-img', {
        height: 'calc(48 / 1080 * 100vh)',
        opacity: 1,
        duration: 1,
    }, '-=1');

    tl.to('.case-studies-DSC-2', {
        scale: 0,
        duration: 1, 
        ease: "expoScale(0.5,7,none)",
        display: 'block',
        transformOrigin: "top",
    });

    tl.to('.case-studies-DSC-4', {
        scale: 1,
        opacity: 1,
        duration: 1, 
        ease: "expoScale(0.5,7,none)",
        transformOrigin: "bottom",
    }, '-=0.9');

    tl.to('.before-text', {opacity: 0, duration: 1}, '-=1');

    tl.to('.procedural-video', {opacity: 1, duration: 1, delay: 0.5}, '-=1');

    tl.to('.case-studies-bar-img', {
        height: 'calc(71 / 1080 * 100vh)',
        opacity: 1,
        duration: 1,
    }, '-=1');
}
caseStudies();
/* section case studies End */