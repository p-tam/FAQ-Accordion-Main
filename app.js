let questions = document.querySelectorAll('.question-container');

questions.forEach(function(current) {
    current.addEventListener('click', function() {
        this.querySelector("button").classList.toggle("active-btn");
        this.nextElementSibling.classList.toggle("hide");
    })
})