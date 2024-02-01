// Объявите переменную для хранения текущего урока
let currentLesson = "";

// Функция для обновления контента при выборе урока
function updateContent(lesson) {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText(`Вы выбрали урок ${lesson}!`);
        currentLesson = lesson;
        tg.MainButton.show();
    }
}

// Добавьте обработчики событий для каждой кнопки
btn1.addEventListener("click", function() {
    updateContent("1");
});

btn2.addEventListener("click", function() {
    updateContent("2");
});

btn3.addEventListener("click", function() {
    updateContent("3");
});

btn4.addEventListener("click", function() {
    updateContent("4");
});

btn5.addEventListener("click", function() {
    updateContent("5");
});

btn6.addEventListener("click", function() {
    updateContent("6");
});

btn7.addEventListener("click", function() {
    updateContent("7");
});

btn8.addEventListener("click", function() {
    updateContent("8");
});

// Добавьте обработчик события для кнопки "Главный"
Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(currentLesson);
});

// Остальной ваш код оставьте без изменений
let usercard = document.getElementById("usercard");
let p = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;
usercard.appendChild(p);
