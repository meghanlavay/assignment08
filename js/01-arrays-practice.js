//STEP 1
// let movies = ["True Romance", "The Labyrinth", "Pulp Fiction", "Empire Records", "Lost in Translation"];
// console.log(movies[1]);

// //STEP 2
// let movies = new Array(5);
// movies[0] = "True Romance";
// movies[1] = "The Labyrinth";
// movies[2] = "Pulp Fiction";
// movies[3] = "Empire Records";
// movies[4] = "Lost in Translation";
// console.log(movies[0]);

// //STEP 3
// let movies = new Array(5);
// movies[0] = "True Romance";
// movies[1] = "The Labyrinth";
// movies[2] = "Pulp Fiction";
// movies[3] = "Empire Records";
// movies[4] = "Lost in Translation";

// movies.splice(2, 0, "Big Fish");
// console.log(movies.length);

// //STEP 4
// let movies = ["True Romance", "The Labyrinth", "Pulp Fiction", "Empire Records", "Lost in Translation"];
// delete movies[0];
// console.log(movies);

// //STEP 5
// let movies = ["True Romance", "The Labyrinth", "Pulp Fiction", "Empire Records", "Lost in Translation", "Big Fish", "The Shining"];
// for (let movie in movies) {
//         console.log(movies[movie]);
//     }

// STEP 6
// let movies = ["True Romance", "The Labyrinth", "Pulp Fiction", "Empire Records", "Lost in Translation", "Big Fish", "The Shining"];
// for (let movie of movies) {
//         console.log(movie);
//     }

// //STEP 7
// let movies = ["True Romance", "The Labyrinth", "Pulp Fiction", "Empire Records", "Lost in Translation", "Big Fish", "The Shining"];
// movies.sort();
// for (let movie of movies) {
//         console.log(movie);
//     }

// //STEP 8
// let movies = ["True Romance", "The Labyrinth", "Pulp Fiction", "Empire Records", "Lost in Translation", "Big Fish", "The Shining"];
// let leastFavMovies = ["Feardotcom", "The Hangover, Part III", "Cabin Fever"];
// console.log("Movies I like:");
// console.log("");
// for (let movie in movies) {
//     console.log(movies[movie]);    
// }
// console.log("");
// console.log("...");
// console.log("");
// console.log("Movies I regret watching:");
// console.log("");
// for (let movie in leastFavMovies) {
//     console.log(leastFavMovies[movie]);    
// }

// //STEP 9
// let movies = ["True Romance", "The Labyrinth", "Pulp Fiction", "Empire Records", "Lost in Translation", "Big Fish", "The Shining"];
// let leastFavMovies = ["Feardotcom", "The Hangover, Part III", "Cabin Fever"];
// movies = movies.concat(leastFavMovies);
// console.log(movies.sort().reverse());

// //STEP 10
// let movies = ["True Romance", "The Labyrinth", "Pulp Fiction", "Empire Records", "Lost in Translation", "Big Fish", "The Shining"];
// let leastFavMovies = ["Feardotcom", "The Hangover, Part III", "Cabin Fever"];
// movies = movies.concat(leastFavMovies);
// console.log(movies.sort().reverse());
// movies = movies.pop();
// console.log(movies);

// //STEP 11
// let movies = ["True Romance", "The Labyrinth", "Pulp Fiction", "Empire Records", "Lost in Translation", "Big Fish", "The Shining"];
// let leastFavMovies = ["Feardotcom", "The Hangover, Part III", "Cabin Fever"];
// movies = movies.concat(leastFavMovies);
// console.log(movies.sort().reverse());
// movies = movies.shift();
// console.log(movies);

// //STEP 12
// let movies = ["True Romance", "The Labyrinth", "Pulp Fiction", "Empire Records", "Lost in Translation", "Big Fish", "The Shining"];
// let leastFavMovies = ["Feardotcom", "The Hangover, Part III", "Cabin Fever"];
// movies = movies.concat(leastFavMovies);
// console.log(movies);
// console.log(movies.indexOf("Feardotcom"));
// console.log(movies.indexOf("The Hangover, Part III"));
// console.log(movies.indexOf("Cabin Fever"));
// movies.splice(7, 9, "Reservoir Dogs", "The Lorax", "Up");
// console.log(movies);

// //STEP 13
// let movies = [["True Romance", 1], ["Lost in Translation", 2], ["Pulp Fiction", 3], ["The Labyrinth", 4], ["Empire Records", 5]];
// for (let movie of movies) {
//     let favorites = movie.filter((value) => {
//         return typeof value === "string";
//     });
//     console.log(favorites);
// }

// //STEP 14
// let employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];
// let showEmployee = function (arr) {
//     for (let employee of arr) {
//         console.log(employee.toUpperCase())
//     }
// }

// console.log("Employees:");
// console.log("");
// showEmployee(employees);

// //STEP 15
// let filterData = (arr) => {
//         return arr.filter((value) => {
//             return (value !== false && value !== null && value != 0 && value != '')
//         });
// }
//     console.log(filterData([58, '', "abcd", true, null, false, 0]));

// //STEP 16
// let num = [1, 3, 5, 7, 9, 11, 13, 15, 17, 21];
// let randomNum = (arr) => {
// let selectRandom = Math.floor(Math.random() * arr.length);
//     return arr[selectRandom];
// };

// console.log(randomNum(num));

// //STEP 17

let largestNum = (arr) => {
    arr.sort();
    return arr[0];
}

console.log(largestNum([51, 25, 113, 2, 77, 33, 42]));