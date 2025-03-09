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
        const question = faq.querySelector(".faq-question");
        const answer = faq.querySelector(".faq-answer");
        const icon = faq.querySelector(".faq-icon");

        question.addEventListener("click", () => {
            // Toggle answer visibility
            answer.classList.toggle("faq-open");

            // Toggle icon rotation
            icon.classList.toggle("rotated");
        });
    });
});



