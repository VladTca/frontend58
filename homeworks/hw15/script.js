const foxImg = document.getElementById('fox-img')
const foxBtn = document.getElementById('fox-btn')

// ! простой вариант без обработки ошибки
// const fetchFox = () => {
//   fetch('https://randomfox.ca/floof/')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//     foxImg.src = data.image
//   })
// }

// ! вариант посложнее с обработкой ошибок
const fetchFox = () => {
  fetch('https://randomfox.ca/floof/')
  .then(res => {
    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`)
    }
    return res.json()
  })
  .then(data => {
    console.log(data)
    foxImg.src = data.image
  })
  .catch(error => {
    console.error('Ошибка при запросе:', error.message)
  })
}

foxBtn.addEventListener('click', fetchFox)

fetchFox()





