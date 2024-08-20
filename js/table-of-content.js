//Table Of Content (TOC)

// Get all the headings in the blog content container
const headings = document.querySelectorAll('.blog-content-container > h2');

// Get the table of contents container
const toc = document.getElementById('table-of-contents');

// Get the min read span
const minReadSpan = document.querySelector('.min-read-span');


// Function to create a table of contents
function createTocItem(heading) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#' + heading.id;
    a.textContent = heading.textContent;
    toc.appendChild(li);
    li.appendChild(a);
};

// Counter for the id of each heading
let idCounter = 1;

// Add an id to each heading
headings.forEach(e => {
    e.id = idCounter;
    idCounter++;
});

// Create a table of contents item for each heading
headings.forEach(createTocItem);

const tocLinks = document.querySelectorAll('#table-of-contents a');

// Function to handle the intersection
function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remove the active class from all the links
            tocLinks.forEach(link => link.classList.remove('active'));

            // Get the id of the heading
            const id = entry.target.id;
            const correspondingLink = document.querySelector(`#table-of-contents a[href="#${id}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
}

// Create an observer
const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
});

// Observe each heading
headings.forEach(heading => observer.observe(heading));


// minRead value
let minRead = 20

// Function to calculate the new minRead value based on the progress
function getNewMinRead(progress) {
    // Calculate the new minRead value
    let newMinRead = Math.round(minRead * (1 - progress));
    return Math.max(newMinRead, 1);
}

// Function to animate the table of contents
function tocAnimation() {
    const tl = gsap.timeline ({
        scrollTrigger: {
            trigger: '.blog-content-container',
            start: 'top 20%',
            end: 'bottom 80%',
            pin: toc,
            scrub: true
        }
    });

    // Animate the progress bar
    tl.to('.bar-progress-in', { width: '100%', ease: 'power.out2'}, 0);

    // Animate the min read text
    gsap.timeline({
        scrollTrigger: {
            trigger: '.blog-content-container',
            start: 'top 20%',
            end: 'bottom 80%',
            scrub: true,
            onUpdate: (self) => {
                const progress = self.progress; // Get the progress value
                const newMinRead = getNewMinRead(progress); // Calculate the new minRead value
                minReadSpan.textContent = newMinRead; // Update the min read text
            }
        }
    });
}
tocAnimation();