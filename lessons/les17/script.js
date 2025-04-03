// ! обработка запроса в async /await с try /catch
const gridContainer = document.getElementById('grid-container')
const loader = document.querySelector('.loader')
const btnReset = document.querySelector('#btn-reset')

async function getProducts() {
    // мы пробуем обработать запрос в блоке try и если получим ошибку то перейдем в блок catch
    try {
        const res = await fetch('https://fakestoreapi.com/products')
        // проверяем поле ok у значений 'сырых' данных, которые получили
        if (!res.ok) throw new Error (`status :${res.status} ${res.statusText ? res.statusText : ''}`)
        const data = await res.json()
        // выключаем loader добавляя ему класс hide
        loader.classList.toggle('hide')
        // этот метод сработает только если класс hide есть у контейнера
        gridContainer.classList.remove('hide')

        data.map(product => {
            const section = document.createElement('section')
            const h2 = document.createElement('h2')
            h2.textContent = product.title
            const img = document.createElement('img')
            img.src = product.image
            section.append(h2, img)
            gridContainer.append(section)
        })
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

setTimeout(getProducts, 1500)

btnReset.addEventListener('click', ()=> {
    // убирает hide (когда этот класс есть)
    loader.classList.toggle('hide')
    // добавляет hide (когда этого класса нет)
    gridContainer.classList.toggle('hide')
    setTimeout(getProducts, 1500)
})