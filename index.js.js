/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/
 
let person = {
    name : "ibrahim",
    age: 40,
    city: "kuwait"
};
console.log(person);


// /******************************
// 	Q2) Add a new key email to the person object and assign it an email address.
// ********************************/

person.email= "ibrahimmsafar@gmail.com" ;
console.log(person);

/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/

//  person = {
//     name : "ibrahim",
//     age: 40,
//     city: "kuwait"
// };
const p1 = {name:"Ibrahim",key: "city"};
function hasKey (obj , key ) {
 if (obj[key]) return true;
 else return false;

}
console.log(hasKey(p1 , "name"));

const movies = [
    {
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      year: 1994,
      genre: "Drama",
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: 1972,
      genre: "Crime",
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: 1994,
      genre: "Crime",
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      genre: "Action",
    },
    {
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      year: 1994,
      genre: "Drama",
    },
  ];

  
  /******************************
      Q4) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to count how many movies were released in the year 1994.
  ********************************/
  
//   function filterYear1994 (x) {
//     return x.year == 1994
// }
//     let filters= movies.filter(filterYear1994).length;
//     console.log(filters)

function Movies1994(arr){
    const soso = arr.filter(x => x.year === 1994).length;
    return soso;

}
console.log(Movies1994(movies));
//  my testing ######################
//   function newArrer (item){
//     item = movies.forEach((item) => item.year = 1994);
//     newArrer=item.filter.length
//     return newArrer
//   }

// //   newArrer(movies)
// // console.log()

// ########### 


  /******************************
      Q5) Write a function that updates the genre of the movie "The Dark Knight"
   to "Action/Drama" and returns the modified array of movies.
  ********************************/
  
function updat (arr){
    const newist = arr.map ((x) => {if (x.title === "The Dark Knight"){x.genre = "Action/Drama"};     // why here in x.genre we put only one = ????
    return x
});
console.log(newist);
return newist;
}
updat(movies)





// my testing 


//   function moveUpdate (x){
//   const movie = movies.(3,3)
//    = ("Action/Drama")
//   return moveUpdats
//   }
//   console.log(moveUpdate(movies))

// function updatesMovis (arr){
//     const newArrer = arr.map (x => {
//         if (x.title == "The Dark Knight")
//          x.genre == "Action/Drama";
//     });
//     console.log(newArrer);
// return newArrer
// }

// function updatesMovis (movies){
// updats = movies.(g => g.title === "The Dark Knight");
// return newList (g.genre ="Action/Drama")
// }

// updatesMovis(movies)