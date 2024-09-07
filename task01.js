// 3. Написать файл скрипта, который генерирует три числа, соответствующие 
// значениям высоты, длины и ширины комнаты. Отобразить в консоли:
// a. Площадь стен комнаты
// b. Объём комнаты
// c. *Объём комнаты за вычетом случайно сгенерированного количества чисел, 
// которые определяет объёмы случайно зашедших в комнату людей :)
// Запустить скрипт через node.js посредством консоли.

function getRandomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}

let heights = getRandomInt(2, 5);
let lengths = getRandomInt(5, 15);
let widths = getRandomInt(5, 10);

let humans = getRandomInt(4, 12);
let humansVolume = (humans) => {
    let result = 0;
    for (let i = 0; i < humans; i++) {
        result += getRandomInt(1, 3)
    }
    return result;
}

let roomVolume = widths * lengths * heights
console.log(`Площадь стен комнаты: ${2 * (heights * (lengths + widths) + widths * lengths)}м².`);
console.log(`Объём комнаты: ${roomVolume}м³.`);
console.log(`Объём комнаты с людьми: ${roomVolume - humansVolume(humans)}м³.`);