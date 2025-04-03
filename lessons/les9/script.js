// * вывод данных в консоль
// * здесь мы выводим в консоль объект document
// * в нем описаны все элементы и их свойства на странице
// console.log(document)
// * вывод в консоль элементов в виде объекта
// console.dir(document)
// * мы используем DOM методы для удобной работы с объектом document

// console.log("hello, JS");

// * вывод в консоль body с нашей странички
// console.log(document.body)

// создаем переменную heading и кладем в нее результат поиска элемента с id heading
let heading = document.getElementById('heading')
// поменяли текст элемента
heading.innerText = 'Урок 9. DOM методы ⭐️'
// поменяли цвет элемента
heading.style.color = 'blue'

// * здесь мы находим список элементов с данным классом (ответ приходит в массиве)
// * ответ на результат поиска в методе getElementsByClassName всегда приходит в виде массива
let desc = document.getElementsByClassName('desc-info')
// console.log(desc);
// * если мы хотим обратиться к одному из элементов мы должны знать его индекс
desc[0].style.color = 'red'
desc[1].style.color = 'green'

// * нашли кнопку которую собираемся сделать интерактивной и положили в переменную
let btnChange = document.getElementById('btn-change-h1')
// console.log(btnChange)

// слушатель события ожидает описание типа события первым аргументом
// и вторым аргументом функцию описывающую действия, которые произойдут, когда случится это событие
btnChange.addEventListener('click', () => {
  heading.style.color = 'darkviolet'
  // heading.style.fontSize = '40px'
  heading.style.fontStyle = 'italic'
})

let btnCreate = document.getElementById('btn-create')

btnCreate.addEventListener('click', () => {
  // создаем переменную с новым элементом
  let newElement = document.createElement('p')
  // добавляем элементу текст
  newElement.innerText = 'Кажется, я начинаю понимать этот DOM...'
  // добавили класс новому элементу
  newElement.classList.add('dom-text')
  // к будущему родителю для элемента применяем метод append, в который передаем наш созданный newElement
  document.body.append(newElement)
})

// ##  Homework

// ### Задание 1
// Задание по ссылке: [ссылка](https://github.com/ait-tr/task_fe-dom-magic-buttons)
