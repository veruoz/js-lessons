//console.log([ ] + false - null + true);
//let y = 1; let x = y = 2; alert(x);
//console.log([ ] + 1 + 2);
//alert( "1"[0] )
//console.log(2 && 1 && null && 0 && undefined)

console.log(0 || "" || 2 || undefined || true || falsе);
//alert( +"Infinity" );
//console.log
//console.log
//console.log


// условные операторы
var personAge = 16
var message

if (personAge < 18) {
    message = 'Человек еще не совершеннолетний'
} else {
    message = 'Человек совршенно летний'
}

console.log(message)

// тернальные операторы ? : является альтернативой if else

var personAge = 20

var message = personAge < 18
    ? 'Человек еще не совершеннолетний'
    : 'Человек совршенно летний'

console.log(message)

// Функции

var carName = 'Ford'
var carYear = 2008
var personYear = 1990

if ((2018 - carYear) < 10) {
    console.log('Возраст меньше 10 лет')
} else {
    console.log('Возраст больше 10 лет')
}
if ((2018 - personYear) < 10) {
    console.log('Возраст меньше 10 лет')
} else {
    console.log('Возраст больше 10 лет')
}

// fuction название (параметр)
function calculateAge(year) {
    var currentYear = 2010
    var result = currentYear - year
    return result
}
// вызов функции
if (calculateAge(carYear) < 10) {
    console.log('Возраст меньше 10 лет')
} else {
    console.log('Возраст больше 10 лет')
}

if (calculateAge(personYear) < 10) {
    console.log('Возраст меньше 10 лет')
} else {
    console.log('Возраст больше 10 лет')
}

// стрелочная функция
let calc = (a,b) => a+b

console.log(calc(3,4))
console.log(calc(8,4))


// ДЗ 1
function checkAndLogAge(year, name, compareTo) {
    if (calculateAge(year) < compareTo) {
        console.log('Возраст ' + name + ' меньше ' + compareTo + ' лет')
    } else {
        console.log('Возраст ' + name + ' больше ' + compareTo + ' лет')
    }
}

checkAndLogAge(carYear, 'машины', 8)
checkAndLogAge(personYear, 'человека', 30)


// анонимная функция - внутри переменной, которая становится функцией

var sayHelloTo = function (name1) {
    console.log('Привет, ' + name1)
}

sayHelloTo('Игорь')


// Функцию можно вызвать до ее объявления, в отличие от анонимной
sayHelloTo('Елена')

function sayHelloTo(name2) {
    console.log('Привет, ' + name2)
}

sayHelloTo('Елена')

var newMessage = 'Hello World!'

console.log(newMessage.length)
console.log(newMessage.toLocaleLowerCase())
console.log(newMessage.toLocaleUpperCase())
console.log(newMessage.charAt(1))
console.log(newMessage.indexOf('World')) // 6 позиция
console.log(newMessage.indexOf('world')) // -1 значит, что не найдено
console.log(newMessage.substr(1, 4))
console.log(newMessage.substr(newMessage.indexOf('World'), 5))
console.log(newMessage.substring(1))

// массивы

var cars = ['ford', 'mazda', 'bmw', 'kia']

console.log(cars)
console.log(cars[2])

// добавить новый элемент

cars.push('audi')
console.log(cars)
// удаление последнего элемента
cars.pop()
console.log(cars)

// удалить и возвращать 1 элемент
var ford = cars.shift()
console.log(cars, ford)

// добавляет в начало
cars.unshift('audi')
console.log(cars)

console.log(cars.indexOf('kia'))

// объекты
var person = {
    name: 'Petr',
    year: 1990,
    family: ['John', 'Mike'],
    car: {
        year: 2010,
        model: 'bmw'
    },
    calculateAge: function () {
        var age = 2018 - this.year // = person.year
        console.log('Возраст', age)
    }
}

console.log(person)
console.log(person.name)
console.log(person['year'])
var field = 'car'
console.log(person[field].year)

person.year = 1993

console.log(person)

person.calculateAge()

var numbers = [1, 2, 3, 4, 5]

for (var i = 0; i < 5; i++) {
    console.log(numbers[i])
}

numbers.push('Not a Number') // добавить элемент

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) { // показать все четные значения
        console.log(numbers[i])
    }
}

// то же самое
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) { // показать все четные значения
        continue // опрератор пропускает значение которое выполняет условие
    }
    console.log(numbers[i])
}
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) { // показать все четные значения
        break // опрератор останавливает проверку при выполнении условия
    }
    console.log(numbers[i])
}