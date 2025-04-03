// ! Counter

// * 1. объявление переменных
// подумаем какие элементы будут интерактивными
// находим их DOM методами и кладем в переменные

const minus = document.querySelector("#btn-minus");
const plus = document.querySelector("#btn-plus");
const value = document.querySelector("#value");

// * 2. описали логику работы с данными

let counter = 0;

const handlePlus = () => {
  // увеличиваем counter на 1
  // * counter++
  counter = counter + 100
  // перезаписываем текстовое значение value
  value.innerText = counter;
};

const handleMinus = () => {
  // * counter--
  counter = counter - 10
  value.innerText = counter;
};

// * 3. добавили данные интерактивным элементам через слушатели событий

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);

// ! Todo list

// * 1. нашли интерактивные элементы
const form = document.getElementById("form-todo");
const ul = document.getElementById("list-todo");

// создаем функцию очистки элементов списка
function clearList() {
  // пока у ul есть дочерние элементы удаляй первый элемент
  while (ul.hasChildNodes()) {
    ul.firstChild.remove();
  }
}

// * 2. создали массив под список задач
const taskList = [
  {
    where: "дом",
    what: "кодить"
  },
  {
    where: "дом",
    what: "убраться"
  },
  {
    where: "магазин",
    what: "купить продукты"
  }
];

// создаем функцию изменения стилей для элементов списка
const changeStatus = (event) => {
  if (event.target.style.textDecoration === 'line-through') {
    event.target.style.textDecoration = 'none'
  } else {
    event.target.style.textDecoration = 'line-through'
  }
}

// создаем функцию для добавления элементов списка из массива
function createList() {
  taskList.map((el) => {
    const li = document.createElement("li");
    li.innerText = `${el.what}: ${el.where}`;
    // вешаем функцию changeStatus на элемент списка по свойству onclick (аналог слушателя событий)
    // т.е. changeStatus() сработает по клику на элемент
    li.onclick = changeStatus
    // добавляем элемент li к родителю ul
    ul.append(li);
  });
}

// * 3. вызываем ранее созданную функцию и выводим элементы на странице
createList();

// * 4. создаем слушатель событий по нажатию на кнопку для формы по событию submit
form.addEventListener("submit", (event) => {
  // предотвращаем отправку формы и перезагрузку страницы по умолчанию
  event.preventDefault();

  // создаем для удобства объект со значениями из формы
  let task = {
    where: event.target.where.value.toLowerCase(),
    what: event.target.what.value.toLowerCase()
  };
  // очищаем значения в форме
  event.target.where.value = "";
  event.target.what.value = "";

  // добавляем проверку на наличие в массиве
  // если check не пустой - значит такой элемент уже есть
  const check = taskList.find((el) => el.what === task.what && el.where === task.where);

  if (check) {
    alert("Такая задача уже в списке дел 🙅‍♂️");
  } else {
    // добавляем новый элемент в массив
    taskList.push(task);

    // очищаем ul от элементов предыдущего вызова
    clearList();

    // снова создаем список элементов
    createList();
  }
});
