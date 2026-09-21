const heading = document.querySelector("h1");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            heading.classList.add("animate");

            observer.unobserve(heading);
        }

    });

}, {
    threshold: 0.3
});

observer.observe(heading);