// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener("click", () => {
  clonedBtn.classList.add('second-btn')
  clonedBtn.style.color = 'white'
  clonedBtn.style.backgroundColor = '#a78b71'
  clonedBtn.innerText = 'Я изменю тебя'
  document.body.append(clonedBtn)
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
});

clonedBtn.addEventListener('click', () => {
  btn.style.color = 'black'
  btn.style.backgroundColor = '#9c4a1a'
})

// здесь можете создать EventListener для второй кнопки
