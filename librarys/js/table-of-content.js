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
            trigger: toc,
            start: 'center center',
            end: '14500 center',
            pin: true,
            scrub: true
        }
    });

    // Animate the progress bar
    tl.to('.bar-progress-in', { width: '100%', ease: 'power.out2'}, 0);

    // Animate the min read text
    gsap.timeline({
        scrollTrigger: {
            trigger: toc,
            start: 'center center',
            end: '14500 center',
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