// NON-MUTATING
// map: loop over each item in the array, run a callback function, and 'map' it to a NEW array
let names1 = ["Danny", "Joe", "Sarah", "Molly", "Billy"];
let upperCasedNames = names1.map(n => n.toUpperCase());
console.log(names1);
console.log(upperCasedNames);



//== you can use numbers =====================================
let numbers = [1, 2, 3, 4, 5, 6];
let doubled = numbers.map((n) => n * 2);
console.log(numbers);
console.log(doubled);
/* 
RESULT: 
[ 2, 4, 6, 8, 10, 12 ] */


// I used .map() on my se_project_react in the function App.js>handleCardLike:
//   to update a card: addCardLike, removeCardLike 
//      .map() iterates through the cards array, and in the callback function...
//      item._id === id: compares the current item._id with the id returned from the API
//      checks if the card was just liked/disliked:
//      if yes: replace the card with the updated card from the API
//      if no: keep the card(item)
//          cards.map((item) => (item._id === id ? updatedCard : item));

// I used the combination of .map() and .filter() in the functions:
//  Main.js>Main()
//      Used .filter() to loop through clothingItems keeping ONLY the items that match weatherData.type
//      Used .map() over the filtered items to return the <ItemCard /> components
//  ClothesSection.js>ClothesSection()
//      Used .filter() to loop through clothingItems keeping ONLY the items owned by the currentUser
//      Used .map() over the filtered items to return the <ItemCard /> components