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

            answer.classList.add("faq-open");
            icon.classList.add("rotated");
        });

        // Clicking on the icon closes it
        icon.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevents the container click event from firing
            answer.classList.remove("faq-open");
            icon.classList.remove("rotated");
        });
    });
});





