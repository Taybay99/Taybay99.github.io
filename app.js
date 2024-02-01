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

btn1.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали урок 1!");
        item = "1";
        showPage("page2"); // Переключаемся на вторую страницу
        tg.MainButton.show();
    }
});

btn2.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали урок 2!");
        item = "2";
        showPage("page1"); // Переключаемся на первую страницу
        tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
