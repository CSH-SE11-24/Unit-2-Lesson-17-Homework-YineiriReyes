const prompt = require('prompt-sync')()
// Create an object that represents your favorite restaurant with the keys name (string), cuisine (string), and rating (number)
let restaurant={
  name:'Olive Garden',
  cuisine:'pasta',
  raiting:8
}

// Console log the restaurant's name using the object
console.log(restaurant.name)


// Add a new key called location and add the restaurant's location
restaurant.location='new york'


// Change the rating of the restaurant to increase it by one

restaurant.rating +=1

// Add a new key called test and set the value to null

restaurant.test=null

// Delete the test key
delete restaurant.test


// Console log the object to see if the test key is gone

console.log(restaurant)


// Loop through the object and print every key and element.
// It should look like: 
// name is Ugly Baby
// cuisine is thai
// rating is 10
// location is 407 Smith St, Brooklyn

const restaurant2={
  name:"ugly baby",
  cuisine:'thai',
  rating:10
}



