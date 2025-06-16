// filter: filter out(collect) specific data

// Using Objects look for the p.author
let posts = [
  { title: "post 1", author: "Danny" },
  { title: "post 2", author: "Joe" },
  { title: "post 3", author: "Sarah" },
  { title: "post 4", author: "Molly" },
  { title: "post 5", author: "Billy" },
  { title: "post 6", author: "Danny" },
  { title: "post 7", author: "Joe" },
  { title: "post 8", author: "Danny" },
  { title: "post 9", author: "Molly" },
  { title: "post 10", author: "Martin" },
  { title: "post 11", author: "Mitch" },
  { title: "post 12", author: "Mary" },
];

// return all posts from 'Danny'

console.log(dannyPosts);

// return all posts from names starting with the letter 'M'

console.log(mNames);

// return all posts from names starting with the letter 'M' without duplicated names

console.log(uniqueMNames);

// return all posts NOT by 'Danny'

console.log(nonDannyPosts);

// return all posts with even numbered titles

console.log(evenPosts);

//============================================================
/* 
return all posts from 'Danny'
let dannyPosts = names1.filter(name => name.author === "Danny");
console.log(dannyPosts);

return all posts from names starting with the letter 'M'
let mNames = names1.filter(name => name.startsWith("M"));
console.log(mNames);

return all posts from names starting with the letter 'M' without duplicated names


return all posts NOT by 'Danny'
let nonDannyPosts = names1.filter(post => post.author !== "Danny");
console.log(nonDannyPosts);

return all posts with even numbered titles
let evenPosts = posts.filter(post => parseInt(post.title.split(" ")[1]) % 2 === 0);
console.log(evenPosts); 
*/
