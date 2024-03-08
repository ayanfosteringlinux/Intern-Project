
const parameters = document.querySelectorAll(".parameter");

parameters.forEach(parameter => {
    parameter.addEventListener("click", function() {
        const ratingDiv = this.querySelector('.a1cta');
        ratingDiv.classList.toggle('hidden');
    });
});
