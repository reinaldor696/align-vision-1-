window.onload = () => {window.scrollTo(0, 0);}

/* header */
const navResources = document.querySelector('#nav-resources2');
const resourcesMenu = document.querySelector('.resources-menu');
const navResourcesSvg = document.querySelector('.nav-resources svg');
const headerContainer = document.getElementById('header-container');
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

//function to hide the header when scrolling down and show it when scrolling up
(function(){
    let doc = document.documentElement;
    let prevDirection = 0;
    let prevScroll = window.scrollY || doc.scrollTop;
    let curDirection = 0;

    ScrollTrigger.create({
        trigger: "#home, .about-us, .blog-single, .contact-us, .our-blog, .services-open",
        start: "top top",
        end: "bottom top",
        onUpdate: (self) => {
            let curScroll = self.scroll();
            if (curScroll > prevScroll) { 
                curDirection = 2; // down
            } else { 
                curDirection = 1; // up
            }

            if (curDirection !== prevDirection) {
                toggleHeader(curDirection);
            }

            prevDirection = curDirection;
            prevScroll = curScroll;
        }
    });

    function toggleHeader(direction) {
        if (direction === 2) {
            gsap.to(headerContainer, { duration: 1, y: '-200%'});
        } else {
            gsap.to(headerContainer, { duration: 1, y: '0', delay: 1.5 });
        }
    }
})();

/* header end */

/* container1 */
function counterContainer1Animation() {

    let counter = 0;

    //animation counter
    gsap.timeline({
        scrollTrigger: {
            trigger: ".content3-container1",
            start: "top center",
            end: "top center",
            onEnter: () => {
                // Start the counter when the element is in view
                if (!window.counterInterval) {  // Check if the counter is already running  
                    window.counterInterval = setInterval(() => {
                        if (counter < 1000) {
                            counter++;
                            const counterElement = document.getElementById('counter-container1');
                            if(counterElement) { // Check if the element exists
                            counterElement.innerHTML = counter; // Update the element with the new value
                            }
                        } else {
                            // Stop the counter when it reaches 1000
                            clearInterval(window.counterInterval);
                            window.counterInterval = null; // Reset the counter
                        }
                    }, 0.05); // 0.05ms
                }
            }
        }
    });

}
counterContainer1Animation();
/* container1 end */


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
    if (matchMedia("(min-width: 1024px)").matches) {
        
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
    if (matchMedia("(min-width: 1024px)").matches) {
        const tl = gsap.timeline({ 
            scrollTrigger: { 
                trigger: '.content4-container1',
                start: 'top bottom',
                end: 'top bottom',
            }
        });

        tl.fromTo('.content4-container1', 
            { y: '20%' },
            { y: 0, duration: 1 }
        );

        tl.fromTo('.content-card-content4-container1', 
            { y: '50%', opacity: 0},
            { y: 0, opacity: 1, duration: 1 },
        '-=0.5');

        tl.fromTo('.background-content4-container1', 
            
            { width: 'calc(1920 / 1920* 100vw)', margin: 0, borderRadius: 0 },
            
            {   
                width: 'calc(1820 / 1920* 100vw)',
                marginLeft: 'calc(50 / 1920* 100vw)',
                borderRadius: '35px',
                duration: 1
            },
        '-=0.5');
    }
}
homeAnimationSection2();

function homeAnimationSection3() {
    if (matchMedia("(min-width: 1024px)").matches) {
        const tl = gsap.timeline({ 
            scrollTrigger: { 
                trigger: '.text123-content1-container2-container',
                start: 'top center',
                end: '700 center',
                scrub: 1,
                stagger: 4
            }
        });

        tl.fromTo('.img-text1-content1-container2 img', 
            { x: '40%' },
            { x: 0, duration: 1 }
        );

        tl.fromTo('.img-text2-content1-container2 img', 
            { x: '40%' },
            { x: 0, duration: 1 }
        );

        tl.fromTo('.img-text3-content1-container2 img', 
            { x: '90%' },
            { x: 0, duration: 1 }
        );
    }
}
homeAnimationSection3();

function homeAnimationSection4() {
    if (matchMedia("(min-width: 1024px)").matches) {
        const tl = gsap.timeline({ 
            scrollTrigger: { 
                trigger: '.all-doctors-cards-container',
                start: 'top bottom',
                end: '700 bottom',
            }
        });

        tl.fromTo('.img-content2-container2 img', 
            { scale: 0  },
            { scale: 1, duration: 1 }
        );

        tl.fromTo('.doctors-cards-container', 
            { scale: 0.8, opacity: 0.8 },
            { scale: 1, opacity: 1, duration: 1 },
        '-=1');
    }
}
homeAnimationSection4();

function homeAnimationSection5() {
    if (matchMedia("(min-width: 1024px)").matches) {
        const tl = gsap.timeline({ 
            scrollTrigger: { 
                trigger: '.content3-container2',
                start: 'top bottom',
                end: 'top bottom',
            }
        });

        tl.fromTo('.content3-container2', 
            { y: '20%' },
            { y: 0, duration: 1 }
        );

        tl.fromTo('.content-card-content3-container2', 
            { y: '50%', opacity: 0},
            { y: 0, opacity: 1, duration: 1 },
        '-=0.5');

        tl.fromTo('.background-content3-container2', 
            
            { width: 'calc(1920 / 1920* 100vw)', margin: 0, borderRadius: 0 },
            
            {   
                width: 'calc(1820 / 1920* 100vw)',
                marginLeft: 'calc(50 / 1920* 100vw)',
                borderRadius: '35px',
                duration: 1
            },
        '-=0.5');
    }
}
homeAnimationSection5();

function homeAnimationSection6() {
    if (matchMedia("(min-width: 1024px)").matches) {
        const tl = gsap.timeline({ 
            scrollTrigger: { 
                trigger: '.container3-div',
                start: 'top 500',
                end: 'top 500',
            }
        });

        tl.fromTo('#container3-img1', 
            { transform: 'rotate(-179deg)' },
            { transform: 'rotate(0deg)', duration: 1 }
        );
        
        tl.fromTo('#container3-text-wrapper-3-1', 
            { x: '25vw' },
            { x: 0, duration: 1 },
        '-=1');

        tl.fromTo('#container3-div-2-1', 
            { x: '70%' },
            { x: 0, duration: 1 },
        '-=1');
    }
}
homeAnimationSection6();

function homeAnimationSection7() {
    if (matchMedia("(min-width: 1024px)").matches) {
        const tl = gsap.timeline({ 
            scrollTrigger: { 
                trigger: '.container3-div-3',
                start: 'top 500',
                end: 'top 500',
            }
        });

        tl.fromTo('#container3-img2', 
            { transform: 'rotate(-179deg)' },
            { transform: 'rotate(0deg)', duration: 1 }
        );
        
        tl.fromTo('#container3-text-wrapper-3-2', 
            { x: '25vw' },
            { x: 0, duration: 1 },
        '-=1');

        tl.fromTo('#container3-div-2-2', 
            { x: '70%' },
            { x: 0, duration: 1 },
        '-=1');
    }
}
homeAnimationSection7();

function homeAnimationSection8() {
    if (matchMedia("(min-width: 1024px)").matches) {
        const tl = gsap.timeline({ 
            scrollTrigger: { 
                trigger: '.container3-div-4',
                start: 'top 500',
                end: 'top 500',
            }
        });

        tl.fromTo('#container3-img3', 
            { transform: 'rotate(-179deg)' },
            { transform: 'rotate(0deg)', duration: 1 }
        );
        
        tl.fromTo('#container3-text-wrapper-3-3', 
            { x: '25vw' },
            { x: 0, duration: 1 },
        '-=1');

        tl.fromTo('#container3-div-2-3', 
            { x: '70%' },
            { x: 0, duration: 1 },
        '-=1');
    }
}
homeAnimationSection8();

function homeAnimationSection9() {
    if (matchMedia("(min-width: 1024px)").matches) {
        const tl = gsap.timeline({ 
            scrollTrigger: { 
                trigger: '.container4-content',
                start: 'top 400',
                end: 'top 400',
            }
        });

        tl.fromTo('.container4-content-vector', 
            { transform: 'rotate(-179deg)' },
            { transform: 'rotate(0deg)', duration: 1 }
        );
    }
}
homeAnimationSection9();

function homeAnimationSection11() {
    if (matchMedia("(min-width: 1024px)").matches) {
        const tl = gsap.timeline({ 
            scrollTrigger: { 
                trigger: '.footer-overlap',
                start: 'top center',
                end: 'top center',
            }
        });

        //time 1
        tl.fromTo('.footer-div', 
            { y: '190%', x: '-50%'},
            { y: '124%', x: '-108%', duration: 1, delay: 4 }
        );

        tl.fromTo('.footer-ellipse', 
            { y: '140%', x: '65%' },
            { y: '36%', x: '45%', duration: 1 },
        '-=1');
        
        //time 2
        tl.to('.footer-div', 
            { y: 0, x: 0, duration: 1, delay: 4 }
        );

        tl.to('.footer-ellipse', 
            { y: 0, x: 0, duration: 1 },
        '-=1');

        //time 3
        tl.to('.footer-div', 
            { y: '78%', x: '-51%', duration: 1, delay: 4 },
        );

        tl.to('.footer-ellipse', 
            { y: '85%', x: '45%', duration: 1 },
        '-=1');

        //time 4
        tl.to('.footer-div', 
            { y: '130%', x: '-50%', duration: 1, delay: 4 }
        );

        tl.to('.footer-ellipse', 
            { y: '140%', duration: 1 },
        '-=1');

        tl.repeat(-1);
    }
}
homeAnimationSection11();
/* section home animation */

/* section case studies */
function caseStudies() {
    if (matchMedia("(min-width: 1024px)").matches) {
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