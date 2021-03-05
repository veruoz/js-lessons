let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseEcpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется?', '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 20) {
            console.log("done");
            appData.expenses[a] = b;
        } else {

        }
    }
}

chooseEcpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed();

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}

function checkSaving() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
        percent = +prompt('Под какой процент?');

        appData.monthIncome = save/100/12*percent;
        alert('Доход с вашего депозита: ' + appData.monthIncome);
    }
}

checkSaving();

/* switch (appData.moneyPerDay) {
    case appData.moneyPerDay < 100:
        console.log("Средний уровень достатка");
        break;
    case appData.moneyPerDay > 100 && appData.moneyPerDay < 2000:
        console.log("Высокий уровень достатка");
        break;
    case appData.moneyPerDay > 2000:
        console.log("Высокий уровень достатка");
        break;
    default:
        console.log("Произошла ошибка");
        break;
} */


/* типы данных
number
strung
Symbol()
Boolean
Object
null
undefined */
