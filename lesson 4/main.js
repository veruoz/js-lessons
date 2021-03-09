let options = {
    width: 1024,
    height: 768,
    name: 'test'
};

console.log(options.name);
// добавление нового свойства объекта
options.bool = false;
options.colors = {
    border: 'black',
    bg: 'red'
};

// удаление свойства объекта
delete options.bool;

console.log(options);

// перечисление свойств
for (let key in options) {
    console.log('Свойства ' + key + ' имеет значение ' + options[key]);
}
// количество свойств
console.log(Object.keys(options).length);

let arr = [1, 2, 3, 4, 5]
console.log(arr)

// рекурсия
var washItems = function(itemsLeft){
    while (itemsLeft-- > 0) {
        console.log('В раковине осталось ' + itemsLeft + ' предметов')
    }
};

washItems(10);