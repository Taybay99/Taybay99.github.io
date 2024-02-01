let tg = window.Telegram.WebApp;
let currentPage = document.getElementById("page1");
let nextPage = document.getElementById("page2");

let item = "";

let btn1 = document.getElementById("btn1");
// Добавьте кнопки для остальных уроков

btn1.addEventListener("click", function(){
    // Ваши текущие действия

    // Переключение страниц
    currentPage.style.display = "none";
    nextPage.style.display = "block";
});

// Добавьте аналогичные обработчики для остальных кнопок

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});

let usercard = document.getElementById("usercard");
let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
