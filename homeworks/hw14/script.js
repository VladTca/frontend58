const filmForm = document.getElementById("film-form");
const gridContainer = document.getElementById("grid-container");

const filmList = [];

// функция очистки
const deleteFilmsFromPage = () => {
  console.log(gridContainer.hasChildNodes());
  while (gridContainer.hasChildNodes()) {
    gridContainer.firstChild.remove();
  }
};

// функция добавления данных в DOM на основе массива
const addFilmsToPage = () => {
  filmList.map((el, index) => {
    // основа для карточки
    const section = document.createElement("section");
    section.id = index + 1;
    // заголовок
    const h2 = document.createElement("h2");
    h2.textContent = `${el.title}. ${el.year}`;
    // описание
    const p = document.createElement("p");
    p.textContent = `Film created by ${el.director}`;
    // картинка
    const img = document.createElement("img");
    img.src = el.poster;
    // добавляем кнопку удаления
    const btnDel = document.createElement("button");
    btnDel.classList.add("btn-del");
    btnDel.textContent = "❌";
    // вешаем на кнопку слушатель события
    btnDel.addEventListener("click", () => {
      // мутируем исходный массив удалив элемент по индексу
      filmList.splice(index, 1);
      // чистим DOM
      deleteFilmsFromPage();
      // добавляем фильмы
      addFilmsToPage();
    });
    // собираем карточку
    section.append(h2, p, img, btnDel);
    // добавляем на страницу
    gridContainer.append(section);
  });
};

filmForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newFilm = {
    title: event.target.title.value,
    director: event.target.director.value,
    poster: event.target.poster.value,
    year: event.target.year.value
  };

  const check = filmList.find((el) => el.title === newFilm.title && el.director === newFilm.director);

  if (check) {
    alert("this film is already in list 💁‍♂️");
  } else {
    // добавляем фильм в массив
    filmList.push(newFilm);

    // очистили DOM дерево
    deleteFilmsFromPage();

    // добавили фильмы на страницу
    addFilmsToPage();
  }
});
