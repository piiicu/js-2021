let bubbles = [60, 59, 48, 71, 22, 45, 51, 67, 70, 38];

let fruits = ["tomato", "ananas", "mango", "orange", "cucumber"];

bubbles.sort();
max = bubbles.pop();

fruits.sort();
fruits.reverse();

bubbles[0];
fruits[2];

console.log(max);
console.log(fruits);

// facem o lista
for (let index = 0; index < fruits.length; index++) {
  const fruit = fruits[index];
  let listItem = document.createElement("li");
  listItem.innerText = fruit;
  document.querySelector("ul").appendChild(listItem)
}
// sau mai simplu (mai nou) cu "forOf"
for (const fruit of fruits) {
    let listItem = document.createElement("li");
    listItem.innerText = fruit;
    document.querySelector("ul").appendChild(listItem)
}
// sau cu "forEach"
fruits.forEach(fruit => {
    let listItem = document.createElement("li");
    listItem.innerText = fruit;
    document.querySelector("ul").appendChild(listItem)
});
// sau cu "forIn" - itereaza doar pe index, pe numerele listei
for (const fruit in fruits) {
    let listItem = document.createElement("li");
    listItem.innerText = fruit;
    document.querySelector("ul").appendChild(listItem)
}