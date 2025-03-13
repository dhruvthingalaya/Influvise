document.addEventListener("DOMContentLoaded", function () {
    // Function to check if the element is 50% in the viewport
    function isElementInView(element) {
        const rect = element.getBoundingClientRect();
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        return rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5;
    }

    // Function to add the 'visible' class when the element is 50% in view
    function fadeInElements() {
        document.querySelectorAll('.fade-in')?.forEach(element => {
            if (isElementInView(element)) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', fadeInElements);
    window.addEventListener('load', fadeInElements);
    window.addEventListener('resize', fadeInElements);

    // About container popups
    document.querySelectorAll('.about-container')?.forEach(container => {
        const popupId = container.id + 'Popup';
        const popup = document.getElementById(popupId);

        if (popup) {
            container.addEventListener('click', () => {
                popup.showModal();
                document.body.classList.add('no-scroll');
            });

            const closeBtn = popup.querySelector('button');
            if (closeBtn) {
                closeBtn.addEventListener('click', (event) => {
                    event.stopPropagation();
                    popup.close();
                    document.body.classList.remove('no-scroll');
                });
            }
        }
    });


    // FAQ toggling
    document.querySelectorAll(".faq-container")?.forEach(faq => {
        const answer = faq.querySelector(".faq-answer");
        const icon = faq.querySelector(".faq-icon");

        faq.addEventListener("click", (event) => {
            if (event.target !== icon) {
                answer.classList.toggle("activate");
                icon.classList.toggle("activate");
            }
        });
    });

    // Mobile menu
    const menu = document.querySelector('.mobile-menu');
    const navContainer = document.querySelector('.mobile-nav-container');
    const navLinks = document.querySelector('.mobile-nav-links');

    if (menu && navContainer) {
        menu.addEventListener('click', () => {
            navContainer.classList.toggle('active');
            menu.classList.toggle('active');

            if (menu.classList.contains('fa-bars')) {
                menu.classList.replace('fa-bars', 'fa-xmark');
            } else {
                menu.classList.replace('fa-xmark', 'fa-bars');
            }
        });
    }

    if (navLinks) {
        navLinks.addEventListener('click', () => {
            navContainer.classList.toggle('active');
            menu.classList.toggle('active');

            if (menu.classList.contains('fa-bars')) {
                menu.classList.replace('fa-bars', 'fa-xmark');
            } else {
                menu.classList.replace('fa-xmark', 'fa-bars');
            }
        });
    }

    // Auto-adjust textarea height
    function adjustHeight(element) {
        element.style.height = "auto"; // Reset height to recalculate
        element.style.height = element.scrollHeight + "px"; // Adjust height dynamically
    }

    // Run on DOM load
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll("textarea.auto-expand").forEach(textarea => {
            textarea.setAttribute("rows", "2"); // Start with one row
            textarea.style.overflow = "hidden"; // Hide scrollbar
            textarea.style.minHeight = textarea.scrollHeight + "px"; // Set minimum height

            // Adjust height on input
            textarea.addEventListener("input", function () {
                adjustHeight(this);
            });
        });
    });


    // Application form validation
    const form = document.querySelector(".form");
    if (form) {
        form.setAttribute("novalidate", true);
        const inputs = form.querySelectorAll("input[required], textarea[required]");
        const dropdowns = document.querySelectorAll(".custom-dropdown");

        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        dropdowns?.forEach(dropdown => {
            const btn = dropdown.querySelector(".dropdown-btn");
            const options = dropdown.querySelectorAll(".option");
            const hiddenInputId = dropdown.dataset.input;
            const hiddenInput = document.getElementById(hiddenInputId);
            const errorMessage = document.getElementById(hiddenInput?.name);

            btn?.addEventListener("click", (event) => {
                event.stopPropagation();
                dropdown.classList.toggle("active");
            });

            options?.forEach(option => {
                option.addEventListener("click", function () {
                    btn.innerHTML = this.textContent + ' <i class="fa-solid fa-angle-down"></i>';
                    hiddenInput.value = this.dataset.value;
                    errorMessage?.classList.remove("visible");
                    dropdown.classList.remove("active");
                });
            });
        });

        document.addEventListener("click", (event) => {
            dropdowns?.forEach(dropdown => {
                if (!dropdown.contains(event.target)) {
                    dropdown.classList.remove("active");
                }
            });
        });

        form.addEventListener("keydown", function (event) {
            if (event.key === "Enter" && event.target.tagName !== "BUTTON") {
                event.preventDefault();

                const inputsArr = Array.from(inputs);
                const currentInput = event.target;
                const currentIndex = inputsArr.indexOf(currentInput);

                function isValidInput(input) {
                    return input.tagName === "TEXTAREA" ||
                        (input.tagName === "INPUT" && ["text", "number", "email"].includes(input.type));
                }

                for (let i = currentIndex + 1; i < inputsArr.length; i++) {
                    if (isValidInput(inputsArr[i]) && !inputsArr[i].value.trim()) {
                        inputsArr[i].focus();
                        return;
                    }
                }
            }
        });

        form.addEventListener("submit", function (event) {
            let isValid = true;

            inputs.forEach(input => {
                const errorMessage = document.getElementById(input.name);

                if (!input.value.trim()) {
                    isValid = false;
                    errorMessage?.classList.add("visible");
                } else if (input.type === "email" && !isValidEmail(input.value)) {
                    isValid = false;
                    errorMessage?.classList.add("visible");
                } else {
                    errorMessage?.classList.remove("visible");
                }
            });

            if (!isValid) {
                event.preventDefault();
            }
        });

        inputs.forEach(input => {
            input.addEventListener("input", function () {
                const errorMessage = document.getElementById(input.name);
                if ((input.type === "email" && isValidEmail(input.value)) || input.value.trim()) {
                    errorMessage?.classList.remove("visible");
                }
            });
        });
    }

    // Multiple choice radio input handling
    document.addEventListener("change", function (event) {
        if (event.target.matches('input[type="radio"]')) {
            const container = event.target.closest(".multiple_choice-container");
            if (container) {
                const inputId = container.dataset.input;
                const hiddenInput = document.getElementById(inputId);

                if (hiddenInput) {
                    hiddenInput.removeAttribute("value"); // Remove any existing value attribute
                    hiddenInput.value = event.target.value; // Set new value
                    hiddenInput.setAttribute("value", event.target.value); // Ensure Web3Forms reads only one value
                }
            }
        }
    });
});
