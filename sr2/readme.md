Создайте новую страницу сайта интернет-магазина с предыдущего урока. Назовите её `Beauty & Tech`, это название должно отображаться в `header`. Предыдущая страница должна называться `Wear & Carry`.

На новой странице добавьте:

- `header` с  навигацией.
- `main` с контентом.
- `footer`.

Получайте данные о продуктах с помощью API `https://dummyjson.com/products`. Добавьте форму, в которой пользователь сможет задать параметр `limit` для запроса, например: `https://dummyjson.com/products?limit=10`.

Добавьте загрузчик (loader), который отображается во время получения данных. Можно использовать тот, что был в уроке, или сделать собственный.

Реализуйте валидацию: значение поля `limit` должно быть числом от 1 до 30. Если введено некорректное значение, отображайте сообщение об ошибке и не отправляйте запрос.

* Обработайте возможные ошибки при получении данных с сервера через `try...catch`, выводите сообщение об ошибке пользователю. Выведите сообщение новым блоком под формой на странице (используйте класс модификатор с display:none)

* * реализуйте 'бургер меню' - на экранах смартфонов от 400px и меньше по ширине вместо слов в навигации должен отображаться символ '☰' при нажатии на которой меню появляется и исчезает (вам помогут media queries)

* * * дополнительно: добавьте кнопку "добавить в корзину" для каждого продукта. При нажатии продукт должен добавляться в список корзины, которая отображается в углу экрана (например, в правом верхнем углу в `header` или во всплывающем блоке). В результате получится счетчик выбранных пользователем товаров.