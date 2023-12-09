let email = document.querySelector(`#email`);
let pass = document.querySelector(`#pass`);
let output = document.querySelector(`#output`);
let check = document.querySelector(`#check`);

check.addEventListener(`click`, function () {
    if (email === `aa@mail.ru` && pass === `12345678`) {
        output.innerHTML = `Успешно!`
    }
});