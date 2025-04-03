// * повторяем про разницу массивов и объектов

// let person = { name: "Steve", lastname: "Jobs", company: "apple", isBusinessman: true };
// let arr = [person, person];
// let arr1 = ["Steve", "Jobs", "apple", true];

// ! Arrays methods - методы массивов

const brothers = [
  { name: "Gandalf", height: 160, hasMagic: true, race: "maia", age: 2500 },
  { name: "Legolas", height: 170, hasMagic: true, race: "elf", age: 900 },
  { name: "Frodo", height: 60, hasMagic: false, race: "hobbit", age: 30 },
  { name: "Saruman", height: 155, hasMagic: true, race: "maia", age: 2000 },
  { name: "Aragorn", height: 160, hasMagic: false, race: "human", age: 120 },
  { name: "Sam", height: 63, hasMagic: false, race: "hobbit", age: 32 }
];

const hero = { name: "Arwen", height: 175, hasMagic: true, race: "elf", age: 850 };

brothers.push(hero)

// console.log(brothers)

// * 1. map()
// не мутирующий - не изменит исходный массив
// метод возвращает новый массив с кол-вом элементов исходного
// используется для создания нового массива на основе предыдущего
// используется для последовательных операций без изменения над элементами исходного массива
// метод итерируется по элементам исходного массива

// * создаем массив из имен наших героев
// передаем в качестве аргумента стрелочную функцию
// за место параметра el на каждой итерации будут приходить последовательно все элементы исходного массива
// значение после '=>' - это возвращенное значение функции - оно и станет новым элементом массива

const brothersNames = brothers.map(el => el.name)

// * массив с возрастами всех героев

const brothersAges = brothers.map(brother => brother.age)


// console.log(brothers)
// console.log(brothersNames)
// console.log(brothersAges)


// * создать массив из строк с именами и возрастом

const namesAndAges = brothers.map(hero => hero.name + ': ' + hero.age )

// console.log(namesAndAges)


// * 2. filter()
// не мутирующий метод
// возвращает новый массив элементов удовлетворяющих заданному условию
// передаем аргументом стрелочную функцию с условием
// если элементов подходящих условию нет - возвращает пустой массив

const brothers1 = brothers.filter(el => (el.age > 100) && (el.hasMagic === false))

// console.log(brothers1)

const elfs = brothers.filter(el => el.race === 'elf')

// console.log(elfs)



// * 3. find()

// не мутирующий
// возвращает первый элемент удовлетворяющий условию
// если такого элемента нет - возвращает undefined

const brother1 = brothers.find(el => el.name === 'Saruman')

// console.log(brother1)



// * 4. reduce()
// не мутирующий метод
// для поэтапных операций со элементами массива
// первый аргумент - стрелочная функция с описанием действия
// второй аргумент - начальное значение аккумулируемой переменной (точка отсчета)

// * в примере ниже считает сумму возрастов всех братьев

const sumOfAges = brothersAges.reduce((acc, current)=> acc + current, 1000)

// console.log(brothersAges)
// console.log(sumOfAges)

// * сложение строк с reduce()

const brothersNames1 = brothers.reduce((acc, el) => acc + el.name + ', ', 'Братство Кольца: ')

// console.log(brothersNames1)


// * slice()
// не мутирующий
// обрезает массив и возвращает новый измененный
// передаете два аргумента:
// индекс с которого обрезаем (включительно)
// индекс до которого (не включительно) - не обязательный аргумент (по умолчанию обрежет до конца массива)

const shortBrothers = brothers.slice(1, 4)

// console.log(shortBrothers)

const lastTwoBrothers = brothers.slice(-2)

// console.log(lastTwoBrothers)

// ! не мутирующие методы массивов можно использовать по цепочке
// каждый следующий метод будет вызван у возвращенного значения предыдущего

const result = brothers.slice(-2).map(el => el.age).reduce((acc, el) => acc + el, 0)

// console.log(result)

// ! функции - functions

// функции позволяют переиспользовать написанный код
// функции помогают организовывать и структурировать код

// * function declaration
// объявление функции через ключевое слово function
// переменную в круглых скобках называют параметром


function greeting(value) {
  // console.log('Hello, ' + value + '!')
  return 'Hello, ' + value + '!'
}

// * чтобы функция заработала ее нужно вызвать
// передаваемое на место параметра значение при вызове функции называют аргументом

// * функции могут быть вызваны много раз с разными аргументами

greeting('arrays')
greeting('functions')
greeting('objects')

let returnedValue = greeting('arrays')

// console.log(returnedValue)

// ! функции без return возвращают undefined - будьте внимательны
// также функции объявленные с помощью function могут быть вызваны до объявления - это называется 'поднятие' (hoisting)


// * стрелочные функции - arrow function
// называются так из-за символа =>
// такие функции не используются до объявления (нет hoisting)

// * стрелочные функции из простой операции в одну строку не требуют return - возвращенным значением становится результат операции после =>

const sum = (num1, num2) => num1 + num2;

const result1 = sum(42, 30)

// console.log(result1)

// * если мы хотим написать операцию из нескольких строк нам нужны фигурные скобки
// ! а в фигурных скобках нужно будет не забыть написать return
// иначе вернется undefined

const multiply = (a, b, c) => {
  const result = a * b * c
  return `${result} - это результат умножения ${a}, ${b} и ${c}`
}

const result2 = multiply(22, 25, 16)

// console.log(result2)
// console.log(multiply(30, 20, 5))





