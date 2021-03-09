//
var pools = document.querySelectorAll('.pool');
var blocks = document.querySelectorAll('.el');
// удаление и перенос блоков из одного родительского блока в другой
pools[0].removeChild(blocks[0]);
pools[1].appendChild(blocks[0]);
pools[1].appendChild(blocks[1]);
// поменять местами
pools[1].appendChild(blocks[0]);
// добавить в середину еще один блок. Сначала указывается тот блок которые надо добавить blocks[3], а после блок перед которым добавить blocks[0]
pools[1].insertBefore(blocks[3], blocks[0]);
// также как appendChild
pools[1].insertBefore(blocks[3], null);
//замена блока
var replaced = pools[0].replaceChild(blocks[2], blocks[4]);
pools[0].appendChild(replaced);
// копирование блока
pools[0].appendChild(blocks[0].cloneNode());
// копирование блока со всеми вложенными элементами (объектами) Глубокое копирование
pools[0].appendChild(blocks[0].cloneNode(true));

// создание DOM-элементов
// строковое
var heroName = document.querySelector('b');

heroName.textContent = 'Кощей Бессметный';
// точечная передача разметки DOM-дереов не перерисовывается, парметр afterbegin перед открывающего тега beforbegin после открывающего тега, после закр тега afterend
document.body.insertAdjacentHTML("afterbegin", '<h1>Привет!</h1>');
// разметка останется прежней и можно добавить текстовое значение в переменную
heroName.textContent = 'Баба Яга';

