const musicians = [
    {name: `Илья`, familyName: `Черт`},
    {name: `Миша`, familyName: `Ушаков`},
    {name: `Олег`, familyName: `Гаркуша`}
];

const band = musicians.map((it) =>
    `${it.name} ${it.familyName}`
);

console.info(`Для вас играли:
${band.join(`,\n`)}
До новых встреч!
`);

























// const numbers = [0,1,2,3,4,5,6,7,8,9];
// const evens = [];
// const odds = [];
//
// numbers
//     .map((it) => it * 1)
//     .forEach(
//     (it) => {
//         if (it % 2 === 0) {
//             evens.push(it);
//         } else {
//             odds.push(it);
//         }
//     }
// );
//
// console.log(`[${evens.join(',')}]`);
// console.log(`[${odds.join(',')}]`);
//
// const desc = (left, right) => right - left;
// const numbersAll = evens.concat(odds).sort(desc);
// console.info(`[${numbersAll.join(',')}]`);



















// const createHero = (name) => ({
//     name: name,
//     age: 7,
//     superpower: `Knows JS like a god`
// });
//
// console.log(createHero(`Keks`));





















// const multiply = (left, right) => left * right;
//
// const double = (param) => multiply(param, 2);
//
// console.log(double(6));



















// const multiply = (left, right) => left * right;
//
// // const multiply = left => {
// // // const multiply = (left, right) => {
// //     return left;
// // };
//
// console.log(multiply(4,8));














// const arrowFunction = () => {
//     console.log(`Стрелочная функция in da hause!`);
// };
//
// arrowFunction();















// const getFilterElement = function (caption, amount, isChecked = false) {

//     // if (typeof isChecked === `undefined`) {
//     //     isChecked = false;
//     // }
//
//     return `
//         <label for="filter-${caption.toLowerCase()}">${caption}
//         (${amount})</label>
//         <input
//             type="radio"
//             id="filter-${caption.toLowerCase()}"
//             name="filter"
//             ${isChecked ? " checked" : ""}
//         >
//         <br>
//     `;
// }
//
// document.body.insertAdjacentHTML(`beforeend`,
//     getFilterElement(`All`, 3, true));
//
// document.body.insertAdjacentHTML(`beforeend`,
//     getFilterElement(`Popular`, 3));
//
// document.body.insertAdjacentHTML(`beforeend`,
//     getFilterElement(`Favourite`, 3));















// const username = `Иван`;
// const div = document.createElement(`div`);
// div.innerHTML = `<p> Привет, ${username}! </p>`;
//
// document.body.appendChild(div);















// const scripts = 3;
// const styles = 2;
//
// const template =  `Скриптов - ${scripts};
// стилей - ${styles};
// итого: ${scripts + styles}.`;
//
// console.log(template);
// console.info(template);














// const elements = [
//     document.createElement('a'),
//     document.createElement('a')
// ];
//
// for (let i = 0; i < elements.length; i++) {
//     const double = i * 2;
//     elements[i].onclick = function (evt) {
//         evt.preventDefault();
//         console.log(i + ' * 2 = ' + double);
//     }
// }
//
// elements[0].click();
// elements[1].click();






// let i = 1;
// if (i < 3) {
//     let double = i * 2;
//     console.log(i + ' * 2 = ' + double);
//     i++;
// }
