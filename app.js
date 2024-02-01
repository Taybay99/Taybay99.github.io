let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let btn1 = document.getElementById("btn1");
let backBtn = document.getElementById("backBtn");
let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");

btn1.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали урок 1!");
        item = "1";
        tg.MainButton.show();
        // Переключение на страницу с содержанием урока 1
        page1.style.display = "none";
        page2.style.display = "block";
    }
});

// Добавьте обработчик для кнопки "назад"
backBtn.addEventListener("click", function(){
    // Переключение страниц обратно
    page1.style.display = "block";
    page2.style.display = "none";
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
