document.addEventListener('DOMContentLoaded', async () => {
    const form = document.getElementById('products-form');
    const limitInput = document.getElementById('limit');
    const loader = document.getElementById('loader');
    const productsList = document.getElementById('products-list');
    const cartButton = document.getElementById('cart-button');
    const cartModal = document.getElementById('cart-modal');
    const cartModalContent = document.getElementById('cart-modal-content');
    const validationError = document.getElementById('validation-error');
    const serverError = document.getElementById('server-error');
    const cartCountElem = document.getElementById('cart-count');
    let cartCount = 0;
    const addToCart = [];


    function showCart() {
        cartModal.style.display = 'block';
        cartModalContent.innerHTML = '';
        if (addToCart.length === 0) {
            cartModalContent.innerHTML = `<p>Ваша корзина пуста</p>`;
            return;
        }
        addToCart.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('cart-product-item');
            productDiv.innerHTML = `
                <h4>${product.title}</h4>
                <img src="${product.thumbnail}" alt="${product.title}"/>
                <p>Цена: ${product.price} USD</p>
                <button class="remove-from-cart">Удалить</button>
            `;
            productDiv.querySelector('.remove-from-cart').addEventListener('click', () => {
                removeFromCart(product);
            });
            cartModalContent.appendChild(productDiv);
        });
    }

    function removeFromCart(productToRemove) {
        const index = addToCart.findIndex(product => product.id === productToRemove.id);
        if (index !== -1) {
            addToCart.splice(index, 1);
            cartCount--;
            cartCountElem.textContent = cartCount;
            showCart();
        }
    }

    document.querySelector('#cart-modal-close').addEventListener('click', () => {
        cartModal.style.display = 'none';
    });
    document.querySelector('#cart-modal-clear').addEventListener('click', () => {
        cartCount = 0;
        cartCountElem.textContent = cartCount;
        addToCart.length = 0;
        cartModal.style.display = 'none';
    });


    cartButton.addEventListener('click', showCart);

    document.querySelector('.burger-menu').addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.toggle('active');
    });

    async function loadProducts(limit = null) {
        validationError.style.display = 'none';
        serverError.style.display = 'none';
        productsList.innerHTML = '';

        loader.style.display = 'block';

        try {

            const url = limit ? `https://dummyjson.com/products?limit=${limit}` : `https://dummyjson.com/products`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }

            const data = await response.json();
            await new Promise((resolve) => setTimeout(resolve, 1000));

            console.log(data);

            data.products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product-item');
                productDiv.innerHTML = `                    
                    <h4>${product.title}</h4>
                    <ul>
                        <li>Описание: ${product.description}</li>
                        <li>Цена: ${product.price} USD</li>
                        <li>Скидка: ${product.discountPercentage}%</li>
                        <li>Бренд: ${product.brand}</li>
                        <li>Гарантия: ${product.warrantyInformation || 'не указана'}</li>
                        <li>Доставка: ${product.shippingInformation || 'не указана'}</li>
                        <li>Статус наличия: ${product.availabilityStatus || 'не указан'}</li>
                    </ul>
                    <img src="${product.thumbnail}" alt="Изображение продукта"/>
                    <button class="add-to-cart">Добавить в корзину</button>`;
                productDiv.querySelector('.add-to-cart').addEventListener('click', () => {
                    cartCount++;
                    cartCountElem.textContent = cartCount;
                    addToCart.push(product);
                    console.log(addToCart);
                });
                productsList.appendChild(productDiv);
            });
        } catch (error) {
            serverError.style.display = 'block';
            serverError.textContent = error.message;
        } finally {
            loader.style.display = 'none';
        }
    }

    await loadProducts();

    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const limit = Number(limitInput.value);
            if (!/^\d+$/.test(limitInput.value) || limit < 1 || limit > 30) {
                validationError.style.display = 'block';
                validationError.style.textAlign = 'center';
                validationError.style.color = 'red';
                validationError.style.fontSize = '30px';
                validationError.textContent = 'Введите корректное число от 1 до 30.';
                return;
            }

            validationError.style.display = 'none';

            await loadProducts(limit);
        });
    }

});