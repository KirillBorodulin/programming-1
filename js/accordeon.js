const accordeonQuestions = document.querySelectorAll('.accordeon__question');

accordeonQuestions.forEach(function (accordeonQuestion) {
    accordeonQuestion.addEventListener("click", function () {
        const clickedAnswer = accordeonQuestion.nextElementSibling;

        // Устанавливаем/удаляем класс active
        accordeonQuestion.classList.toggle('accordeon__question--active');
        clickedAnswer.classList.toggle('accordeon__answer--visible');

        // Проверяем, содержит ли clickedAnswer класс accordeon_answer--visible
        if (clickedAnswer.classList.contains('accordeon__answer--visible')) {
            clickedAnswer.style.maxHeight = clickedAnswer.scrollHeight + "px";
        } else {
            clickedAnswer.style.maxHeight = null;
        }
    });
});

const firstAnswer = accordeonQuestions[0].nextElementSibling;
accordeonQuestions[0].classList.add('accordeon_question--active');
firstAnswer.classList.add('accordeon_answer--visible');
firstAnswer.style.maxHeight = firstAnswer.scrollHeight + "px";

