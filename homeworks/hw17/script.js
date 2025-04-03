const gridContainer = document.getElementById('grid-container');
const loader = document.querySelector('.loader');
const btnReset = document.querySelector('#btn-reset');
const btnSubmit = document.querySelector('#btn-submit');
const btnClear = document.getElementById('clearButton');
const inputAmount = document.getElementById('amount');


async function getProducts() {
    try {
        loader.classList.remove('hide');
        gridContainer.classList.add('hide');
        gridContainer.innerHTML = '';

        let amount = parseInt(inputAmount.value, 10); // Получаем актуальное значение

        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) throw new Error(`status: ${res.status} ${res.statusText || ''}`);

        const data = await res.json();
        if (isNaN(amount)) {
            amount = data.length;
        }
        data.slice(0, amount).forEach(product => {
            const section = document.createElement('section');
            const h2 = document.createElement('h2');
            h2.textContent = product.title;
            const img = document.createElement('img');
            img.src = product.image;
            section.append(h2, img);
            gridContainer.append(section);
        });

        gridContainer.classList.remove('hide');
    } catch (error) {
        console.error(`Error: ${error.message}`);
    } finally {
        loader.classList.add('hide');
    }
}

setTimeout(() => getProducts(), 1500);

btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    getProducts().catch(err => {
        console.error('Ошибка загрузки:', err.message);
    });


});


btnReset.addEventListener('click', () => {
    // убирает hide (когда этот класс есть)
    loader.classList.toggle('hide')
    // добавляет hide (когда этого класса нет)
    gridContainer.classList.toggle('hide')
    setTimeout(getProducts, 1500)
})

btnClear.addEventListener('click', () => {
    gridContainer.innerHTML = ''; // Очищаем поле
});