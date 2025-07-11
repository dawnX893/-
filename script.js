// Pinipili natin ang lahat ng elements na may class na "hidden".
// Ito ang mga card na gusto nating i-animate.
const hiddenElements = document.querySelectorAll('.hidden');

// Gumagawa tayo ng "Observer". Ito ay isang modernong paraan para malaman
// kung ang isang element ay nakikita na sa screen.
const observer = new IntersectionObserver((entries) => {
    // Para sa bawat entry (o card) na mino-monitor natin...
    entries.forEach((entry) => {
        // ...iche-check natin kung ito ay "intersecting" (nakikita na ba sa viewport).
        if (entry.isIntersecting) {
            // Kung nakikita na, idadagdag natin ang class na "show".
            // Ang pag-add ng "show" class ang magti-trigger sa animation sa CSS.
            entry.target.classList.add('show');
        } 
        // Optional: Kung gusto mong umulit ang animation pag nawala sa screen at bumalik ulit
        // else {
        //     entry.target.classList.remove('show');
        // }
    });
});

// Sinasabihan natin ang observer na simulan nang bantayan ang bawat hidden element.
hiddenElements.forEach((el) => observer.observe(el));
