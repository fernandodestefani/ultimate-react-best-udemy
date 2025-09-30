// array of objects is the most common data structure that we find in front-end development
const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring

// const book = getBook(1);
// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
//   book;

// const [primaryGenre, secondaryGenre, ...otherGenres] = genres; // rest operator

// /* Objeto → {} (chave/valor, pega pelo nome da propriedade)
// Array → [] (ordem, pega pela posição) */

// const newGenres = [...genres, "epic fantasy"]; // spread operator for arrays

// // spread operator for update and create new properties in objects
// const updatedBook = {
//   ...book,
//   // adding a new property
//   moviePublicationDate: "2001-12-19",
//   // overwriting an existing property
//   pages: 1210,
// };

// // Template literals
// const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${publicationDate.split('-')[0]}`

// // Ternaries instead of if/else statements
// // an operator is a bit similar to a function: it always return a value
// const pagesRange = pages > 1000 ? 'over a thousand' : "less than 1000"
// console.log(`The book has ${pagesRange} pages`);
// // if/else statement is as the name says a statement, so does NOT return a value; which is different from ternaries that are considered expressions, so we could use them in  template literals.

// // Arrow functions
// // useful for single-line functions
// /*
// function getYear(str) {
//   return str.split("-")[0]
// } */

// const getYear = str => str.split("-")[0]

// console.log(getYear(publicationDate))

// // Short Circuiting And Logical Operators
// // And - uses as an if
// console.log(true && "some string") // returns the second value
// console.log(false && "some string") // returns the first one - short circuiting
// console.log(hasMovieAdaptation && "This book has a movie")
// // falsy value -> 0, "", null, undefined
// console.log('fernando' && "some string") // here fernando is a truthy value
// console.log(0 && 'some string') // short circuiting, because 0 is a falsy value

// // Or - work in the opposite way
// console.log(true || 'some string') // returns true
// console.log(false || 'some string')
// // it is used to set a default value
// const spanishTranslation = book.translations.spanish || "not translated";
// // be careful when the value is 0, because this is a falsy value. to solve this js added a new operator called the nullish coalescing operator. it works very similar to the or operator, but it does also short circuiting for falsy values. Only return the second value when the first value is null or undefined
// console.log(0 ?? "no data")

// // Optional chaining
// function getTotalReviewCount(book){
//   const goodreads = book.reviews?.goodreads?.reviewsCount;
//   const librarything = book.reviews?.librarything?.reviewsCount ?? 0; // it is useful when we are not sure that all the values that we expect exist in an object
//   return goodreads + librarything;
// }
// console.log(getTotalReviewCount(book));

// The array map method - creates a new array based on the original array with some operation aplied to each element

// const x = [1, 2, 3, 4, 5].map(el => el * 2);
// console.log(x)

/* const books = getBooks();
const titles = books.map((book) => book.title);
console.log(titles);

//instead of using returning on an array function, we can use (). in this case {} is not a block of code, it represents an object
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));

console.log(essentialData);

// The array filter method - filters out some array elements; instead of returning the value that we want, we need to return a condition which either will be true ou false; if the result is true, then the current element will go into the filtered array
const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooksWithMovie);

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
console.log(adventureBooks);

// The array reduce method - it reduces the entire array to just one value. It has two parameters -> callback function with acc as a parameter and starter value
const pagesAllBooks = books.reduce((acc, book) => book.pages + acc, 0);
console.log(pagesAllBooks);

// The array sort method - this is not a functional method, because it mutates the original array. One way to deal with that is first take a copy of the array
const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b); // ascending way
const sorted2 = arr.slice().sort((a, b) => b - a); // descending way
console.log(sorted, sorted2, arr);

const sortedByPages = books
  .slice()
  .sort((a, b) => b.pages - a.pages)
  .map((book) => book.title);
console.log(sortedByPages);

// Working with immutable arrays
// 1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};
const booksAfterAdd = [...books, newBook]; // spread operator

// 2) Delete a book object from the array
// always new arrays
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3); // filter

// 3) Update a book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? {...book, pages: 1210} : book
); // map */

// Asynchronous JS: Promises
// fetch returns a promise, and as long as it is fulfilled, we can handle it by using then and converting the data to a JS object. By doing so it will return another promise.
/* fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data)); */

// Asynchronous JS: Async/Await
// it does the same thing above in a cleaner way, where the then handlers go away

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos") // for the first time in JS, we do actually have a way of stopping and pausing the code inside a function. By doing this, it makes the function looks a lot more normal again, a lot more synchronous JS code, because then we can simply store the result of this here into a variable.
  const data = await res.json();
  console.log(data) 
  // the waiting only works inside this async function
  // the result value of an async function is always a promise
}

getTodos()
