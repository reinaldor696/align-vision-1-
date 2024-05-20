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