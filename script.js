// Function to check if the element is 50% in the viewport
function isElementInView(element) {
    const rect = element.getBoundingClientRect();
    const elementHeight = rect.height;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Check if at least 50% of the element is visible in the viewport
    return (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5);
}

// Function to add the 'visible' class when the element is 50% in view
function fadeInElements() {
    const fadeElements = document.querySelectorAll('.fade-in');

    fadeElements.forEach(element => {
        if (isElementInView(element)) {
            element.classList.add('visible');
        }
    });
}

// Call the fadeInElements function when the page loads or the user scrolls
window.addEventListener('scroll', fadeInElements);
window.addEventListener('load', fadeInElements);

// Optionally, you can call it on resize to handle dynamic page changes
window.addEventListener('resize', fadeInElements);





document.querySelectorAll('.about-container').forEach(container => {
    const popupId = container.id + 'Popup'; // Derive popup ID dynamically
    const popup = document.getElementById(popupId);

    if (popup) {
        container.addEventListener('click', () => {
            popup.showModal();
            document.body.classList.add('no-scroll');
        });

        const closeBtn = popup.querySelector('button'); // Select the close button inside the popup
        if (closeBtn) {
            closeBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                popup.close();
                document.body.classList.remove('no-scroll');
            });
        }
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq-container");

    faqs.forEach((faq) => {
        const answer = faq.querySelector(".faq-answer");
        const icon = faq.querySelector(".faq-icon");

        // Clicking on the FAQ container opens it
        faq.addEventListener("click", (event) => {
            // Prevent the icon click from triggering this event
            if (event.target === icon) return;

            answer.classList.toggle("activate");
            icon.classList.toggle("activate");
        });
    });
});


const menu = document.querySelector('.mobile-menu');
const navContainer = document.querySelector('.mobile-nav-container');

menu.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    menu.classList.toggle('active')
    if (menu.classList.contains('fa-bars')) {
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-xmark');
    }

    else if (menu.classList.contains('fa-xmark')) {
        menu.classList.add('fa-bars');
        menu.classList.remove('fa-xmark');
    }
});

document.querySelector('.mobile-nav-links').addEventListener('click', () => {
    navContainer.classList.toggle('active');
    menu.classList.toggle('active')
    if (menu.classList.contains('fa-bars')) {
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-xmark');
    }

    else if (menu.classList.contains('fa-xmark')) {
        menu.classList.add('fa-bars');
        menu.classList.remove('fa-xmark');
    }
})

function adjustHeight(element) {
    element.style.height = "auto"; // Reset height to recalculate
    element.style.height = element.scrollHeight + "px"; // Adjust height
}






document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".application-form");
    const dropdowns = document.querySelectorAll(".custom-dropdown");
    const inputs = form.querySelectorAll("input[required]");

    // Disable default browser validation
    form.setAttribute("novalidate", true);

    // Email validation regex
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Dropdown handling
    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector(".dropdown-btn");
        const options = dropdown.querySelectorAll(".option");
        const hiddenInputId = dropdown.getAttribute("data-input");
        const hiddenInput = document.getElementById(hiddenInputId);
        const errorMessage = document.getElementById(hiddenInput.name);

        // Toggle dropdown open/close
        btn.addEventListener("click", function (event) {
            event.stopPropagation();
            dropdowns.forEach(d => d.classList.remove("active"));
            dropdown.classList.toggle("active");
        });

        // Select an option & update input value
        options.forEach(option => {
            option.addEventListener("click", function () {
                btn.innerHTML = this.textContent + ' <i class="fa-solid fa-angle-down"></i>';
                hiddenInput.value = this.getAttribute("data-value");
                hiddenInput.setAttribute("value", this.getAttribute("data-value"));
                errorMessage?.classList.remove("visible");
                dropdown.classList.remove("active");
            });
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function () {
        dropdowns.forEach(dropdown => dropdown.classList.remove("active"));
    });

    // Form validation before submitting
    form.addEventListener("submit", function (event) {
        let isValid = true;

        inputs.forEach(input => {
            const errorMessage = document.getElementById(input.name);

            if (!input.value.trim()) {
                isValid = false;
                errorMessage?.classList.add("visible");
            } else if (input.type === "email" && !isValidEmail(input.value)) {
                isValid = false;
                errorMessage?.classList.add("visible"); // Show email error if invalid format
            } else {
                errorMessage?.classList.remove("visible");
            }
        });

        if (!isValid) {
            event.preventDefault();
        }
    });

    // Hide error message when user starts typing
    inputs.forEach(input => {
        input.addEventListener("input", function () {
            const errorMessage = document.getElementById(input.name);
            if (input.type === "email") {
                if (isValidEmail(input.value)) {
                    errorMessage?.classList.remove("visible");
                }
            } else {
                if (input.value.trim()) {
                    errorMessage?.classList.remove("visible");
                }
            }
        });
    });
});




