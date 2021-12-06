const request = require('request');
const breedToFetch = process.argv[2];
console.log(breedToFetch);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedToFetch}`;


request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  }
  const result = JSON.parse(body)[0];
  console.log(result.description);
});