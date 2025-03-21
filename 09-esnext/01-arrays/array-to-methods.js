

const heroes = [ 'Batman', 'Superman', 'Flash', 'Aquaman'];
// heroes.sort();

// const heroesCopy = heroes;

// const sortedHeroes = heroes.toSorted();
// heroes.reverse();

// const reversedHeroes = heroes.toReversed();

// const deletedHeroes = heroes.splice(0, 2, 'Green Lantern');
const deletedHeroes = heroes.toSpliced(0, 2, 'Green Lantern');

console.table(heroes);
// console.table(heroesCopy);
// console.table(sortedHeroes);
// console.table(reversedHeroes);
console.table(deletedHeroes);
