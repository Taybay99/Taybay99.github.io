let tg = window.Telegram.WebApp;

tg.expand();
tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

// Функция для отображения выбранной страницы
function showPage(pageId) {
    // Скрываем все страницы
    document.querySelectorAll('.item').forEach(item => {
        item.style.display = 'none';
    });

    // Отображаем выбранную страницу
    document.getElementById(pageId).style.display = 'block';
}

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
// Добавьте аналогичные переменные для других кнопок

btn1.addEventListener("click", function(){
    showPage("page1");
    item = "1";
});

btn2.addEventListener("click", function(){
    showPage("page2");
    item = "2";
});
// Добавьте аналогичные обработчики для других кнопок

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;
usercard.appendChild(p);
