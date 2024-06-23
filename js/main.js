window.onload = () => {window.scrollTo(0, 0);}

/* header */
const navResources = document.querySelector('#nav-resources2');
const resourcesMenu = document.querySelector('.resources-menu');
const navResourcesSvg = document.querySelector('.nav-resources svg');
/* header end */

/* section services */
const servicesTitle2 = document.querySelector('.services-title-2');
const servicesCard = document.querySelector('.services-card');
const servicesComparison = document.querySelector('.services-comparison');
const servicesDiv = document.querySelector('.services-div');
const servicesImg2 = document.querySelector('.services-img-2');
const servicesSvg2 = document.querySelector('.services-svg-2');
const viewTextServices = document.querySelector('.view-text-services');
const closeTextServices = document.querySelector('.close-text-services');
const compareAllPlansText = document.querySelector('.compare-all-plans-text');
const servicesComparisonMquery = document.querySelector('.services-comparison-mquery');

function closePlanComparation() {
    
    if (window.matchMedia("(min-width: 480px)").matches) {
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
    } else {
        if(servicesTitle2.style.display === 'flex') {
            viewTextServices.style.display = 'flex';
            servicesSvg2.style.display = 'block';
            servicesImg2.style.display = 'none';
            servicesTitle2.style.display = 'none';
            compareAllPlansText.style.display = 'none';
            servicesComparisonMquery.style.display = 'none';
            closeTextServices.style.display = 'none';
            servicesDiv.style.height = '3539px';
        } else {
            closeTextServices.style.display = 'flex';
            servicesTitle2.style.display = 'flex';
            compareAllPlansText.style.display = 'block';
            servicesComparisonMquery.style.display = 'block';
            servicesImg2.style.display = 'block';
            servicesSvg2.style.display = 'none';
            viewTextServices.style.display = 'none';
            servicesDiv.style.height = '6808px';
        }
    }
}
/* section services end */

/* header */
navResources.addEventListener('mouseenter', () => {
    resourcesMenu.style.display = 'block';
    navResourcesSvg.style.transform = 'rotate(180deg)';
});

navResources.addEventListener('mouseleave', () => {
    resourcesMenu.style.display = 'none';
    navResourcesSvg.style.transform = 'rotate(0deg)';
});

/* header end */

/* section case studies */
function caseStudies() {
    if (matchMedia("(min-width: 480px)").matches) {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.scroll-case-studies',
                start: '1 0',
                end: '2300 0',
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

        tl.to('.case-studies-DSC-4', {
            scale: 0,
            duration: 1, 
            ease: "expoScale(0.5,7,none)",
            display: 'block',
            transformOrigin: "top",
        });

        tl.to('.case-studies-DSC-5', {
            scale: 1,
            opacity: 1,
            duration: 1, 
            ease: "expoScale(0.5,7,none)",
            transformOrigin: "bottom",
        }, '-=0.9');

        tl.to('.procedural-video', {opacity: 0, duration: 1}, '-=1');

        tl.to('.after-text', {opacity: 1, duration: 1, delay: 0.5}, '-=1');

        tl.to('.case-studies-bar-img', {
            height: 'calc(107 / 1080 * 100vh)',
            opacity: 1,
            duration: 1,
        }, '-=1');

        tl.to('.case-studies-DSC-5', {
            scale: 0,
            duration: 1, 
            ease: "expoScale(0.5,7,none)",
            display: 'block',
            transformOrigin: "top",
        });

        tl.to('.case-studies-DSC-6', {
            scale: 1,
            opacity: 1,
            duration: 1, 
            ease: "expoScale(0.5,7,none)",
            transformOrigin: "bottom",
        }, '-=0.9');

        tl.to('.case-studies-bar-img', {
            height: 'calc(142 / 1080 * 100vh)',
            opacity: 1,
            duration: 1,
        }, '-=1');

        tl.to('.case-studies-DSC-6', {
            scale: 0,
            duration: 1, 
            ease: "expoScale(0.5,7,none)",
            display: 'block',
            transformOrigin: "top",
        });

        tl.to('.case-studies-DSC-7', {
            scale: 1,
            opacity: 1,
            duration: 1, 
            ease: "expoScale(0.5,7,none)",
            transformOrigin: "bottom",
        }, '-=0.9');

        tl.to('.case-studies-bar-text-wrapper-3', {display: 'none', duration: 0.1}, '-=1');

        tl.to('.case-studies-bar-text-wrapper-8', {scale: 1, opacity: 1}, '-=1');

        tl.to('.case-studies-bar-case-study-2', {opacity: 1}, '-=1');

        tl.to('.case-studies-bar-case-study', {opacity: 0.5}, '-=1');

        tl.to('.case-studies-bar-element', {
            width: 'calc(12 / 1080 * 100vh)',
            height: 'calc(12 / 1080 * 100vh)',
            backgroundColor: '#DBDDE8',
            borderRadius: '19px',
            opacity: 1,
            duration: 1,
        }, '-=1');

        tl.to('.case-studies-bar-element-2', {
            scale: 3,
            backgroundColor: '#1F4283',
            borderRadius: '19px',
            opacity: 1,
            duration: 1,
        }, '-=1');

        tl.to('.case-studies-bar-img-2', {
            height: 'calc(27 / 1080 * 100vh)',
            opacity: 1,
            duration: 1,
        }, '-=0.8');

        tl.to('.case-studies-DSC-7', {
            scale: 0,
            duration: 1, 
            ease: "expoScale(0.5,7,none)",
            display: 'block',
            transformOrigin: "top",
        });

        tl.to('.case-studies-DSC-8', {
            scale: 1,
            opacity: 1,
            duration: 1, 
            ease: "expoScale(0.5,7,none)",
            transformOrigin: "bottom",
        }, '-=0.9');

        tl.to('.case-studies-bar-img-2', {
            height: 'calc(54 / 1080 * 100vh)',
            opacity: 1,
            duration: 1,
        }, '-=0.8');

        tl.to('.case-studies-DSC-8', {
            scale: 0,
            duration: 1, 
            ease: "expoScale(0.5,7,none)",
            display: 'block',
            transformOrigin: "top",
        });

        tl.to('.case-studies-DSC-9', {
            scale: 1,
            opacity: 1,
            duration: 1, 
            ease: "expoScale(0.5,7,none)",
            transformOrigin: "bottom",
        }, '-=0.9');

        tl.to('.case-studies-bar-img-2', {
            height: 'calc(84 / 1080 * 100vh)',
            opacity: 1,
            duration: 1,
        }, '-=0.8');

        tl.to('.case-studies-DSC-9', {
            scale: 0,
            duration: 1, 
            ease: "expoScale(0.5,7,none)",
            display: 'block',
            transformOrigin: "top",
        });

        tl.to('.case-studies-DSC-10', {
            scale: 1,
            opacity: 1,
            duration: 1, 
            ease: "expoScale(0.5,7,none)",
            transformOrigin: "bottom",
        }, '-=0.9');

        tl.to('.case-studies-bar-img-2', {
            height: 'calc(125 / 1080 * 100vh)',
            opacity: 1,
            duration: 1,
        }, '-=0.8');

        tl.to('.case-studies-DSC-10', {
            scale: 0,
            duration: 1, 
            ease: "expoScale(0.5,7,none)",
            display: 'block',
            transformOrigin: "top",
        });

        tl.to('.case-studies-DSC-11', {
            scale: 1,
            opacity: 1,
            duration: 1, 
            ease: "expoScale(0.5,7,none)",
            transformOrigin: "bottom",
        }, '-=0.9');

        tl.to('.case-studies-bar-img-2', {
            height: 'calc(181 / 1080 * 100vh)',
            opacity: 1,
            duration: 1,
        }, '-=0.8');
    } else {
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.scroll-case-studies',
                start: 'top 0',
                end: 'bottom 0',
            }
        });

        tl2.to('.case-studies-div, .case-studies-text-wrapper', {
            y: '-100vh', 
            duration: 1, 
            ease: "expoScale(0.5,7,none)",
            opacity: 0,
        });

        tl2.to('.title-treatment-plan-mquery-case', {
            opacity: 1,
            duration: 1,
            delay: 0.3,
            y: -379,
        }, '-=1');

        tl2.to('.case-studies-DSC', {
            duration: 1,
            scale: 2,
            width: '100%',
            height: '100%',
            y: '-40%',
            left: 0,
            duration: 1,
            ease: "expoScale(0.5,7,none)",
            borderRadius: '25.123px',
            backgroundPosition: 'center 80%',

        }, '-=1.25');

        tl2.to('.case-studies-frame', {
            width: 'calc(374 / 430 * 100vw)',
            height: '310px',
            duration: 1,
            ease: "expoScale(0.5,7,none)",
            y: '-20%',
            left: 'calc(30 / 430 * 100vw)',
            borderRadius: '25.123px',
        }, '-=1.25');

        tl2.to('.case-studies-bar-case-studies', {
            opacity: 1,
            duration: 1,
        }, '-=0.5');

        tl2.to('.btn-mquery-case-studies-img', {
            opacity: 1,
            duration: 1,
            display: 'block',
        }, '-=1');
    }
}
caseStudies();

const caseStudiesDSCMquery = document.querySelectorAll('.case-studies-DSC-mquery');
const caseStudiesBarImg = document.querySelector('.case-studies-bar-img');
let counter = 0;
let porcent = 0;

function imgBefore() {
    if(counter > 0) {
        counter--;
    }

    porcent -= 10;

    if (porcent <= 5) {
        porcent = 5;
    }

    caseStudiesBarImg.style.width = `${porcent}%`

    updateImage();
}

function imgAfter() {
    if(counter < caseStudiesDSCMquery.length - 1) {
        counter++;
    }

    porcent += 10;

    if (porcent > 80) {
        porcent = 80;
    }

    caseStudiesBarImg.style.width = `${porcent}%`;

    updateImage();
}

function updateImage() {
    caseStudiesDSCMquery.forEach((img, index) => {
        if(index === counter) {
            img.style.opacity = 1;
            img.style.scale = 1;

            

        } else {
            img.style.opacity = 0;
            img.style.scale = 0;
        }
    });
}
/* section case studies End */

/* section menu mquery */
const menuMquery = document.querySelector('.menu-mquery-container');
const caseStudiesBlogMenuMquery = document.querySelector('.case-studies-blog-menu-mquery');
const resourceMenuMquerySvg = document.querySelector('.resource-menu-mquery svg');

function openMenuMquery() {
    menuMquery.style.display = 'block';
}

function closeMenuMquery() {
    menuMquery.style.display = 'none';

    if(caseStudiesBlogMenuMquery.style.display === 'block') {
        caseStudiesBlogMenuMquery.style.display = 'none';
        resourceMenuMquerySvg.style.transform = 'rotate(0deg)';
    }
}

function resourceOptions() {
    if(caseStudiesBlogMenuMquery.style.display === 'flex') {
        caseStudiesBlogMenuMquery.style.display = 'none';
        resourceMenuMquerySvg.style.transform = 'rotate(0deg)';
    } else {
        caseStudiesBlogMenuMquery.style.display = 'flex';
        resourceMenuMquerySvg.style.transform = 'rotate(180deg)';
    }
}
/* section menu mquery End */

/* section home animation */
function homeAnimationSection1() {
    if (matchMedia("(min-width: 480px)").matches) {
        
        //header animation
        gsap.fromTo('.header-container', 
            { opacity: 0, y: '-50%' },
            { duration: 1, opacity: 1, y: 0 }
        );


        //section 1 animation
        gsap.fromTo('.img-home-background1, .content1-container1-content', 
            { opacity: 0, x: '-10%' },
            { duration: 1, opacity: 1, x: 0 }
        );

        gsap.fromTo('.img-home-background1', 
            {  width: '85%' },
            { duration: 1, width: '100%' }
        );


        //section 2 animation
        gsap.fromTo('.content2-container1', 
            { opacity: 0, x: '10%' },
            { duration: 1, opacity: 1, x: 0 }
        );

        gsap.fromTo('.overlap-group', 
            { opacity: 0, x: '10%', width: '50%' },
            { opacity: 1, x: 0, width: '100%', duration: 1, }
        );

        //animation tablet
        gsap.fromTo('.patients-square', 
            { opacity: 0, x: '30%' },
            { duration: 1, opacity: 1, x: 0 }
        );

        //animation phone
        gsap.fromTo('.phone', 
            { opacity: 0, y: '30%', transform: 'rotate(-25deg)' },
            { opacity: 1, y: 0, transform: 'rotate(0deg)', duration: 1 }
        );
    }
}
homeAnimationSection1();

function homeAnimationSection2() {
    
}
/* section home animation */