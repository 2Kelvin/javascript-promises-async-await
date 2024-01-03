const myFetchePromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

console.log(myFetchePromise);

/*
myFetchePromise.then((response) => {
    // checking if response/ promise status is ok
    console.log(`Response status is: ${response.status}`);

    // converting the response object to JSON to easily work with the response data
    const jsonResponseData = response.json();

    // displaying the data
    jsonResponseData.then(data => {
        console.log(data);
    })
});
*/

// the code above is the same as this
// here we're using promise chaining
/*
myFetchePromise.then((response) => response.json()).then((data) => {
    console.log(data[0]);
});
*/

// the code in then runs if the async request is successful
// while the code in catch runs if request fails
myFetchePromise
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data[9]);
    })
    .catch(err => {
        console.error(`Could not get the products: ${err}`);
    });

console.log("Started request...");