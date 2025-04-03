### Homework

Для каждого задания создайте отдельную функцию — используйте возвращенное значение.
**У вас должна быть как минимум одна стрелочная функция и одна function declaration функция.**

Задание 1
У вас есть массив объектов:

```js
const starWarsHeroes = [
    { name: "Anakin Skywalker", age: 30, isJedi: true },
    { name: "Luke Skywalker", age: 25, isJedi: true },
    { name: "Han Solo", age: 35, isJedi: false },
    { name: "Princess Leia", age: 30, isJedi: false },
    { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];
```

Используйте методы массивов.

1.1 Создайте на основе старого массива новый массив объектов по образу:
`[{ name: "Luke Skywalker", isJedi: true }, { name: "Han Solo", isJedi: false }, ...]`

1.2 Создайте новый массив с джедаями младше 40 лет

1.3 Посчитайте возраст всех джедаев

1.4 Повысьте возраст героев на 10 лет

1.5 Создайте новый массив, где "Anakin Skywalker" заменен на:
`{ name: "Darth Vader", isJedi: false, age: 50 }`

Во всех заданиях обязательно оборачивайте логику в функции.
Как минимум одна из функций должна быть **стрелочной**, а одна — **function declaration**.
